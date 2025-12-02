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
                  Who should consider Ankle Arthroscopy?
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  You might benefit from ankle arthroscopy if you experience:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Chronic ankle pain or swelling that doesn’t improve with
                    medication or therapy.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Recurrent ankle sprains or instability.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Pain caused by arthritis, cartilage damage, or bone spurs.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Difficulty in walking or performing daily activities due to
                    ankle issues.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Busting Myths About Ankle Arthroscopy
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  We understand that undergoing surgery can feel overwhelming.
                  Here are some common myths and the facts:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="text-black font-source-semibold">
                      “It’s risky.”
                    </span>{" "}
                    Ankle arthroscopy is a safe, minimally invasive procedure
                    performed by experts.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="text-black font-source-semibold">
                      “Recovery takes forever.”
                    </span>{" "}
                    Most patients recover quickly and can return to daily
                    activities within a few weeks.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="text-black font-source-semibold">
                      “It’s too costly.”
                    </span>{" "}
                    At Shreem Hospital, we ensure that our services are
                    affordable without compromising on quality.
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
