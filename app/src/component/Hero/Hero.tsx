import React from "react";
import Image from "next/image";
import pic from "../../../../public/bus.png";

const bgStyle = {
  backgroundImage: 'url("/bus.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "520px",
  width: "100%",
};

export const Hero = () => {
  return (
    <div style={bgStyle}>
      <div className=" dark:bg-black/60 bg-white/80 backdrop:blur-sm dark:text-white duration-300 h-[520px] flex ">
        <div className="container grid grid-cols-1 place-items-center">
          {/* text section */}
          <div className="text-center space-y-5 py-14">
            <p
              data-aos="fade-up"
              className="text-primary text-3xl font-semibold uppercase"
            >
              Welcome to Ibom Express <br />
              Transport Company
            </p>
            {/* <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-4xl md:text-6xl font-semibold"
            >
              07062840515
            </h1> */}
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="tracking-[8px] text-base sm:text-xl font-semibold"
            >
              www.IETC.com
            </p>
          </div>
          {/* image section */}
          <div data-aos="zoom-in-right" data-aos-duration="1000">
            <Image
              src={pic}
              alt="red-car"
              className="max-h-[460px] sm:scale-125 translate-y-10 sm:translate-y-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
