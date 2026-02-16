
// WARNING: Sending emails from the frontend exposes your Resend API Key. 
// For production, this should be moved to a Supabase Edge Function or Backend.

export const sendWelcomeEmail = async (email) => {
    const apiKey = import.meta.env.VITE_RESEND_API_KEY;

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                from: 'MominAI <onboarding@resend.dev>', // You can change this once you verify your domain in Resend
                to: [email],
                subject: 'Welcome to the MominAI Waitlist!',
                html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
            <h1 style="color: #3B82F6;">Welcome to the Future!</h1>
            <p>Hi there,</p>
            <p>Thank you for joining the <strong>MominAI waitlist</strong>. We're thrilled to have you with us!</p>
            <p>You are now in line to experience the first agent-native execution substrate. We'll notify you as soon as early access slots become available.</p>
            <p>In the meantime, feel free to check out our <a href="https://mowisai.com/spec">latest specification</a>.</p>
            <br />
            <p>Best regards,</p>
            <p><strong>The MominAI Team</strong></p>
          </div>
        `,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Resend API Error:', error);
        }

        return response.ok;
    } catch (error) {
        console.error('Failed to send email:', error);
        return false;
    }
};
