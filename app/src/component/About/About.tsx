import { SlStar } from "react-icons/sl";
import { BannerCard } from "./BannerCard";
const bgStyle = {
  backgroundImage: `url("/back.png")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "520px",
  width: "100%",
};
export const About = () => {
  return (
    <div style={bgStyle}>
      <div className=" banner text-white bg-black/80 min-h-[600px] flex py-14">
        <div className="container ">
          {/* header title section */}
          <div className="space-y-3 uppercase text-center p-2 sm:p-6 ">
            <p
              data-aos="fade-up"
              className="text-primary text-2xl font-semibold uppercase"
            >
              We do Best
            </p>
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl">
              Than you wish
            </h1>
          </div>
          {/* card section */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-5``"
          >
            <div data-aos="fade-up" className="space-y-8 ">
              <BannerCard
                title={"Fast Booking"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsum?"
                }
                icon={<SlStar />}
              />
              <BannerCard
                title={"Fast Booking"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsum?"
                }
                icon={<SlStar />}
              />
            </div>
            <div className="space-y-8">
              <BannerCard
                title={"Fast Booking"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsum?"
                }
                icon={<SlStar />}
              />
              <BannerCard
                title={"Fast Booking"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsum?"
                }
                icon={<SlStar />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
