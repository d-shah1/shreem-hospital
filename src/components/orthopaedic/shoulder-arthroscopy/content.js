/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Card, CardBody } from "@material-tailwind/react";

const OtherContent = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-10 lg:gap-10">
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Who should consider Shoulder Arthroscopy?
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  You may benefit from shoulder arthroscopy if you experience:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Persistent shoulder pain that does not respond to medication
                    or therapy.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Difficulty in moving your shoulder or performing daily
                    activities.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Recurrent shoulder dislocations or instability.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Pain or stiffness due to injuries or degenerative
                    conditions.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Addressing Common Concerns About Shoulder Arthroscopy
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  We understand that many people in India have concerns about
                  joint replacement surgeries, such as:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="text-black font-source-semibold">
                      “Is it safe?”
                    </span>{" "}
                    Shoulder arthroscopy is a safe and effective procedure
                    performed under expert supervision.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="text-black font-source-semibold">
                      “Will recovery take too long?”
                    </span>{" "}
                    Most patients resume their daily activities within a few
                    weeks, thanks to its minimally invasive nature.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="text-black font-source-semibold">
                      “Is it expensive?”
                    </span>{" "}
                    We ensure high-quality care at affordable costs to cater to
                    Indian families.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OtherContent;
