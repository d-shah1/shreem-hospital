/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/eye-care/optic-nerve.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <div className="mt-0">
              <h5 className="text-2xl font-inter-bold text-black tracking-tight">
                What are Optic Nerve Related Disorders?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                The optic nerve is a critical part of the visual system,
                transmitting visual information from the eye to the brain.
                Disorders affecting the optic nerve can lead to partial or
                complete vision loss, depending on the severity and underlying
                cause. Common optic nerve disorders include optic neuritis,
                glaucoma, optic neuropathy, and papilledema. At Shreem Hospital,
                we specialize in diagnosing and managing these complex
                conditions to preserve and improve your vision.
              </p>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Our team of expert ophthalmologists employs advanced diagnostic
                tools, such as optical coherence tomography (OCT) and visual
                field testing, to assess optic nerve health. With personalized
                treatment plans, including medication, lifestyle modifications,
                or surgical interventions, Shreem Hospital is dedicated to
                providing comprehensive care for patients with optic nerve
                disorders.
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
              alt="Retinal Disease Management"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
