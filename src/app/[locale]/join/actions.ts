import { createClient } from "@/utils/supabase/client";

import type { JoinFormData } from "./validation";

export interface ChurchData {
  id: string;
  name: string;
  contact_person: string;
  contact_email: string;
  country: string;
  language: string;
  website: null;
}

export interface SubmitResult {
  success: boolean;
  error?: string;
  data?: ChurchData;
}

export const submitChurchRegistration = async (
  formData: JoinFormData
): Promise<SubmitResult> => {
  try {
    const newChurch = {
      name: formData.churchName.trim(),
      contact_person: formData.primaryContact.trim(),
      contact_email: formData.email.trim(),
      country: formData.country,
      language: "en",
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

    return { success: true, data };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
};
