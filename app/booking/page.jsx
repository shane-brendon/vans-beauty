import React from "react";
import Banner from "@/src/components/banner/Banner";
import BookingPriceList from "@/src/components/bookingPriceList/BookingPriceLIst";
import MeaTreatementPrice from "@/src/components/mea_treatementPrice/MeaTreatementPrice";
function page() {
  return (
    <>
      <Banner />
      <BookingPriceList />
      <MeaTreatementPrice type={"booking"}/>
    </>
  );
}

export default page;
