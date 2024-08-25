import React from "react";
import BookingID from "../src/component/Bookingid/BookingID";

const page = () => {
  return (
    <div className="h-screen bg-form flex flex-col gap-12 justify-center w-full  items-center duration-300  dark:bg-black">
      <BookingID />
    </div>
  );
};

export default page;
