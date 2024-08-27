"use client";

import React from "react";
import Image from "next/image";

interface CardProps {
  img1: any;
  title: string;
  description: string;
  buttonText: string;
  //   onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({
  img1,
  title,
  description,
  buttonText,
  //   onButtonClick,
}) => {
  return (
    <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg relative">
      <div className="relative">
        <Image className="w-full" src={img1} alt={title} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold">{title}</h2>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onButtonClick}
        >
          {buttonText}
        </button> */}
      </div>
    </div>
  );
};

export default Card;
