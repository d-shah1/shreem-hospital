import React, { useState } from "react";

/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation, containerAnimation } from "config/animation";

/* COMPONENTS */
import Banner from "components/pixee-medical-system/banner";

/* MATERIAL TAILWIND COMPONENTS */
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

const faqs = [
  {
    q: "What is Pixee Medical Knee+ Augmented Reality Knee Replacement?",
    a: "It is an advanced knee replacement method where surgeons use AR glasses to visualize digital alignment guides directly on the surgical field, improving precision and implant positioning.",
  },
  {
    q: "Is AR knee replacement better than traditional knee replacement?",
    a: "Yes. AR-assisted surgery enhances accuracy, ensures better alignment, reduces invasiveness, and may improve long-term outcomes and implant longevity.",
  },
  {
    q: "How is AR knee replacement different from robotic knee replacement?",
    a: "Robotic systems require large consoles and CT scans. Pixee Knee+ achieves comparable precision with a lightweight AR headset and standard tools, offering lower cost and faster integration.",
  },
  {
    q: "Do I need a CT or MRI before this surgery?",
    a: "No. Pixee Knee+ requires only standard X-rays, making it more affordable, quicker to schedule, and safer due to lower radiation exposure.",
  },
  {
    q: "Is Pixee Knee+ suitable for everyone?",
    a: "Most patients undergoing primary total knee replacement are ideal candidates. The surgeon will evaluate anatomy and medical factors before confirming suitability.",
  },
];

