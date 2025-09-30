import ReservationPage from "@/shared/sections/reservation/reservation";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reservation",
};

const Page = () => {
  return (
    <div className="pt-[80px]">
      <ReservationPage />
    </div>
  );
};

export default Page;
