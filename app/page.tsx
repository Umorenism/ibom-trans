"use client";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "./src/component/Navbar/Navbar";
import { Hero } from "./src/component/Hero/Hero";
import { Contact } from "./src/component/contact/Contact";
import { BestCad } from "./src/component/BestCad/BestCad";
import { About } from "./src/component/About/About";
import { AppStore } from "./src/component/AppStore/AppStore";
import { Testimonial } from "./src/component/Testiomonial/Testimonial";
import Wrapper from "./Wrapper";

function page() {
  return (
    <Wrapper>
      <div className="dark:bg-black dark:text-white">
        <Hero />
        <Contact />
        <BestCad />
        <About />
        <AppStore />
        <Testimonial />
      </div>
    </Wrapper>
  );
}
export default page;
