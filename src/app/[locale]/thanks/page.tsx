import logo from "@/assets/logo-dark.svg";
import { CTAButton } from "@/components/reUsabale/buttons";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-white container mx-auto font-montserrat py-10">
      <Image src={logo} alt="Logo" />

      {/* Main Thank You Section */}
      <section className="flex flex-col items-center justify-center pt-20 pb-16 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[#023C5E] text-center mb-4 text-balance ">
          Thank you for joining the Alliance!
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
          Your journey has just begun — and we're excited to have you with us.
        </p>

        {/* Party Popper Icon */}
        <div className="mb-12">
          <div className="text-6xl">🎉</div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="bg-gray-100 rounded-3xl mx-6 md:mx-12 py-16 px-8 md:px-12 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Are You Part Of An NGO Or Church?
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Want To See What Other Churches Are Sharing?
        </h3>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Check out the Showcase page, where churches from around the world tell
          their stories and inspire new supporters.
        </p>

        {/* CTA Button */}
        <CTAButton text=" Let’s See the Others" href="/" />
      </section>
    </main>
  );
}
