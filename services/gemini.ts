
import { GoogleGenAI } from "@google/genai";

/* Initialize the GoogleGenAI client with the direct process.env.API_KEY as per guidelines */
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDesignAdvice = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `A customer is asking for a custom steel furniture piece: "${userInput}". Provide 3 professional design suggestions that emphasize durability, modern industrial style, and suitability for the Malawian climate (ventilation, rust prevention). Include estimated material considerations (e.g., square tubing, angle iron).`,
      config: {
        /* Using systemInstruction for persona to follow latest best practices */
        systemInstruction: "You are a professional industrial furniture designer for SteelBase Furniture in Malawi. Provide professional design suggestions and material considerations. Format the output as a friendly and helpful response.",
        temperature: 0.7,
        topP: 0.9,
      }
    });
    /* Accessing response.text directly as a property (not a method) */
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our design team is currently busy, but please submit your request and we will get back to you with a personalized sketch.";
  }
};
