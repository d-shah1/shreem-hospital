import { Link } from "react-router-dom";

/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/ortho/hip-joint-replacement.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <p className="text-lg font-source-regular text-greyText leading-relaxed">
              At Shreem Hospital, we recognize how challenging it can be to live
              with constant hip or joint pain. Whether caused by arthritis,
              injury, or age-related wear and tear, such discomfort can severely
              impact your quality of life. Hip and joint replacement surgery is
              a proven solution to restore mobility and help you lead a
              pain-free life.
            </p>

            <div className="mt-5">
              <h5 className="text-2xl font-inter-bold text-black tracking-tight">
                What is Hip Replacement Surgery?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Hip replacement surgery involves replacing a damaged or diseased
                hip joint with an artificial implant, also called a prosthesis.
                These implants are carefully designed to replicate the natural
                movement of your hip, providing lasting relief from pain and
                improving overall function.
              </p>
              <p className="mt-3 text-lg font-source-regular text-greyText leading-relaxed">
                This surgery is highly effective for conditions like advanced
                arthritis (osteoarthritis, rheumatoid arthritis), hip fractures,
                or joint deformities that do not respond to other treatments.
              </p>
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
