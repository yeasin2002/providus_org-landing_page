export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
export const SUPABASE_ANON_KEY = process.env
  .NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const BREVO_API_KEY = process.env.BREVO_API_KEY as string;
export const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL as string;
export const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME as string;


export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";