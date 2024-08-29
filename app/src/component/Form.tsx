"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Link from "next/link";

const Form = () => {
  const [fromLocationValue, setFromLocationValue] = useState("");
  const [toLocationValue, setToLocationValue] = useState("");
  // const [vehicleValue, setVehicleValue] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState<string[]>([]);
  const [destination, setDestination] = useState<string[]>([]);
  const [timeTp, setTimeTp] = useState<string[]>([]);
  const [vT, setvT] = useState<string[]>([]);
  const [buttonState, setButtonState] = useState(false);
  const [bookingId, setBookingId] = useState("");

  // const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const fetchAvailableCity = async () => {
      try {
        const res = await axios.get(
          "https://ibom-transport.onrender.com/api/shuttle/get-all-shuttle"
        );

        let cit: string[] = [];
        let des: string[] = [];
        let tt: string[] = [];
        let vv: string[] = [];

        res.data.shuttles.forEach((shuttle: any) => {
          cit.push(shuttle.fromLocation);
          des.push(shuttle.destination);
          tt.push(shuttle.timeOfTravel);
          vv.push(shuttle.vehicleType);
        });

        setCity(cit);
        setDestination(des);
        setTimeTp(tt);
        setvT(vv);
      } catch (err) {
        console.error("City fetching error:", err);
      }
    };

    fetchAvailableCity();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setButtonState(false);
    try {
      const res = await axios.get(
        "https://ibom-transport.onrender.com/api/shuttle/get-shuttle",
        {
          params: {
            fromLocation: fromLocationValue,
            destination: toLocationValue,
            timeOfTravel: dateValue,
            vehicleType: vehicleType,
          },
        }
      );
      setLoading(false);

      console.log("Booking response:", res.data);
      if (res.data) {
        setButtonState(true);
        let book1 = [];
        for (let x = 0; x < res.data.length; x++) {
          book1.push(res.data[x]);
        }
        setBookingId(book1[0].bookingId);
      }
    } catch (err) {
      setLoading(false);
      setButtonState(false);
      console.error("Booking error:", err);
    }
  };

  return (
    <div className="w-full mx-auto md:w-[50%] p-4 sm:p-8">
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
                value={fromLocationValue}
                onChange={(e) => setFromLocationValue(e.target.value)}
                id="fromLocation"
                className="mt-1 block w-full px-3 py-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              >
                <option value="" disabled className="text-slate-700">
                  Select City or Travel
                </option>
                {city.length > 0 ? (
                  city.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No cities available
                  </option>
                )}
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
                value={toLocationValue}
                onChange={(e) => setToLocationValue(e.target.value)}
                id="toLocation"
                className="mt-1 block w-full px-3 py-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              >
                <option value="" disabled className="text-slate-700">
                  Select Destination
                </option>
                {destination.length > 0 ? (
                  destination.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No destinations available
                  </option>
                )}
              </select>
            </div>
            <div>
              <label
                htmlFor="vehicleType"
                className="block text-sm font-medium text-gray-700"
              >
                Vehicle Type:
              </label>
              <select
                name="vehicleType"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                id="vehicleType"
                className="mt-1 block w-full px-3 py-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              >
                <option value="" disabled className="text-slate-700">
                  Select Vehicle Type
                </option>
                {vT.length > 0 ? (
                  vT.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No vehicles available
                  </option>
                )}
              </select>
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Travelling Date:
              </label>
              <select
                name="date"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                id="date"
                className="mt-1 mb-4 block w-full px-3 py-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              >
                <option value="" disabled className="text-slate-700">
                  Select Travel Date
                </option>
                {timeTp.length > 0 ? (
                  timeTp.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No travel times available
                  </option>
                )}
              </select>
            </div>

            {buttonState == true ? (
              <Link
                className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
                href={`/dummy?toLocation=${toLocationValue}&fromLocation=${fromLocationValue}&vehicleType=${vehicleType}&dateValue=${dateValue}&orderId
=${bookingId}`}
              >
                Done
              </Link>
            ) : (
              <button
                className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
                onClick={fetchData}
                disabled={loading}
              >
                {loading ? "Booking.." : "Book Now"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
