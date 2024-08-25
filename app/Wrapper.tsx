"use client";

import React, { FC, ReactNode, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

interface iWrap {
  children: ReactNode;
}
const Wrapper: FC<iWrap> = ({ children }) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return <div>{children}</div>;
};

export default Wrapper;
