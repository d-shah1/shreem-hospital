import { Link } from "react-router-dom";

/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/ortho/ankle-arthroscopy.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <div className="mt-0">
              <h5 className="text-2xl font-inter-bold text-black tracking-tight">
                What is Ankle Arthroscopy?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Ankle arthroscopy is a surgical procedure that uses a small
                camera, called an arthroscope, inserted into the ankle joint
                through a tiny incision. This allows the surgeon to examine and
                treat ankle issues with precision. Unlike traditional surgery,
                arthroscopy minimizes tissue damage, leading to quicker healing
                and smaller scars.
              </p>
              <p className="mt-3 text-lg font-source-regular text-greyText leading-relaxed">
                Common conditions treated with ankle arthroscopy include:
              </p>
              <ul className="ml-8 mt-3 list-decimal">
                <li className="text-lg font-source-regular text-greyText leading-relaxed">
                  Ligament injuries (e.g., ankle instability)
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Bone spurs
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Arthritis or joint inflammation
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Cartilage damage
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Ankle fractures
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  Removal of loose bone or cartilage fragments
                </li>
              </ul>
              <Link to="/book-appointment" className="block mt-5">
                <Button className="shadow-none hover:shadow-none bg-logoPrimary hover:bg-opacity-80 transition-all duration-300 ease-in-out rounded-md normal-case text-base px-5 py-3 text-white font-source-regular">
                  Book an appointment
                </Button>
              </Link>
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
