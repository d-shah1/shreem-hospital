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
                  Symptoms of Cataracts
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  The symptoms of cataracts gradually develop and may include:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Blurred or cloudy vision, which worsens over time.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Difficulty seeing at night, especially when driving.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Sensitivity to light and glare, often from streetlights or
                    the sun.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Seeing halos around lights.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Double vision in one eye.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Faded or yellowed colors, causing difficulty distinguishing
                    between them.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Causes of Cataracts
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  Cataracts primarily develop as a result of aging, but other
                  factors can also contribute to their formation, including:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">Age:</span>{" "}
                    The most common cause of cataracts is the natural aging
                    process, typically affecting people over 60.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Genetics:
                    </span>{" "}
                    A family history of cataracts can increase the risk of
                    developing them.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Injury or Trauma:
                    </span>{" "}
                    Eye injuries can lead to cataracts, sometimes years after
                    the injury occurs.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Medical Conditions:
                    </span>{" "}
                    Conditions such as diabetes can accelerate cataract
                    development.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Medications:
                    </span>{" "}
                    Long-term use of corticosteroids and other medications can
                    increase the risk of cataracts.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Smoking and Alcohol Use:
                    </span>{" "}
                    Lifestyle choices such as smoking and excessive alcohol
                    consumption can increase cataract risk.
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
