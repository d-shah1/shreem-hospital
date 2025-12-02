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
            <Card className="bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Who should consider Shoulder Joint Replacement Surgery?
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  You might be a candidate for shoulder replacement surgery if
                  you experience:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Chronic shoulder pain that interferes with your daily
                    activities or sleep.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Difficulty lifting objects or moving your arm.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Persistent pain and stiffness caused by arthritis or a
                    degenerative condition.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Fractures or damage that cannot be repaired with
                    non-surgical methods.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Common Myths About Shoulder Joint Replacement Surgery
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  We understand that many people in India have concerns about
                  joint replacement surgeries, such as:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    “Surgery is too risky.”
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    “Recovery is long and painful.”
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    “It’s only for older people.”
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
