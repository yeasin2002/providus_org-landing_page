import { z } from "zod";

export const joinSchema = z.object({
  churchName: z.string().min(2, "Church name must be at least 2 characters"),
  primaryContact: z
    .string()
    .min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  country: z.string().min(2, "Please enter your country"),
  website: z.string().optional(), // Honeypot field
  mathAnswer: z.string().min(1, "Please answer the security question"),
});

export type JoinFormData = z.infer<typeof joinSchema>;

// Generate simple math question
export const generateMathQuestion = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return { question: `${num1} + ${num2}`, answer: num1 + num2 };
};

export const MIN_SUBMIT_TIME = 3000; // 3 seconds minimum
export const MIN_INTERACTION_COUNT = 5;
