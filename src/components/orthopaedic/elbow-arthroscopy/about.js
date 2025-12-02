/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/ortho/elbow-arthroscopy.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <div className="mt-0">
              <h5 className="text-2xl font-playfair font-bold text-black tracking-tight">
                What is Elbow Arthroscopy?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Elbow arthroscopy is a surgical procedure in which a small
                camera, called an arthroscope, is inserted into the elbow joint
                through tiny incisions. This allows the surgeon to view the
                joint on a screen and address specific problems using
                specialized instruments. Arthroscopy minimizes tissue damage
                compared to traditional surgery, leading to faster recovery and
                smaller scars.
              </p>
              <p className="mt-3 text-lg font-source-regular text-greyText leading-relaxed">
                Common conditions treated with elbow arthroscopy include:
              </p>
              <ul className="ml-8 mt-3 list-decimal">
                <li className="text-lg font-source-regular text-greyText leading-relaxed">
                  Tennis elbow (lateral epicondylitis)
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Elbow arthritis
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Removal of loose bone or cartilage fragments
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Stiff elbow (adhesive capsulitis)
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Ligament injuries
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Joint infections
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
