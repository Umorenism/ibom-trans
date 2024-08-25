import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarked,
  FaMapMarker,
  FaMousePointer,
  FaTwitter,
} from "react-icons/fa";
import { FaAndroid, FaGoogle } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      {/* upper section */}
      <div className="bg-primary">
        <div className="container text-black text-center py-10 lg:py-14 text-2xl font-bold space-y-4">
          <p>WE ARE READY TO TAKE YOUR CALL 24 HOURS,7 DAYS</p>
          <h1>+1239060789908</h1>
        </div>
      </div>
      {/* lower section */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-12">
        {/* first col section */}
        <div className="space-y-6">
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            About Cab RIDE
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            et assumenda praesentium dolorum quaerat excepturi amet ratione
            molestiae voluptatum fugiat.
          </p>
          {/* social link */}
          <div className="flex items-center text-primary gap-3 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaGoogle />
            <FaTwitter />
          </div>
        </div>

        {/* second col section */}
        <div className="space-y-6">
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            Download
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            et assumenda praesentium dolorum quaerat excepturi amet ratione
            molestiae voluptatum fugiat.
          </p>
          <h1 className="text-primary text-xl font-semiboldflex items-center">
            Andriod user{" "}
            <span>
              <FaAndroid className="text-2xl text-bl" />
            </span>
          </h1>
          {/* social link */}
        </div>

        {/* third col section */}

        <div className="space-y-6">
          <h1 className="text-2xl py-3 font-bold uppercase border-b-8 border-primary">
            Contacts
          </h1>
          <div>
            <FaMapMarker />
            123 itam street,Akwa Ibom State
          </div>
          <div className="flex items-center gap-4">
            <MdCall />
            +233 8060 1777
          </div>
          <div className="flex items-center gap-4">
            <MdCall />
            www.google.com
          </div>
          <div className="flex items-center gap-4">
            <FaMousePointer /> www.cabhub.com
          </div>
          <div className="flex items-center gap-4">
            <p>Copyright @ 2024,All right reserverd</p>
          </div>
        </div>
      </div>
    </div>
  );
};
