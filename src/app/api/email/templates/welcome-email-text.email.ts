interface WelcomeEmailTextParams {
  churchName: string;
  contactName: string;
  programSubmissionLink: string;
}

export const generateWelcomeEmailText = ({
  churchName,
  contactName,
  programSubmissionLink,
}: WelcomeEmailTextParams): string => {
  return `
Welcome to ICSA, ${churchName}!

Dear ${contactName},

Thank you for registering ${churchName} with the International Church Support Alliance! We're excited to have you join our global network of churches making a difference.

Your registration is complete, and you're now ready to share your church's story with supporters worldwide.


NEXT STEP: Share Your Program

To get your church featured on our showcase platform, please submit your program details:

- Tell your church's story and mission
- Upload one photo (required)
- Add a video link (optional)

This takes just 5-10 minutes to complete.

Submit your program here:
${programSubmissionLink}


What Happens After You Submit:

- Our team reviews your submission
- Your church gets featured on voices.icsa.church
- Supporters worldwide can discover and contact you
- You receive a verification certificate


Need help? Have questions?
Contact us at support@icsa.church

${new Date().getFullYear()} International Church Support Alliance
Building bridges between churches and supporters worldwide
  `.trim();
};
