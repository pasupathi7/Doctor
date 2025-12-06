import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToAI = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    const chatHistory = history.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));

    const chat = ai.chats.create({
      model: "gemini-2.5-flash",
      messages: chatHistory,
      config: {
        systemInstruction: "You are AI Doctor, a helpful, empathetic, and professional medical AI assistant. You provide general health information and guidance but always include a disclaimer that you are not a replacement for professional in-person medical advice. Keep answers concise and easy to understand.",
      },
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I apologize, but I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm having trouble connecting to the medical database right now. Please try again later.";
  }
};