import Slider from "react-slick";
import Image1 from "../../../../public/back.png";
import Image from "next/image";

const bgStyle = {
  backgroundImage: 'url("/quote.png")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
};

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ex nostrum ab libero dolorem?",
    img: Image1,
  },
  {
    id: 2,
    name: "Moses",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ex nostrum ab libero dolorem?",
    img: Image1,
  },
  {
    id: 3,
    name: "Wisdom",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ex nostrum ab libero dolorem?",
    img: Image1,
  },
  {
    id: 4,
    name: "Peter",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ex nostrum ab libero dolorem?",
    img: Image1,
  },
  {
    id: 5,
    name: "Effiong",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ex nostrum ab libero dolorem?",
    img: Image1,
  },
  {
    id: 6,
    name: "Daniel",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ex nostrum ab libero dolorem?",
    img: Image1,
  },
  {
    id: 7,
    name: "Micheal",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ex nostrum ab libero dolorem?",
    img: Image1,
  },
  {
    id: 8,
    name: "Micheal",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ex nostrum ab libero dolorem?",
    img: Image1,
  },
  {
    id: 9,
    name: "Micheal",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ex nostrum ab libero dolorem?",
    img: Image1,
  },
];
export const Testimonial = () => {
  // slider config
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={bgStyle}>
      <div className="bg-white/80 dark:bg-gray-800/90 py-14 dark:text-white">
        <div className="container">
          {/* hearder section */}
          <div data-aos="fade-up" className="text-center mb-10">
            <h1 className="text-4xl font-bold">
              What our passengers are saying..
            </h1>
          </div>

          {/* testimonial card */}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col gap-6 shadow-lg py-8 px-6 mx-4 rounded-3xl bg-white dark:bg-black relative">
                      {/* content section */}
                      <div className="flex flex-col items-center gap-4">
                        <p className="text-xls">{text}</p>
                      </div>
                      {/* image section */}
                      <div className="flex items-center gap-6">
                        <Image
                          src={img}
                          alt={name}
                          className="rounded-full w-16 h-16"
                        />
                        <div className="space-y-2">
                          <h1 className="text-xl font-bold text-black/60 dark:text-primary  font-mono">
                            {name}
                          </h1>
                          <p className="text-sm font-bold text-black/45 dark:text-white">
                            BUSSINESS MAN
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
