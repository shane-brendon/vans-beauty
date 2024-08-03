import React from "react";
import Banner from "@/src/components/banner/Banner";
import ContactCards from "@/src/components/contactCarts/ContactCards";
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice";
function page() {
  return (
    <>
      <Banner />
      <ContactCards />
      <MeaTreatementPrice />
    </>
  );
}

export default page;
