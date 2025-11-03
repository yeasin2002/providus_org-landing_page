interface WelcomeEmailParams {
  churchName: string;
  contactName: string;
  programSubmissionLink: string;
}

export const generateWelcomeEmail = ({
  churchName,
  contactName,
  programSubmissionLink,
}: WelcomeEmailParams): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to ICSA</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" style="width: 100%; max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header with Gold Border -->
          <tr>
            <td style="background: linear-gradient(135deg, #023C5E 0%, #034d73 100%); padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0; border-top: 4px solid #D4AF37;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold; letter-spacing: 1px;">
                Welcome to ICSA! 🎉
              </h1>
              <p style="margin: 10px 0 0 0; color: #F7F3E8; font-size: 16px;">
                International Church Support Alliance
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 20px 0; color: #333333; font-size: 18px; line-height: 1.6;">
                Dear <strong>${contactName}</strong>,
              </p>
              
              <p style="margin: 0 0 20px 0; color: #555555; font-size: 16px; line-height: 1.6;">
                Thank you for registering <strong>${churchName}</strong> with the International Church Support Alliance! We're excited to have you join our global network of churches making a difference.
              </p>

              <p style="margin: 0 0 20px 0; color: #555555; font-size: 16px; line-height: 1.6;">
                Your registration is complete, and you're now ready to share your church's story with supporters worldwide.
              </p>

              <!-- What's Next Section -->
              <div style="background-color: #F7F3E8; border-left: 4px solid #D4AF37; padding: 20px; margin: 30px 0; border-radius: 4px;">
                <h2 style="margin: 0 0 15px 0; color: #023C5E; font-size: 20px; font-weight: bold;">
                  📋 Next Step: Share Your Program
                </h2>
                <p style="margin: 0 0 15px 0; color: #333333; font-size: 15px; line-height: 1.6;">
                  To get your church featured on our showcase platform, please submit your program details:
                </p>
                <ul style="margin: 0 0 15px 0; padding-left: 20px; color: #555555; font-size: 15px; line-height: 1.8;">
                  <li>Tell your church's story and mission</li>
                  <li>Upload one photo (required)</li>
                  <li>Add a video link (optional)</li>
                </ul>
                <p style="margin: 0; color: #666666; font-size: 14px; font-style: italic;">
                  ⏱️ This takes just 5-10 minutes to complete.
                </p>
              </div>

              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a href="${programSubmissionLink}" 
                       style="display: inline-block; background: linear-gradient(135deg, #D4AF37 0%, #c9a332 100%); color: #023C5E; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-size: 18px; font-weight: bold; box-shadow: 0 4px 6px rgba(212, 175, 55, 0.3); transition: transform 0.2s;">
                      Submit Your Program →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin: 20px 0 0 0; color: #777777; font-size: 14px; line-height: 1.6; text-align: center;">
                Or copy this link: <br>
                <a href="${programSubmissionLink}" style="color: #023C5E; word-break: break-all;">${programSubmissionLink}</a>
              </p>

              <!-- Benefits Section -->
              <div style="margin-top: 40px; padding-top: 30px; border-top: 2px solid #f0f0f0;">
                <h3 style="margin: 0 0 20px 0; color: #023C5E; font-size: 18px; font-weight: bold;">
                  ✨ What Happens After You Submit:
                </h3>
                <table role="presentation" style="width: 100%;">
                  <tr>
                    <td style="padding: 10px 0;">
                      <span style="color: #D4AF37; font-size: 20px; margin-right: 10px;">✓</span>
                      <span style="color: #555555; font-size: 15px;">Our team reviews your submission</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0;">
                      <span style="color: #D4AF37; font-size: 20px; margin-right: 10px;">✓</span>
                      <span style="color: #555555; font-size: 15px;">Your church gets featured on voices.icsa.church</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0;">
                      <span style="color: #D4AF37; font-size: 20px; margin-right: 10px;">✓</span>
                      <span style="color: #555555; font-size: 15px;">Supporters worldwide can discover and contact you</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0;">
                      <span style="color: #D4AF37; font-size: 20px; margin-right: 10px;">✓</span>
                      <span style="color: #555555; font-size: 15px;">You receive a verification certificate</span>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 30px; text-align: center; border-radius: 0 0 12px 12px; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 10px 0; color: #666666; font-size: 14px;">
                Need help? Have questions?
              </p>
              <p style="margin: 0 0 20px 0; color: #023C5E; font-size: 14px;">
                Contact us at <a href="mailto:support@icsa.church" style="color: #023C5E; text-decoration: none; font-weight: bold;">support@icsa.church</a>
              </p>
              
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                <p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.6;">
                  © ${new Date().getFullYear()} International Church Support Alliance<br>
                  Building bridges between churches and supporters worldwide
                </p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
};
