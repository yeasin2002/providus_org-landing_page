import { createClient } from "@/utils/supabase/client";
import type { JoinFormData } from "./validation";

export interface SubmitResult {
  success: boolean;
  error?: string;
  data?: {
    id: string;
    name: string;
    contact_email: string;
  };
}

export const submitChurchRegistration = async (
  formData: JoinFormData
): Promise<SubmitResult> => {
  try {
    // Remove honeypot and math answer fields before submission
    // biome-ignore lint/correctness/noUnusedVariables: Fields intentionally destructured to exclude from submission
    const { website, mathAnswer, ...submitData } = formData;

    const newChurch = {
      name: submitData.churchName.trim(),
      contact_person: submitData.primaryContact.trim(),
      contact_email: submitData.email.trim(),
      country: submitData.country,
      language: "en", // Default language, can be extended
    };

    const supabase = createClient();

    const { data, error: insertError } = await supabase
      .from("churches")
      .insert([newChurch])
      .select()
      .single();

    if (insertError) {
      console.error("Database error:", insertError);
      return {
        success: false,
        error: "Failed to submit registration. Please try again.",
      };
    }

    console.log("Form submitted successfully:", data);

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
};
