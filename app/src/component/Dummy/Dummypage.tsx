"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";

const Dummypage: React.FC = () => {
  const searchParams = useSearchParams();

  const fromLocation = searchParams.get("fromLocation") || "";
  const toLocation = searchParams.get("toLocation") || "";
  const vehicleType = searchParams.get("vehicleType") || "";
  const dateValue = searchParams.get("dateValue") || "";
  const bookingID = searchParams.get("bookingId") || "";

  const handleDownload = () => {
    const receiptElement = document.getElementById("receipt");
    const downloadButton = document.getElementById("download-button");
    const contactButton = document.getElementById("contact-button");

    if (receiptElement) {
      if (downloadButton) downloadButton.style.display = "none";
      if (contactButton) contactButton.style.display = "none";

      html2canvas(receiptElement).then((canvas) => {
        if (downloadButton) downloadButton.style.display = "block";
        if (contactButton) contactButton.style.display = "block";

        const link = document.createElement("a");
        link.download = "receipt.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <div className="w-full mx-auto flex justify-center items-center p-4">
      <div className="bg-white w-[50%] p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-white bg-black p-2 rounded">
          Booking Confirmation Receipts
        </h2>
        <div id="receipt">
          <p className="flex justify-between">
            <strong>Booking ID:</strong> {bookingID}
          </p>
          <p className="flex justify-between">
            <strong>Travelling From:</strong> {fromLocation}
          </p>
          <p className="flex justify-between">
            <strong>Travelling To:</strong> {toLocation}
          </p>
          <p className="flex justify-between">
            <strong>Vehicle Type:</strong> {vehicleType}
          </p>
          <p className="flex justify-between">
            <strong>Travelling Date:</strong> {dateValue}
          </p>
        </div>
        <button
          id="download-button"
          onClick={handleDownload}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
        >
          Download Receipt
        </button>
        {/* <a
          id="contact-button"
          href="mailto:info@example.com"
          className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 block text-center hover:bg-green-700 transition duration-300"
        >
          Contact Us
        </a> */}
      </div>
    </div>
  );
};

export default Dummypage;
