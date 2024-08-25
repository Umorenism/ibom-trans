"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BookingID = () => {
  const [bookingID, setBookingID] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    try {
      // Replace this URL with your external API endpoint
      const response = await fetch("https://your-api-endpoint.com/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookingID }),
      });

      // Check if the response is successful
      if (response.ok) {
        // Route to the "/dummy" page if the API request is successful
        router.push("/dummy");
      } else {
        // Handle error response
        console.error("Error:", await response.text());
      }
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="w-full mx-auto md:w-[50%] p-4 sm:p-8">
      <div data-aos="fade-up" className="w-full">
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-white bg-black p-2 rounded">
            Booking ID
          </h2>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                id="travelDate"
                placeholder="Enter your booking ID"
                className="mt-1 block w-full mb-4 px-3 py-2 bg-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                required
                value={bookingID}
                onChange={(e) => setBookingID(e.target.value)}
              />
            </div>

            <Link href="/dummy">
              <button
                onClick={handleSearch}
                className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Search Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingID;
