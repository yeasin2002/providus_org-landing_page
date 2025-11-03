import type { JoinFormData } from "./validation";
import { MIN_INTERACTION_COUNT, MIN_SUBMIT_TIME } from "./validation";

export interface SpamCheckResult {
  isValid: boolean;
  errorMessage?: string;
}

export const checkHoneypot = (data: JoinFormData): SpamCheckResult => {
  if (data.website) {
    console.warn("Spam detected: honeypot field filled");
    return {
      isValid: false,
      errorMessage: "Invalid submission detected.",
    };
  }
  return { isValid: true };
};

export const checkSubmitTime = (formLoadTime: number): SpamCheckResult => {
  const timeElapsed = Date.now() - formLoadTime;
  if (timeElapsed < MIN_SUBMIT_TIME) {
    return {
      isValid: false,
      errorMessage:
        "Please take a moment to review your information before submitting.",
    };
  }
  return { isValid: true };
};

export const checkMathAnswer = (
  userAnswer: string,
  correctAnswer: number
): SpamCheckResult => {
  const parsedAnswer = parseInt(userAnswer || "0", 10);
  if (parsedAnswer !== correctAnswer) {
    return {
      isValid: false,
      errorMessage:
        "Incorrect answer to the security question. Please try again.",
    };
  }
  return { isValid: true };
};

export const checkInteractionCount = (
  interactionCount: number
): SpamCheckResult => {
  if (interactionCount < MIN_INTERACTION_COUNT) {
    console.warn("Insufficient interaction detected");
    return {
      isValid: false,
      errorMessage: "Please review the form before submitting.",
    };
  }
  return { isValid: true };
};
