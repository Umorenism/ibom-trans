"use client";

import React, { useState } from "react";

const Form = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  return (
    <div className="w-full mx-auto  md:w-[50%] p-4 sm:p-8">
      <div data-aos="fade-up" className="w-full">
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white bg-black p-2 rounded">
            Book Start
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="fromLocation"
                className="block text-sm font-medium text-gray-700"
              >
                Travelling From:
              </label>
              <select
                name="fromLocation"
                id="fromLocation"
                className="mt-1 block w-full px-3 py-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              >
                <option value="" disabled className="text-slate-700">
                  Select City or Travel
                </option>
                <option value="city1" className="text-slate-700">
                  City 1
                </option>
                <option value="city2" className="text-slate-700">
                  City 2
                </option>
                <option value="city3" className="text-slate-700">
                  City 3
                </option>
                <option value="city4" className="text-slate-700">
                  City 4
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="toLocation"
                className="block text-sm font-medium text-gray-700"
              >
                Travelling To:
              </label>
              <select
                name="toLocation"
                id="toLocation"
                className="mt-1 block w-full px-3 py-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              >
                <option value="" disabled className="text-slate-700">
                  Select City or Travel
                </option>
                <option value="city1" className="text-slate-700">
                  City 1
                </option>
                <option value="city2" className="text-slate-700">
                  City 2
                </option>
                <option value="city3" className="text-slate-700">
                  City 3
                </option>
                <option value="city4" className="text-slate-700">
                  City 4
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="travelDate"
                className="block text-sm font-medium text-gray-700"
              >
                Travel Date
              </label>
              <input
                type="date"
                id="travelDate"
                className="mt-1 block w-full px-3 py-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                required
              />
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
