import React from "react";

import { Reschedule } from "../src/component/Reschedule/Reschedule";

const page = () => {
  return (
    <div className="h-screen bg-form flex flex-col gap-12 justify-center w-full  items-center duration-300  dark:bg-black">
      <Reschedule />
    </div>
  );
};

export default page;
