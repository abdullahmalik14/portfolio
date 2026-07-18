import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // Ready for Resend / email provider integration.
    // Without API keys, acknowledge valid payloads so the UI can fall back to mailto.
    console.info("Contact form submission:", {
      name: data.name,
      email: data.email,
      messageLength: data.message.length,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
