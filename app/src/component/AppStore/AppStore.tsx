import Image from "next/image";
import pic from "../../../../public/bus.png";
export const AppStore = () => {
  return (
    <div className="appstore bg-[#f5f5f5] dark:bg-black dark:text-white ">
      <div className="container py-8">
        {/* header title section */}
        <div className="space-y-5 uppercase text-center py-14">
          <p className="text-primary text-2xl font-semibold" data-aos="fade-up">
            Download
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-3xl font-bold"
          >
            Best Cab Services
          </h1>
        </div>
        {/* card section */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center"
        >
          <div className="space-y-8 max-w-[400px] mx-auto">
            <h1 className="text-2xl font-bold">
              Download the cab voncher app free! Get Exciting New offers
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus distinctio consequatur
            </p>
            {/* app store logo */}
            <div className="flex flex-wrap justify-center sm:justify-start items-center">
              {/* <a href="#">
                <Image
                  src=""
                  alt="logo"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a> */}
            </div>
          </div>
          {/* image section */}
          <div>
            <Image src={pic} alt="" className="max-w-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
