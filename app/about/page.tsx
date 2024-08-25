import React from "react";
import { About } from "../src/component/About/About";
import { AppStore } from "../src/component/AppStore/AppStore";

const page = () => {
  return (
    <div className="h-screen flex flex-col gap-12 justify-center w-full  items-center duration-300  dark:bg-black">
      <About />
    </div>
  );
};

export default page;