const PixeeMedicalSystem = () => {
  /* OPEN */
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <motion.section
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      className="p-0"
    >
      <Banner />

      {/* ABOUT THE SYSTEM */}
      <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-10 xl:gap-20 lg:gap-20 items-center">
            <div className="col-span-1">
              <h5 className="text-3xl font-playfair font-bold text-black">
                What is the Pixee Medical Knee+ System?
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                The Pixee Medical Knee+ is a state-of-the-art augmented-reality
                (AR) navigation system designed specifically for total knee
                arthroplasty (TKA). It combines a lightweight, wearable AR
                headset with standard reusable surgical instruments —
                transforming the knee replacement procedure into a precise,
                visualized, surgeon-guided operation.
              </p>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                Unlike bulky robotic systems or computer-assisted navigation
                setups, Knee+ requires no pre-operative CT or MRI scans.
                Instead, it relies on standard X-rays (and long-leg films when
                needed) and maps anatomical landmarks in real time.
              </p>
              <p className="mt-3 text-lg font-source-regular text-greyText leading-relaxed">
                Sensors and instrument markers enable the system to track
                surgical tools in space and provide real-time feedback on
                angular values and bone cuts, ensuring implant placement and leg
                alignment are accurate to within millimeter- and degree-level
                precision.
              </p>
            </div>
            <div className="col-span-1">
              <div className="block xl:flex lg:flex items-center gap-5">
                <img
                  src={require("../../assets/images/pixee-image.jpg")}
                  className="w-full h-[50vh] rounded-xl shadow-md object-cover"
                  alt="Pixee Medical System"
                />
                <video
                  preload="none"
                  autoPlay
                  loop
                  muted
                  className="mt-5 xl:mt-0 lg:mt-0 w-full h-[50vh] rounded-xl shadow-md object-cover"
                >
                  <source
                    src={require("../../assets/images/pixee-video.mp4")}
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* STEPS */}
      <motion.div
        variants={animation}
        className="py-6 xl:py-12 lg:py-12 bg-logoPrimary/5"
      >
        <div className="container">
          {/* HEADING */}
          <div className="p-0">
            <h5 className="text-3xl font-playfair font-bold text-black">
              How Pixee Knee+ Works — Step by Step
            </h5>
          </div>

          {/* STEPS */}
          <div className="mt-5 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="col-span-1">
              <div className="bg-white overflow-hidden border border-greyBorder rounded-xl shadow-md p-10 relative">
                <h5 className="text-2xl font-source-bold text-black">
                  Preoperative Planning
                </h5>
                <p className="text-md mt-2 font-source-regular text-greyText leading-relaxed">
                  The surgical team reviews standard radiographs (and a long-leg
                  film if needed) to determine the patient’s native mechanical
                  axes, limb alignment, and joint-line orientation. This
                  information is used to plan bone cuts and implant positioning.
                  No special scans are required.
                </p>

                <div className="absolute -top-12 -right-4">
                  <p className="text-[11vh] font-source-bold text-black/10">
                    01
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-white overflow-hidden border border-greyBorder rounded-xl shadow-md p-10 relative">
                <h5 className="text-2xl font-source-bold text-black">
                  AR-Guided Navigation During Surgery
                </h5>
                <p className="text-md mt-2 font-source-regular text-greyText leading-relaxed">
                  During the operation, the surgeon wears AR glasses. The system
                  overlays digital guides — including reference lines, target
                  cut planes, and alignment axes — directly onto the real
                  surgical site. Instrumented tools fitted with optical markers
                  enable the system to show exact orientation and depths.
                </p>

                <div className="absolute -top-12 -right-4">
                  <p className="text-[11vh] font-source-bold text-black/10">
                    02
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-white overflow-hidden border border-greyBorder rounded-xl shadow-md p-10 relative">
                <h5 className="text-2xl font-source-bold text-black">
                  Real-time Validation & Adjustment
                </h5>
                <p className="text-md mt-2 font-source-regular text-greyText leading-relaxed">
                  As the surgeon proceeds, the system displays live feedback of
                  angles and resection levels, allowing on-the-fly correction to
                  ensure optimal alignment. This helps achieve accurate implant
                  positioning — aligned with the mechanical axis of the limb.
                </p>

                <div className="absolute -top-12 -right-4">
                  <p className="text-[11vh] font-source-bold text-black/10">
                    03
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-white overflow-hidden border border-greyBorder rounded-xl shadow-md p-10 relative">
                <h5 className="text-2xl font-source-bold text-black">
                  Implant Placement & Final Verification
                </h5>
                <p className="text-md mt-2 font-source-regular text-greyText leading-relaxed">
                  The prosthetic components are placed based on the AR-guided
                  plan. The system confirms component orientation and alignment
                  before closure — helping ensure the prosthesis sits in the
                  correct anatomical position with optimal joint-line
                  orientation.
                </p>

                <div className="absolute -top-12 -right-4">
                  <p className="text-[11vh] font-source-bold text-black/10">
                    04
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* WHY CHOOSE PIXEE */}
      <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-10 xl:gap-20 lg:gap-20 items-center">
            <div className="col-span-1">
              <img
                src={require("../../assets/images/pixee-logo.jpg")}
                className="w-full h-auto xl:h-[50vh] lg:h-[50vh] rounded-xl shadow-md object-cover"
                alt="Pixee Medical System"
              />
            </div>
            <div className="col-span-1">
              <h5 className="text-3xl font-playfair font-bold text-black">
                Why Pixee Knee+ Matters for Surgeons and Patients
              </h5>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                For surgeons, Pixee Knee+ brings the precision of modern
                navigation and robotics into a compact, flexible, and
                surgeon-controlled tool. It allows adoption of advanced
                alignment techniques without requiring the capital investment,
                large infrastructure, or steep learning curve of robots.
              </p>
              <p className="mt-5 text-lg font-source-regular text-greyText leading-relaxed">
                For patients, the benefits translate into:
              </p>
              <ul className="ml-6 mt-3 list-disc space-y-2">
                <li className="text-lg font-source-regular text-greyText">
                  More accurate implant positioning and improved mechanical
                  alignment, which can reduce wear, improve longevity, and
                  minimize the risk of early loosening or revision.
                </li>
                <li className="text-lg font-source-regular text-greyText">
                  Potentially less tissue trauma, lower surgical invasiveness,
                  and faster recovery because there’s no need for bulky
                  instrumentation or percutaneous pins/rods.
                </li>
                <li className="text-lg font-source-regular text-greyText">
                  Consistency and reproducibility: even in smaller centers or
                  ambulatory surgery settings, high-quality TKA becomes
                  achievable.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FAQs */}
      <motion.div
        variants={animation}
        className="py-6 xl:py-12 lg:py-12 bg-logoPrimary/5"
      >
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-10 xl:gap-10 lg:gap-10">
            <div className="col-span-1">
              <h5 className="w-full xl:w-4/5 lg:w-4/5 text-3xl font-playfair font-bold text-black">
                Why Pixee Knee+ Matters for Surgeons and Patients
              </h5>
              <p className="mt-3 w-full xl:w-4/5 lg:w-4/5 text-xl text-greyText font-source-regular">
                Clear answers to the most common questions patients ask about
                AR-assisted knee replacement.
              </p>
            </div>

            {/* ACCORDIONS */}
            <div className="col-span-1">
              <div className="space-y-4">
                {faqs.map((item, index) => (
                  <Accordion
                    key={index}
                    open={open === index + 1}
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform ${
                          open === index + 1 ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    }
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(index + 1)}
                      className="text-left text-base font-source-medium text-black"
                    >
                      {item.q}
                    </AccordionHeader>

                    <AccordionBody className="text-base text-greyText font-source-regular leading-relaxed">
                      {item.a}
                    </AccordionBody>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default PixeeMedicalSystem;
