/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/eye-care/comprehensive-eye-care.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <div className="mt-0">
              <h5 className="text-2xl font-inter-bold text-black tracking-tight">
                What is Comprehensive Eye Care?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Comprehensive eye care involves the complete evaluation,
                diagnosis, and treatment of all eye conditions, as well as the
                promotion of overall eye health. At Shreem Hospital, our
                comprehensive eye care services are designed to meet the diverse
                needs of patients across all age groups. From routine eye exams
                and corrective lenses to advanced treatments for complex eye
                diseases, we offer personalized care tailored to preserve and
                enhance your vision.
              </p>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Our experienced ophthalmologist utilizes state-of-the-art
                diagnostic tools and treatment technologies to provide the
                highest standard of care. Whether you need glasses, management
                of chronic conditions like glaucoma, or surgical interventions
                such as cataract removal, Shreem Hospital is your one-stop
                destination for all your eye health needs. We are committed to
                helping you achieve clear vision and maintain long-term eye
                health through preventative care and early intervention.
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
              alt="Comprehensive Eye Care"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
