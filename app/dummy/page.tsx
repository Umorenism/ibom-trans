import React from "react";
import BookingID from "../src/component/Bookingid/BookingID";
import Dummypage from "../src/component/Dummy/Dummypage";

const page = () => {
  return (
    <div className="h-screen flex flex-col gap-12 justify-center w-full  items-center duration-300  dark:bg-black">
      <Dummypage />
    </div>
  );
};

export default page;
