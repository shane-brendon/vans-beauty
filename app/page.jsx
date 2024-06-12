import Hero from "@/src/components/hero/Hero";
import Instagram from "@/src/components/instagram/Instagram";
import MeaAbout from "@/src/components/mea_about/MeaAbout";
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice";

export default function Home() {
  return (
    <main>
      <Hero />
      <MeaAbout />
      <MeaTreatementPrice />
      <Instagram />
    </main>
  );
}
