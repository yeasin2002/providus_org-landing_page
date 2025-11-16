// import { generateWelcomeEmailText } from "@/app/api/email/templates/welcome-email-text.email";
import { generateWelcomeEmail } from "@/app/api/email/templates/welcome-email";

interface SendWelcomeEmailParams {
  churchName: string;
  contactName: string;
  email: string;
  token: string;
}

export const sendWelcomeEmail = async ({
  churchName,
  contactName,
  email,
  token,
}: SendWelcomeEmailParams): Promise<{ success: boolean; error?: string }> => {
  try {
    // Generate the program submission link with token
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const programSubmissionLink = `${baseUrl}/en/upload/?token=${token}`;

    // Generate HTML email
    const textContent = generateWelcomeEmail({
      churchName,
      contactName,
      programSubmissionLink,
    });

    // Send email via API route
    const response = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: email,
        subject: `Welcome to ICSA, ${churchName}! 🎉`,
        text: textContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to send email");
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
};

//     const textContent = `
// Dear ${contactName},

// Thank you for registering ${churchName} with the International Church Support Alliance!

// Your registration is complete, and you're now ready to share your church's story with supporters worldwide.

// Next Step: Submit Your Program
// To get your church featured on our showcase platform, please submit your program details by visiting:
// ${programSubmissionLink}

// This takes just 5-10 minutes and includes:
// - Your church's story and mission
// - One photo (required)
// - A video link (optional)

// What Happens After You Submit:
// ✓ Our team reviews your submission
// ✓ Your church gets featured on voices.icsa.church
// ✓ Supporters worldwide can discover and contact you
// ✓ You receive a verification certificate

// Need help? Contact us at support@icsa.church

// © ${new Date().getFullYear()} International Church Support Alliance
// Building bridges between churches and supporters worldwide
//     `.trim();
