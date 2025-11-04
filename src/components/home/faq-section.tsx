"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import whyImg from "../../../public/assets/whyImage.png";
import { CTAButton, PrimaryButton } from "../reUsabale/buttons";
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this really free?",
      answer:
        "Yes! Membership in our fellowship is completely free. We believe in supporting churches without financial barriers. The only costs you might encounter are optional, such as applying for grants or requesting additional services.",
    },
    {
      question: "Do I need technical skills?",
      answer:
        "Not at all! Our process is designed to be simple and accessible. We guide you through everything via email, step by step. You just need to reply to emails and share your church's story. We handle all the technical aspects for you.",
    },
    {
      question: "Is this denominational?",
      answer:
        "No, we welcome churches from all Christian denominations. Our fellowship is designed to be inclusive and supportive of diverse theological perspectives, united in our mission to connect and support ministries worldwide.",
    },
    {
      question: "How do donors or European partners reach us?",
      answer:
        "Once your church is onboarded and your profile is live on our platform, donors and partner churches can discover your ministry through our network. We facilitate introductions and provide a showcase page where interested parties can learn about your work and reach out directly.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="relative to-0% w-full bg-[#023C5E0A] py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      id="faq"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Image src={whyImg} alt="" />
          </div>

          {/* FAQ Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <PrimaryButton text="FAQ" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Frequently Asked
                <br />
                Questions
              </h2>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-[#F5F5F5] hover:bg-gray-50 transition-colors"
                    type="button"
                  >
                    <span className="font-semibold text-gray-900 text-lg pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <CTAButton text="See How Simple It Is to Join" href="/join" />
          </div>
        </div>
      </div>
    </div>
  );
}
