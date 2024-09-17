import { convertToCoreMessages, streamText } from "ai";
import { env } from "$env/dynamic/private";
import type { RequestHandler } from "./$types";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: env.GOOGLE_GENERATIVE_AI_API_KEY ?? "",
});

export const POST = (async ({ request }) => {
  const { messages, data } = await request.json();

  console.log(data.language, "idioma seleccionado");

  const initialMessages = messages.slice(0, -1);

  const result = await streamText({
    model: google("models/gemini-1.5-flash-latest"),
    messages: [
      ...convertToCoreMessages(initialMessages),
      {
        role: "user",
        content: [{ type: "image", image: data.imageUrl }],
      },
      {
        role: "assistant",
        content: [
          {
            type: "text",
            text: `The user who is a developer must attach an image and you must generate 3 different alts with less than 125 characters in ${data.language}.`,
          },
        ],
      },
    ],
  });

  return result.toDataStreamResponse();
}) satisfies RequestHandler;
