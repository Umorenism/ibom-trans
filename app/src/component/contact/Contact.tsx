"use client";

import React, { useState } from "react";

export const Contact = () => {
  return (
    <div className="bg-primary text-black pt-24 pb-10 sm:pb-0 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* Left Content */}
          <div className="space-y-5 sm:p-16">
            <h1 data-aos="fade-up" className="text-2xl sm:text-3xl">
              Best in town
            </h1>
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold ">
              Trusted delivery services in town
            </h1>
            <p data-aos="fade-up" className="leading-8 tracking-wide">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              quibusdam veniam minima culpa similique? Dolorem minus quidem
              aliquam, quia adipisci, eius nihil, incidunt hic veniam eos a
              commodi itaque officia?
            </p>
          </div>

          {/* Right Form Content */}
          <div data-aos="fade-up" className="w-full">
            <div className="bg-white p-5 rounded-lg min-h-[400px] shadow-lg">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold py-4 text-white bg-black p-2">
                  Book start:
                </h2>
                <div className="mt-4">
                  <label
                    htmlFor="fromLocation"
                    className="block text-sm font-medium"
                  >
                    Travelling From:
                  </label>
                  <select
                    name=""
                    id=""
                    className="bg-transparent mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-transparent text-slate-700"
                    >
                      City or Travel
                    </option>
                  </select>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="fromLocation"
                    className="block text-sm font-medium"
                  >
                    Travelling To:
                  </label>
                  <select
                    name=""
                    id=""
                    className="bg-transparent mt-1 block w-full px-3 text-black py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-transparent text-slate-700 bg-slate-300"
                    >
                      City or Travel
                    </option>
                  </select>
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="fromLocation"
                    className="block text-sm font-medium"
                  >
                    Travel Date
                  </label>
                  <input
                    type="date"
                    id="fromLocation"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                    placeholder="Enter your location"
                    required
                  />
                </div>
                <button className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-primary transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
