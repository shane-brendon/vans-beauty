import Hero from "@/src/components/hero/Hero";
import Instagram from "@/src/components/instagram/Instagram";
import MeaAbout from "@/src/components/mea_about/MeaAbout";
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice";
import Testiamonials from "@/src/components/testimonials/Testiamonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <MeaAbout />
      <MeaTreatementPrice />
      <Testiamonials/>
      <Instagram />
    </main>
  );
}
