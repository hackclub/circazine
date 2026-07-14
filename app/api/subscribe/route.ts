import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string };

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const token = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableId = process.env.AIRTABLE_EMAIL_TABLE_ID;
    const emailField = "email";

    if (!token || !baseId || !tableId) {
      return NextResponse.json(
        { error: "Airtable env vars are not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableId)}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              [emailField]: email,
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Failed to send to Airtable:", errorText);
      return NextResponse.json(
        { error: "Failed to send to Airtable", details: errorText },
        { status: response.status }
      );
      
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}