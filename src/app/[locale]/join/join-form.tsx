"use client";

import startSharpIcon from "@/assets/star-sharp.svg";
import { Badge } from "@/components/ui/badge";
import { countries } from "@/data/countries-list";
import { CTAButton } from "@/shared/buttons";
import { FormInput } from "@/shared/form-input";
import { supabase } from "@/utils/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitChurchRegistration } from "./actions";
import { sendWelcomeEmail } from "./email-service";
import {
  checkHoneypot,
  checkMathAnswer,
  checkSubmitTime,
} from "./spam-protection";
import {
  generateMathQuestion,
  joinSchema,
  type JoinFormData,
} from "./validation";

const workSteps = [
  "It doesn't take much to open new doors for your church. By joining the Alliance, your ministry becomes visible to people worldwide who are ready to support. ",
  "Your story and photos are displayed so that donors and partners can contact you directly — no middleman, no complicated process. ",
  "A few minutes here can mean lasting recognition for your church and real opportunities for your mission. Do it for your cause. Do it for your church.",
];




export const JoinFormSection = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<JoinFormData>({
    resolver: zodResolver(joinSchema),
  });

  const [formLoadTime] = useState<number>(Date.now());
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [mathQuestion] = useState(generateMathQuestion());

  const onSubmit = async (data: JoinFormData) => {
    setSubmitAttempted(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      // Run spam protection checks
      const spamChecks = [
        checkHoneypot(data),
        checkSubmitTime(formLoadTime),
        checkMathAnswer(data.mathAnswer, mathQuestion.answer),
      ];

      for (const check of spamChecks) {
        if (!check.isValid) {
          setErrorMessage(check.errorMessage || "Invalid submission");
          setSubmitAttempted(false);
          return;
        }
      }

      // Check if email already exists
      const { data: existingChurch, error: fetchError } = await supabase
        .from("churches")
        .select("*")
        .eq("contact_email", data.email)
        .single();

      const churchExists = existingChurch && !fetchError;

      if (churchExists) {
        // Email already registered - resend welcome email
        setErrorMessage(
          "Email already exists. Check your email for the welcome message."
        );
        setSubmitAttempted(false);

        await sendWelcomeEmail({
          churchName: data.churchName,
          contactName: data.primaryContact,
          email: data.email,
          token: existingChurch.id,
        });
        return;
      }

      // New registration - create church record
      const result = await submitChurchRegistration(data);

      if (!result.success || !result.data) {
        setErrorMessage(result.error || "Submission failed. Please try again.");
        setSubmitAttempted(false);
        return;
      }

      // Send welcome email to new church
      const emailResult = await sendWelcomeEmail({
        churchName: data.churchName,
        contactName: data.primaryContact,
        email: data.email,
        token: result.data.id,
      });

      if (!emailResult.success) {
        console.error("Email sending failed:", emailResult.error);
      }

      // Redirect to thank you page
      router.push("/thanks");
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
      setSubmitAttempted(false);
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto font-montserrat">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="bg-[#F7F3E8] text-[#023C5E] rounded-full px-6 py-1 mb-4">
          <Image src={startSharpIcon} alt="Star" />
          <span className="text-xl  font-bold">PROCESS</span>
        </Badge>

        <h2 className="text-4xl md:text-5xl font-bold mb-6" id="join-here">
          How It Works
        </h2>
        {workSteps.map((item) => {
          return (
            <p
              className="text-lg text-muted-foreground  mx-auto mb-4 max-w-5xl"
              key={item}
            >
              {item}
            </p>
          );
        })}
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gold rounded-2xl p-8 md:p-12 bg-card shadow-sm font-montserrat"
      >
        <div
          style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
          aria-hidden="true"
        >
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            {...register("website")}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormInput
            label="Church Name"
            required
            registration={register("churchName")}
            error={errors.churchName}
          />
          <FormInput
            label="Your Name"
            required
            registration={register("primaryContact")}
            error={errors.primaryContact}
          />
        </div>

        <div className="mb-6">
          <FormInput
            label="E-Mail"
            required
            type="email"
            registration={register("email")}
            error={errors.email}
          />
        </div>

        <div className="mb-8">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="country"
          >
            Country <span className="text-red-500">*</span>
          </label>
          <select
            {...register("country", { required: "Country is required" })}
            className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold ${
              errors.country ? "border-red-500" : ""
            }`}
            defaultValue=""
          >
            <option value="" disabled>
              Select your country
            </option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

        {/* Simple Math CAPTCHA - Frontend Only */}
        <div className="mb-8">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="mathAnswer"
          >
            Security Question <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4">
            <div className="bg-gray-50 border border-gray-300 rounded-md px-4 py-3 text-lg font-semibold">
              {mathQuestion.question} = ?
            </div>
            <input
              type="text"
              {...register("mathAnswer")}
              placeholder="Your answer"
              className={`w-32 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold ${
                errors.mathAnswer ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          {errors.mathAnswer && (
            <p className="text-red-500 text-sm mt-1">
              {errors.mathAnswer.message}
            </p>
          )}
          <p className="text-gray-500 text-sm mt-2">
            Please solve this simple math problem to verify you're human
          </p>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-sm">{errorMessage}</p>
          </div>
        )}

        {/* Success message */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-600 text-sm font-medium">
              {successMessage}
            </p>
          </div>
        )}

        <div className="flex justify-center">
          <CTAButton type="submit" disabled={isSubmitting || submitAttempted}>
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <title>Submitting...</title>
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : submitAttempted ? (
              "Submitted"
            ) : (
              "Join the Alliance for Free"
            )}
          </CTAButton>
        </div>
      </form>
    </section>
  );
};
