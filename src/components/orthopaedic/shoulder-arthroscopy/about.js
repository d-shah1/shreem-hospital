/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/ortho/shoulder-arthroscopy.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <div className="mt-0">
              <h5 className="text-2xl font-inter-bold text-black tracking-tight">
                What is Shoulder Arthroscopy?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Shoulder arthroscopy is a surgical procedure in which a small
                camera, called an arthroscope, is inserted into the shoulder
                joint through a tiny incision. This allows the surgeon to view
                the joint on a screen and perform precise treatments using
                specialized instruments. Unlike traditional surgery, arthroscopy
                minimizes tissue damage, leading to less pain and faster
                healing.
              </p>
              <p className="mt-3 text-lg font-source-regular text-greyText leading-relaxed">
                It is commonly used to treat conditions like:
              </p>
              <ul className="ml-8 mt-3 list-decimal">
                <li className="text-lg font-source-regular text-greyText leading-relaxed">
                  Rotator cuff tears
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Shoulder impingement
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Frozen shoulder (adhesive capsulitis)
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Labral tears or shoulder instability
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Arthritis or joint inflammation
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Shoulder injuries from sports or trauma
                </li>
              </ul>
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
