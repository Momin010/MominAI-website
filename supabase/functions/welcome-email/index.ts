
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: { 'Access-Control-Allow-Origin': '*' } })
    }

    try {
        const { record } = await req.json()
        const email = record.email

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'MowisAI <onboarding@resend.dev>',
                to: [email],
                subject: 'Welcome to the MowisAI Waitlist!',
                html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            <h1 style="color: #00d1c1;">Welcome to the Future!</h1>
            <p>Hi there,</p>
            <p>Thank you for joining the <strong>MowisAI waitlist</strong>. We're thrilled to have you with us!</p>
            <p>You are now in line to experience the first agent-native execution substrate. We'll notify you as soon as early access slots become available.</p>
            <p>In the meantime, feel free to check out our <a href="https://mowisai.com/spec">latest specification</a>.</p>
            <br />
            <p>Best regards,</p>
            <p><strong>The MowisAI Team</strong></p>
          </div>
        `,
            }),
        })

        const data = await res.json()
        return new Response(JSON.stringify(data), {
            headers: { 'Content-Type': 'application/json' },
            status: 200,
        })
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 400,
        })
    }
})
