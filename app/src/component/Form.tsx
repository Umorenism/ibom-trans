"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

// Define the City interface
interface City {
  fromLocation: string;
}

const Form = () => {
  const [fromLocationValue, setFromLocationValue] = useState("");
  const [toLocationValue, setToLocationValue] = useState("");
  const [vehicleValue, setVehicleValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState<City[]>([]); // Type the city state

  useEffect(() => {
    const fetchAvailableCity = async () => {
      try {
        const res = await axios.get(
          "https://ibom-transport.onrender.com/api/shuttle/get-all-shuttle"
        );
        setCity(res.data);
        console.log("Fetched cities:", res.data);
      } catch (err) {
        console.error("City fetching error:", err);
      }
    };

    fetchAvailableCity();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://ibom-transport.onrender.com/api/shuttle/get-all-shuttle",
        {
          params: {
            fromLocation: fromLocationValue,
            destination: toLocationValue,
            timeOfTravel: dateValue,
            vehicleType: vehicleValue,
          },
        }
      );
      setLoading(false);
      console.log("Booking response:", res.data);
    } catch (err) {
      setLoading(false);
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
                    <option value={item.fromLocation} key={index}>
                      {item.fromLocation}
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
                htmlFor="fromLocation"
                className="block text-sm font-medium text-gray-700"
              >
                Travelling To:
              </label>
              <select
                name="fromLocation"
                value={toLocationValue}
                onChange={(e) => setFromLocationValue(e.target.value)}
                id="fromLocation"
                className="mt-1 block w-full px-3 py-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              >
                <option value="" disabled className="text-slate-700">
                  Select City or Travel
                </option>
                {city.length > 0 ? (
                  city.map((item, index) => (
                    <option value={item.fromLocation} key={index}>
                      {item.fromLocation}
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
                    <option value={item.fromLocation} key={index}>
                      {item.fromLocation}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No cities available
                  </option>
                )}
              </select>
            </div>

            {/* Rest of your form fields */}

            <button
              className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
              onClick={fetchData}
            >
              {loading ? "Booking.." : "Book Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
