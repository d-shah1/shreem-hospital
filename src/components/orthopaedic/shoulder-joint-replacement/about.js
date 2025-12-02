/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/ortho/shoulder-joint-replacement.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <p className="text-lg font-source-regular text-greyText leading-relaxed">
              Shoulder pain can significantly limit your daily activities, from
              lifting objects to simply reaching for something on a shelf. At
              Shreem Hospital, we understand the challenges that come with
              persistent shoulder discomfort. Shoulder joint replacement surgery
              offers a safe and effective way to restore movement, alleviate
              pain, and improve your quality of life.
            </p>

            <div className="mt-5">
              <h5 className="text-2xl font-playfair font-bold text-black tracking-tight">
                What is Shoulder Joint Replacement Surgery?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Shoulder joint replacement surgery involves replacing the
                damaged parts of the shoulder joint with artificial components,
                known as prostheses. The surgery is designed to replicate the
                natural movement of the shoulder, helping patients regain
                mobility and live pain-free lives. This procedure is
                particularly effective for conditions like advanced arthritis,
                severe fractures, or joint degeneration.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.link/8p18eb"
                className="block mt-4"
              >
                <Button className="shadow-none hover:shadow-none bg-logoPrimary hover:bg-opacity-80 transition-all duration-300 ease-in-out rounded-md normal-case text-base px-5 py-3 text-white font-source-regular">
                  Book an appointment
                </Button>
              </a>
            </div>
          </div>

          {/* ABOUT IMAGE */}
          <div className="col-span-1">
            <img
              src={AboutImage}
              className="w-full h-11/12 rounded-xl shadow-lg object-cover"
              alt="Knee and Joint Replacement"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
