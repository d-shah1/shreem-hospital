/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/eye-care/glaucoma.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <div className="mt-0">
              <h5 className="text-2xl font-playfair font-bold text-black tracking-tight">
                What is Glaucoma?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Glaucoma is a group of eye conditions that damage the optic
                nerve, which is vital for good vision. This damage is often
                caused by abnormally high pressure in the eye, also known as
                intraocular pressure. If left untreated, glaucoma can lead to
                permanent vision loss or even blindness. At Shreem Hospital, our
                dedicated team of ophthalmologists is equipped with advanced
                diagnostic tools and treatment options to manage glaucoma
                effectively and preserve your vision.
              </p>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                At Shreem Hospital, we understand that early detection is key to
                preventing the progression of glaucoma. Our comprehensive
                glaucoma management services include regular eye exams,
                state-of-the-art imaging, personalized treatment plans, and
                surgical interventions when necessary. With a patient-centric
                approach, we strive to provide the highest standard of care to
                protect and enhance your vision.
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
              alt="Glaucoma Management"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
