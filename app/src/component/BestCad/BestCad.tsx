// import Card from "../Card";
// import Img2 from "../../../../public/bus.png";
// import Image from "next/image";

// const ServiceData = [
//   {
//     id: 1,
//     img: Img2,
//     name: "Economy class",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima vero asperiores reprehenderit esse at minus quo quas omnis nemo.",
//     aosDelay: "100",
//   },
//   {
//     id: 2,
//     img: Img2,
//     name: "Standard class",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima vero asperiores reprehenderit esse at minus quo quas omnis nemo.",
//     aosDelay: "300",
//   },
//   {
//     id: 2,
//     img: Img2,
//     name: "Bussiness class",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima vero asperiores reprehenderit esse at minus quo quas omnis nemo.",
//     aosDelay: "500",
//   },
// ];
// export const BestCad = () => {
//   return (
//     <div className="py-10 bg-white dark:bg-dark text-black dark:text-white">
//       <div className="container">
//         <div data-aos="fade-up" className="text-center mb-20">
//           <h1 className="text-4xl font-bold text-gray-800 dark:text-white ">
//             Choose Best Cab
//           </h1>
//         </div>
//         {/* best card section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 place-items-center  rounded-md">
//           <Card />
//           {/* {ServiceData.map(({ id, img, name, description }) => {
//             return (
//               <div
//                 key={id}
//                 data-aos="fade-up"
//                 // data-aos-delay={aosDelay}
//                 className="group rounded-2xl bg-white dark:text-white dark:bg-black hover:!bg-primary shadow-2xl duration-200 max-w-[300px] relative"
//               >
//                 {/* image section */}
//           {/* <div className="h-[110px]">
//                   <Image
//                     src={img}
//                     alt="image"
//                     className="max-w-[150px]  block mx-auto transform -translate-y-20 group-hover:scale-110 group-hover:translate-x-4 duration-300"
//                   />
//                 </div> */}
//           {/* text conten section */}
//           {/* <div className="p-4 text-center space-y-4">
//                   <h1 className="text-xl font-bold">{name}</h1>
//                   <p className="group-hover:text-black text-gray-500 duration-300 text-sm line-clamp-2">
//                     {description}
//                   </p> */}
//           {/* <p className="text-primary text-2xl font-bold group-hover:text-black">
//                     10/km
//                   </p>
//                   <button className="py-2 bg-black text-white rounded-lg px-4">
//                     Contact
//                   </button>
//                 </div>
//               </div> */}
//           {/* );
//           })}  */}
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import Card from "../Card";
import Img2 from "../../../../public/bus.png";

const ServiceData = [
  {
    id: 1,
    img: Img2,
    name: "Owerri",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima vero asperiores reprehenderit esse at minus quo quas omnis nemo.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Abia State",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima vero asperiores reprehenderit esse at minus quo quas omnis nemo.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Delta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima vero asperiores reprehenderit esse at minus quo quas omnis nemo.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img2,
    name: "Kano",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima vero asperiores reprehenderit esse at minus quo quas omnis nemo.",
    aosDelay: "500",
  },
  {
    id: 5,
    img: Img2,
    name: "Port Harcourt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima vero asperiores reprehenderit esse at minus quo quas omnis nemo.",
    aosDelay: "500",
  },
  {
    id: 6,
    img: Img2,
    name: "Abuja",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima vero asperiores reprehenderit esse at minus quo quas omnis nemo.",
    aosDelay: "500",
  },
  {
    id: 7,
    img: Img2,
    name: "Lagos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima vero asperiores reprehenderit esse at minus quo quas omnis nemo.",
    aosDelay: "500",
  },
  {
    id: 8,
    img: Img2,
    name: "Ibadan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae minima vero asperiores reprehenderit esse at minus quo quas omnis nemo.",
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
          {ServiceData.map(({ id, img, name, description }) => (
            <Card
              key={id}
              img1={img}
              title={name}
              description={description}
              buttonText="Contact"
              // onButtonClick={() => alert(`You selected ${name}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
