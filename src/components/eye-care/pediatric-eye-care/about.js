import { Link } from "react-router-dom";

/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/eye-care/pediatric-eye-care.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <div className="mt-0">
              <h5 className="text-2xl font-inter-bold text-black tracking-tight">
                What is Pediatric Eye Care?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Pediatric eye care focuses on the diagnosis, treatment, and
                prevention of eye conditions in children, from infancy to
                adolescence. Children's eyes are constantly developing, making
                early detection and treatment of any issues crucial to ensuring
                proper vision and overall eye health. At Shreem Hospital, our
                specialized pediatric ophthalmologists understand the unique
                needs of young patients and provide gentle, comprehensive care
                tailored to their age and developmental stage.
              </p>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Our pediatric eye care services include vision screening,
                treatment for refractive errors (like nearsightedness or
                farsightedness), management of eye conditions such as strabismus
                (crossed eyes) and amblyopia (lazy eye), and care for congenital
                or hereditary eye disorders. We aim to create a child-friendly
                environment that makes young patients feel comfortable and
                supported while providing the best possible care for their eyes.
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
              alt="Glaucoma Management"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
