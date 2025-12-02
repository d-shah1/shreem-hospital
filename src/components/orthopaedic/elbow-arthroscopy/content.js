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
                  Who should consider Elbow Arthroscopy?
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  Elbow arthroscopy may be the right option for you if you
                  experience:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Persistent elbow pain that does not improve with medication
                    or therapy.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Limited range of motion or stiffness in the elbow joint.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Pain caused by injuries, arthritis, or other degenerative
                    conditions.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Recurrent swelling or locking of the elbow joint.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Debunking Myths About Elbow Arthroscopy
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  We understand that undergoing surgery can be a daunting
                  decision. Here are some common myths and the facts:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="text-black font-source-semibold">
                      “It’s a risky procedure.”
                    </span>{" "}
                    Elbow arthroscopy is a safe and effective treatment
                    performed by experienced surgeons.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="text-black font-source-semibold">
                      “Recovery takes too long.”
                    </span>{" "}
                    Thanks to its minimally invasive nature, most patients
                    recover quickly and return to their daily activities within
                    weeks.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="text-black font-source-semibold">
                      “It’s too expensive.”
                    </span>{" "}
                    At Shreem Hospital, we provide cost-effective care without
                    compromising on quality.
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
