import React from "react";
import Image from "next/image";

interface CardProps {
  img1: any;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  numb: number;
}

const Card: React.FC<CardProps> = ({
  img1,
  title,
  description,
  buttonText,
  onButtonClick,
  numb,
}) => {
  return (
    <div className="relative max-w-sm bg-white rounded overflow-hidden min-h-[200px] shadow-lg">
      {/* Image with overlay */}
      <div className="relative">
        <Image className="w-full" src={img1} alt={title} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <span className="text-white text-lg font-bold">{title}</span>
        </div>
      </div>

      {/* Content below the image */}
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base text-start">
          <span className="text-xl"> Address:</span> {description}
        </p>
        <p className="text-gray-700 text-base py-2">
          <span className="text-xl">Contact:</span> {numb}
        </p>
      </div>

      {/* <div className="px-6 pt-4 pb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div> */}
    </div>
  );
};

export default Card;
