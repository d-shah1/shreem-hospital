/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/ortho/knee-joint-replacement.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <p className="text-lg font-source-regular text-greyText leading-relaxed">
              At Shreem Hospital, we understand how debilitating joint pain can
              be. Whether it’s your knees, hips, or other joints, severe
              discomfort can limit your ability to enjoy life fully. This is
              where knee and joint replacement surgery can be a life-changing
              solution.
            </p>

            <div className="mt-5">
              <h5 className="text-2xl font-inter-bold text-black tracking-tight">
                What is Joint Replacement Surgery?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Joint replacement surgery involves replacing damaged or diseased
                parts of a joint with artificial implants, also known as
                prostheses. These implants are designed to mimic the natural
                movement of your joints, providing relief from pain and
                improving mobility.
              </p>
              <p className="mt-3 text-lg font-source-regular text-greyText leading-relaxed">
                The most common type is knee replacement surgery, which is
                recommended for those suffering from advanced arthritis or
                significant joint damage. Similarly, other joints such as hips,
                shoulders, and elbows can also be replaced to restore
                functionality.
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
