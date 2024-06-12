import React from "react";
import Banner from "@/src/components/banner/Banner";
import MeaAbout from "@/src/components/mea_about/MeaAbout";
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice";
function page() {
  return (
    <>
      <Banner />
      <MeaAbout />
      <MeaTreatementPrice />
    </>
  );
}

export default page;
