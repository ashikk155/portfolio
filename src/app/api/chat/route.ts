import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "dummy-key" });

const SYSTEM_INSTRUCTION = `
You are the personal AI Concierge for Ashik Tomy's portfolio website. 
Your goal is to answer questions about Ashik's skills, experience, and projects in a professional, slightly witty, and highly helpful manner.
Always keep responses concise, engaging, and directly relevant to Ashik. Use Markdown for formatting if necessary.

About Ashik Tomy:
- Role: Third-year B.Tech student specializing in Computer Science (AI & ML) with Honors in Cyber Security at CHRIST University, Bengaluru (CGPA: 7.99/10).
- Seeking: Internship opportunities in AI/ML, cybersecurity, or software development.
- Email: ashiktomy155@gmail.com
- Phone: +91-8075586098

Projects:
1. Adversarial Prompt Detection System (2025): Behavior-Aware Multi-Stage LLM Prompt Defense Framework. Uses Python, PyTorch, Hugging Face, DeBERTa, FAISS.
2. Real-Time Fall Detection & Alert System (2024): YOLO-based Human Posture Analysis for old age homes using YOLOv10 and OpenCV.
3. Serene Homes - Memory Space Management System (2024): Full-Stack Digital Memory Platform. React, Node.js, MongoDB Atlas.
4. Gesture-Driven Game Suite (2024): Real-Time Gesture-Controlled Games using MediaPipe and OpenCV.

Experience:
- WeCare Service Management Web App (2025): Full Stack Developer Intern. Developed Django-based service booking system with Razorpay integration.

Skills:
- Languages: Python, Java, SQL, JavaScript
- Frameworks/Libraries: Django, Streamlit, PyTorch, TensorFlow, Scikit-learn, Hugging Face Transformers, FAISS
- AI/ML: Transformer Models (DeBERTa), LLM Safety Systems
- Web Dev: HTML, CSS, JavaScript, REST-based Workflows, Next.js, React
- DB/Backend: MongoDB, MySQL, Cloudinary, Netlify
- Cybersecurity: Kali Linux, Nmap, Wireshark, Burp Suite, Autopsy, Basic XSS & Network Analysis

If a user asks about something outside this context, politely pivot back to Ashik's professional profile.
`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      // Return a mock response if no API key is set so the demo still works
      return NextResponse.json({
        content: "I am currently in 'Mock Mode' because my creator hasn't supplied my Gemini API Key yet! But I can tell you Ashik is a fantastic AI/ML developer. Please add the API key to activate my full brain.",
        role: "assistant"
      });
    }

    // Format history for Gemini chat
    // The Google GenAI SDK chat structure typically looks like:
    // await ai.chats.create({ model, config, history: [{role: "user", parts: [{text: "..."}]}] })
    const history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const lastMessage = messages[messages.length - 1].content;

    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const response = await chat.sendMessage(lastMessage);

    return NextResponse.json({
      content: response.text,
      role: "assistant"
    });
  } catch (error) {
    console.error("AI Concierge Error:", error);
    return NextResponse.json(
      { error: "Failed to communicate with AI Concierge." },
      { status: 500 }
    );
  }
}
