"use server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});



export async function genrateTextAction(prompt: string): Promise<string> {
  try {
    if (!prompt.trim()) {
      return "Please enter a prompt.";
    }

    const response = await Promise.race([
      ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
      }),

      new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("Request timeout")), 20000)
      ),
    ]);

    return response.text ?? "No response generated.";
  }catch (error: any) {
  console.error("AI Error:", error);

  if (error.status === 429) {
    return "Daily AI limit reached. Please try again tomorrow.";
  }

  if (error.status === 503) {
    return "AI is currently busy. Please try again later.";
  }

  return "Something went wrong.";
}
}
