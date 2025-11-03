import { FooterUpload } from "@/shared/footerUpload";
import { HeroTopArea } from "@/shared/hero-top-area";
import { JoinFormSection } from "./join-form";

import { createClient } from "@/utils/supabase/server";

async function getChurches() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("churches").select("*");

  if (error) {
    console.error("Error fetching churches:", error);
    return [];
  }

  return data || [];
}

export default async function JoinPage() {
  const churches = await getChurches();
  console.log(churches);
  return (
    <div>
      <HeroTopArea
        title="A few minutes today can give your church global visibility and direct support."
        description="Your work matters. The Providus Alliance gives you a space to share it in detail — so donors and supporters can truly see the heart of your project."
      />
      <JoinFormSection />
      <FooterUpload />
    </div>
  );
}
