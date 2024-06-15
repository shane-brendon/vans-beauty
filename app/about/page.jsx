import React from "react";
import Banner from "@/src/components/banner/Banner";
import MeaAbout from "@/src/components/mea_about/MeaAbout";
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice";
import { MeaTeam } from "@/src/components/team/Team";
function page() {
  return (
    <>
      <Banner />
      <MeaAbout />
      <MeaTreatementPrice />
      <MeaTeam />
    </>
  );
}

export default page;
