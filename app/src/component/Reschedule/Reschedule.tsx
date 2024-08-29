"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

export const Reschedule = () => {
  // usenavigate = useNevigate("/dummy")

  const fetchStuff = async () => {
    await axios
      .get("")
      .then((response) => {
        console.log("Api response:  ", response.data);
      })
      .catch((err) => {
        console.log("some error:  ", err);
      });
  };
  return (
    <div className="w-full mx-auto  md:w-[50%] p-4 sm:p-8">
      <div data-aos="fade-up" className="w-full">
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white bg-black p-2 rounded">
            Reschedule Date
          </h2>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                id="travelDate"
                placeholder="Enter your booking ID"
                className="mt-1 block w-full px-3 py-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="travelDate"
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                required
              />
            </div>
            <div>
              <input
                type="date"
                id="travelDate"
                className="mt-1 block w-full px-3 py-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                required
              />
            </div>

            <button className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
              Reschedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
