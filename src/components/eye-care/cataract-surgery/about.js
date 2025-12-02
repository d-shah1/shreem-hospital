/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/eye-care/cataract-surgery.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <div className="mt-0">
              <h5 className="text-2xl font-playfair font-bold text-black tracking-tight">
                What is Cataract Surgery?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Cataract surgery is a safe and effective procedure to remove a
                cloudy lens from the eye and replace it with a clear artificial
                lens, restoring vision. Cataracts develop gradually, causing
                vision to become blurry, dull, or less vibrant. While cataracts
                are commonly associated with aging, they can also result from
                trauma, certain medications, or underlying medical conditions.
                At Shreem Hospital, we offer advanced cataract surgery using
                state-of-the-art technology and minimally invasive techniques to
                ensure the best outcomes for our patients.
              </p>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Cataract surgery is generally a quick, outpatient procedure with
                a high success rate. The recovery time is minimal, and most
                patients experience significant improvements in their vision
                shortly after the surgery. At Shreem Hospital, we prioritize
                your comfort and safety throughout the process, providing
                personalized care from pre-surgery consultation to post-surgery
                follow-up to ensure the best possible outcomes for your vision.
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
              alt="Cataract Surgery"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
