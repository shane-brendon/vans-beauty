import React from "react";
import Banner from "@/src/components/banner/Banner";
import MeaAbout from "@/src/components/mea_about/MeaAbout";
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice";
import { MeaTeam } from "@/src/components/team/Team";
import OpenHours from "@/src/components/openingHours/OpenHours";
import Instagram from "@/src/components/instagram/Instagram";
function page() {
  return (
    <>
      <Banner />
      <MeaAbout />
      <MeaTreatementPrice />
      <MeaTeam />
      <OpenHours />
      <Instagram/>
    </>
  );
}

export default page;
