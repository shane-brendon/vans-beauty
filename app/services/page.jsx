import React from "react";
import Banner from "@/src/components/banner/Banner";
import Services, { Cards } from "@/src/components/services/Services";
function page() {
  return (
    <>
      <Banner />
      <Services>
        <Cards />
      </Services>
    </> 
  );
}

export default page;
