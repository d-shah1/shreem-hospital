import { Link } from "react-router-dom";

/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/eye-care/retinal-disease.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <div className="mt-0">
              <h5 className="text-2xl font-inter-bold text-black tracking-tight">
                What are Retinal Diseases?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Retinal diseases refer to a group of conditions that affect the
                retina, the light-sensitive layer at the back of the eye
                responsible for capturing images and sending them to the brain.
                These conditions can lead to vision impairment or even blindness
                if left untreated. Common retinal diseases include diabetic
                retinopathy, age-related macular degeneration, retinal
                detachment, and retinal vein occlusion. At Shreem Hospital, we
                specialize in the diagnosis, treatment, and management of these
                complex conditions, ensuring the best possible outcomes for our
                patients.
              </p>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                At Shreem Hospital, we employ advanced diagnostic technologies
                and innovative treatment methods to address retinal diseases
                effectively. Our team of retinal specialists provides
                personalized care, tailoring treatment plans to each patient’s
                unique needs. Whether it’s laser therapy, injectable
                medications, or surgical interventions, we are committed to
                preserving and restoring your vision with the highest standard
                of care.
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
              alt="Retinal Disease Management"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
