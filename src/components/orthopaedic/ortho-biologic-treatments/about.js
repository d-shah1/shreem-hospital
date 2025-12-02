/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ASSETS */
import AboutImage from "assets/images/ortho/shoulder-joint-replacement.jpg";

const About = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="col-span-1">
            <div className="mt-0">
              <h5 className="text-2xl font-playfair font-bold text-black tracking-tight">
                What Are Ortho Biologic Treatments?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Ortho biologics are advanced medical therapies that use natural
                substances like blood components, cells, or tissues to aid in
                the healing process. These treatments are particularly effective
                in managing orthopedic conditions, such as arthritis, ligament
                injuries, and joint degeneration, without the need for surgery.
              </p>
              <ul className="ml-8 mt-5 list-decimal">
                <li className="text-lg font-source-regular text-greyText leading-relaxed">
                  <span className="text-black font-source-semibold">
                    Platelet-Rich Plasma (PRP) Therapy:
                  </span>{" "}
                  Concentrated platelets from your blood are injected into the
                  affected area to accelerate healing.
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  <span className="text-black font-source-semibold">
                    Stem Cell Therapy:
                  </span>{" "}
                  Stem cells, known for their regenerative properties, are used
                  to repair damaged tissues.
                </li>
                <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                  <span className="text-black font-source-semibold">
                    Hyaluronic Acid Injections:
                  </span>{" "}
                  These injections improve joint lubrication, reducing pain and
                  stiffness.
                </li>
              </ul>
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
              className="w-full h-full rounded-xl shadow-lg object-cover"
              alt="Knee and Joint Replacement"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
