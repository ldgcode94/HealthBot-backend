import { injectable } from "tsyringe";
import axios from "axios";
import { IGPTService } from "./IGPTService";

@injectable()
export class GPTService implements IGPTService {
  async getAnswer(question: string): Promise<string> {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-chat",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful and concise medical assistant. Answer only general medical questions and do not provide diagnoses or prescriptions. you should have the capacity to identify not medical questions and avoid answering them.",
          },
          {
            role: "user",
            content: question,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const answer = response.data.choices[0].message.content;
    return answer;
  }
}
