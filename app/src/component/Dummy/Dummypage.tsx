"use client"; // Mark this file as a Client Component

import React from "react";
import html2canvas from "html2canvas";
import { useRouter, useSearchParams } from "next/navigation";

const Dummypage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bookingID = searchParams.get("bookingID");

  const handleDownload = () => {
    const receiptElement = document.getElementById("receipt");
    const downloadButton = document.getElementById("download-button");
    const contactButton = document.getElementById("contact-button");

    if (receiptElement) {
      // Hide buttons
      if (downloadButton) downloadButton.style.display = "none";
      if (contactButton) contactButton.style.display = "none";

      html2canvas(receiptElement).then((canvas) => {
        // Show buttons back
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
    <div className="py-10 w-full">
      <div className="container shadow-lg max-w-xl">
        <div
          data-aos="fade-up"
          className="text-center p-4 rounded-md mb-20 w-full bg-white"
          id="receipt"
        >
          <div className="mb-4 flex justify-between items-center">
            <h1></h1>
            <button
              id="download-button"
              onClick={handleDownload}
              className="bg-gray-200 px-4 shadow-2xl border py-2"
            >
              Download Receipt
            </button>
          </div>
          <h1 className="text-2xl font-serif mb-4">Receipt</h1>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-mono">From Destination:</h1>
              <p className="text-xl font-mono">Uyo</p>
            </div>
            <div className="flex justify-between py-4 items-center">
              <h1 className="text-xl font-mono">To:</h1>
              <p className="text-xl font-mono">Lagos</p>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-mono">Travel Time:</h1>
              <p className="text-xl font-mono">Uyo</p>
            </div>
            <div className="flex justify-between py-4 items-center">
              <h1 className="text-xl font-mono">Booking ID:</h1>
              <p className="text-xl font-mono">uyo4235141321331523</p>
            </div>
            <div className="flex justify-between py-4 items-center">
              <h1 className="text-xl font-mono"></h1>
              <button
                id="contact-button"
                className="text-xl px-4 py-2 bg-slate-600 rounded-md text-white font-mono"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dummypage;
