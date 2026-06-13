import { NextResponse } from "next/server";

/**
 * Lead intake endpoint for the Request an Estimate form.
 *
 * This is a log-only stub: it validates the payload, logs the lead on the
 * server, and returns success so the form works end-to-end.
 *
 * TODO: wire this up to a real destination, e.g.
 *   - email the lead (Resend, SendGrid, Postmark)
 *   - push to a CRM / spreadsheet (HubSpot, Airtable, Google Sheets)
 *   - send an SMS notification (Twilio)
 * Add the relevant API key to .env and replace the console.log below.
 */

type LeadPayload = {
    name?: string;
    phone?: string;
    company?: string;
    address?: string;
    city?: string;
    service?: string;
    urgency?: string;
    details?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
};

export async function POST(req: Request) {
    let body: LeadPayload;

    try {
        body = await req.json();
    } catch {
        return NextResponse.json(
            { ok: false, error: "Invalid request body." },
            { status: 400 },
        );
    }

    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const address = body.address?.trim();

    if (!name || !phone || !address) {
        return NextResponse.json(
            { ok: false, error: "Name, phone, and property address are required." },
            { status: 422 },
        );
    }

    const lead = {
        receivedAt: new Date().toISOString(),
        name,
        phone,
        company: body.company?.trim() || null,
        address,
        city: body.city || null,
        service: body.service || null,
        urgency: body.urgency || null,
        details: body.details?.trim() || null,
        utm: {
            source: body.utm_source || null,
            medium: body.utm_medium || null,
            campaign: body.utm_campaign || null,
        },
    };

    // TODO: replace with email/CRM/SMS delivery.
    console.log("[lead] new estimate request:", JSON.stringify(lead));

    return NextResponse.json({ ok: true });
}
