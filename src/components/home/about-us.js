/* PACKAGE IMPORTS */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* IMAGES */
import AboutImage01 from "assets/images/about-section-full.jpeg";

const AboutUs = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-10 lg:gap-10 items-center">
          <div className="col-span-1">
            {/* BADGE */}
            <div className="w-fit bg-orange-400 border-2 border-white shadow-md rounded-full px-4 py-2">
              <p className="text-base font-source-medium text-white">
                MEET OUR DEDICATED DOCTORS
              </p>
            </div>

            <div className="mt-5">
              <h2 className="text-3xl xl:text-3xl lg:text-3xl font-inter-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                Compassioning experts transforming health
              </h2>
            </div>

            <div className="py-5 border-b border-greyBorder">
              <p className="text-lg font-source-semibold text-black">
                Dr. Anshul Dave{" "}
              </p>
              <p className="text-sm text-greyText font-source-regular">
                Chief and Head, Orthopaedics, Sports injury and Joint
                Replacement
              </p>
              <p className="mt-3 text-base font-source-regular text-greyText leading-relaxed">
                Dr. Anshul Dave is a highly skilled orthopedic surgeon with
                extensive experience at leading institutions like Medanta,
                India, and Ewha University, South Korea. Trained by renowned
                experts, he specializes in knee and shoulder procedures. A
                postgraduate from M.S. University, he boasts acclaimed research
                publications and exceptional global expertise.
              </p>
            </div>

            <div className="pt-5">
              <p className="text-lg font-source-semibold text-black">
                Dr. Pankti Shah Dave{" "}
              </p>
              <p className="text-sm text-greyText font-source-regular">
                Master of Surgery, Opthamology
              </p>
              <p className="mt-3 text-base font-source-regular text-greyText leading-relaxed">
                Dr Pankti Shah Dave is an experienced ophthalmologist based in
                Vadodara with over 5 years of expertise in cataract surgery,
                LASIK, and managing neuro-ophthalmic disorders. She has also
                collaboratedwith multi-specialty hospitals, conducting health
                check-ups for various organizations and ensuring comprehensive
                eye care for diverse patient needs.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <img
              src={AboutImage01}
              className="w-full h-[25vh] xl:h-testimonial lg:h-testimonial object-cover rounded-xl shadow-md border-2 border-logoSecondary"
              alt="About the doctors"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
