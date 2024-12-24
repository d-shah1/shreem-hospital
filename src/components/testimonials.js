/* PACKAGE IMPORTS */
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

/* MATERIAL TAILWIND COMPONENTS */
import { Card, CardBody } from "@material-tailwind/react";

/* CONFIG */
import { animation } from "config/animation";

/* ICONS */
import { FaStar } from "react-icons/fa6";

/* DATA */
import testimonials from "data/testimonials";

/* IMAGES */
import AnshulDave from "assets/images/banners/testimonial-anshul-dave.webp";
import PanktiShah from "assets/images/banners/testimonial-pankti-shah.webp";

const Testimonials = () => {
  return (
    <motion.div
      variants={animation}
      className="py-6 xl:py-12 lg:py-12 bg-greyBackground bg-opacity-60 shadow-inner"
    >
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-8 xl:gap-16 lg:gap-16 items-center">
          {/* LEFT SIDE IMAGE */}
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-1">
                <img
                  src={AnshulDave}
                  className="w-full h-[25vh] xl:h-testimonial lg:h-testimonial object-cover rounded-xl shadow-md"
                  alt="Testimonial of Anshul Dave"
                />
              </div>
              <div className="col-span-1">
                <img
                  src={PanktiShah}
                  className="w-full h-[25vh] xl:h-testimonial lg:h-testimonial object-cover rounded-xl shadow-md"
                  alt="Testimonial of Pankti Shah Dave"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE TESTIMONIALS */}
          <div className="col-span-1">
            {/* BADGE */}
            <div className="w-fit bg-orange-400 border-2 border-white shadow-md rounded-full px-4 py-2">
              <p className="text-base font-source-medium text-white">
                CUSTOMER TESTIMONIALS
              </p>
            </div>

            <div className="mt-5">
              <h2 className="text-3xl xl:text-3xl lg:text-3xl font-inter-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                Your satisfaction drives our dedication!
              </h2>
              <p className="mt-3 text-lg font-source-regular text-greyText">
                Read heartfelt testimonials from our patients and their
                families, sharing their experiences of exceptional care and
                compassionate service.
              </p>
            </div>

            <div className="mt-3 block xl:flex lg:flex items-center gap-3">
              {/* STARS */}
              <div className="flex items-center gap-0.5">
                <FaStar className="w-5 h-5 text-starColor" />
                <FaStar className="w-5 h-5 text-starColor" />
                <FaStar className="w-5 h-5 text-starColor" />
                <FaStar className="w-5 h-5 text-starColor" />
                <FaStar className="w-5 h-5 text-starColor" />
              </div>

              {/* OVERALL RATINGS */}
              <p className="mt-3 xl:mt-0 lg:mt-0 text-md font-source-regular text-greyText">
                Overall rating{" "}
                <span className="text-lg font-source-semibold text-black">
                  4.9/5
                </span>{" "}
                reviews on Google
              </p>
            </div>

            {/* SWIPER CARDS */}
            <div className="mt-5">
              <Card className="bg-white border border-b-4 border-greyBorder rounded-xl shadow-none">
                <CardBody className="p-8">
                  <Swiper
                    effect="fade"
                    modules={[Navigation, Autoplay, EffectFade]}
                    navigation
                    slidesPerView={1}
                    autoplay={{ delay: 6000 }}
                    fadeEffect={{ crossFade: true }}
                  >
                    {testimonials.map((data) => (
                      <SwiperSlide key={data.id}>
                        <div className="p-0">
                          <p className="text-md font-source-regular text-greyText">
                            {data.desc}
                          </p>
                          <div className="mt-5">
                            <p className="text-md font-source-semibold text-black">
                              {data.name}
                            </p>
                            <p className="text-sm font-source-regular text-greyText">
                              Google reviewer
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
