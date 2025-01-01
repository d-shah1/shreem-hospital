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
                <h2 className="text-2xl font-inter-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Who should consider Knee Arthroscopy?
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  You may benefit from knee arthroscopy if you experience:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Persistent knee pain or stiffness that does not respond to
                    non-surgical treatments.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Swelling or locking of the knee joint.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Difficulty in walking or performing physical activities.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Injuries or degenerative conditions affecting knee function.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-inter-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Common Myths About Knee Arthroscopy
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  We understand that patients in India may have concerns about
                  undergoing surgery. Let us address a few common myths:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="text-black font-source-semibold">
                      “It’s risky.”
                    </span>{" "}
                    Knee arthroscopy is a safe and commonly performed procedure
                    with minimal risks.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="text-black font-source-semibold">
                      “Recovery will take too long.”
                    </span>{" "}
                    Thanks to its minimally invasive nature, most patients
                    recover quickly and resume their daily activities within
                    weeks.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="text-black font-source-semibold">
                      “It’s too expensive.”
                    </span>{" "}
                    At Shreem Hospital, We offer cost-effective care without
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
