import React from "react";
import Card from "../Card";
import Img2 from "../../../../public/bus.png";

const ServiceData = [
  {
    id: 1,
    img: Img2,
    name: "Owerri",
    description: "243 ,owojulawo",
    numb: 9687754332,
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Abia State",
    description: "243 ,owojulawo",
    numb: 9687754333,
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Delta",
    description: "243 ,owojulawo",
    numb: 9687754334,
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img2,
    name: "Kano",
    description: "243 ,owojulawo",
    numb: 9687754335,
    aosDelay: "500",
  },
  {
    id: 5,
    img: Img2,
    name: "Port Harcourt",
    description: "243 ,owojulawo",
    numb: 9687754336,
    aosDelay: "500",
  },
  {
    id: 6,
    img: Img2,
    name: "Abuja",
    description: "243 ,owojulawo",
    numb: 9687754337,
    aosDelay: "500",
  },
  {
    id: 7,
    img: Img2,
    name: "Lagos",
    description: "243 ,owojulawo",
    numb: 9687754338,
    aosDelay: "500",
  },
  {
    id: 8,
    img: Img2,
    name: "Ibadan",
    description: "243 ,owojulawo",
    numb: 9687754339,
    aosDelay: "500",
  },
];

export const BestCad = () => {
  return (
    <div className="py-10 bg-white dark:bg-dark text-black dark:text-white">
      <div className="container">
        <div data-aos="fade-up" className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Choose Best Cab
          </h1>
        </div>
        {/* Best card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 place-items-center rounded-md">
          {ServiceData.map(({ id, img, name, numb, description }) => (
            <Card
              key={id}
              img1={img}
              title={name}
              description={description}
              buttonText="Contact"
              numb={numb}
              onButtonClick={() => alert(`You selected ${name}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
