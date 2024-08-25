import React, { Suspense } from "react";

import Dummypage from "../src/component/Dummy/Dummypage";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-screen flex flex-col gap-12 justify-center w-full items-center duration-300 dark:bg-black">
        <Dummypage />
      </div>
    </Suspense>
  );
};

export default Page;
