/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/eye-care/lasik-treatment.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <div className="mt-0">
              <h5 className="text-2xl font-playfair font-bold text-black tracking-tight">
                What are Lasik, Lasek, PRK, and Femto Lasik?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                These are advanced laser vision correction procedures designed
                to correct refractive errors such as myopia (nearsightedness),
                hyperopia (farsightedness), and astigmatism. These procedures
                reshape the cornea, improving how light is focused on the retina
                for clearer vision. At Shreem Hospital, we provide personalized
                solutions with these cutting-edge treatments to reduce
                dependence on glasses or contact lenses, offering freedom and
                convenience for patients seeking improved vision.
              </p>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Each procedure uses advanced laser technology to ensure
                precision and safety, catering to the unique needs of patients.
                Our skilled ophthalmologists assess individual eye conditions
                and recommend the most suitable treatment option. With a
                patient-first approach and state-of-the-art facilities, Shreem
                Hospital is committed to delivering optimal results for a
                life-changing improvement in vision.
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
              alt="Lasik Treatment"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
