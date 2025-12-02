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
                  Symptoms of Retinal Diseases
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  The symptoms of retinal diseases vary depending on the
                  specific condition but may include:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Blurred or distorted vision.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Dark spots or "floaters" in the visual field.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Sudden loss of vision in one or both eyes.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Flashes of light in the peripheral vision.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Difficulty seeing in dim light or experiencing reduced night
                    vision.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    A shadow or curtain effect blocking part of the visual
                    field.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Causes of Retinal Diseases
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  Several factors can contribute to the development of retinal
                  diseases, including:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">Aging:</span>{" "}
                    Conditions like age-related macular degeneration are more
                    common in older individuals.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Diabetes:
                    </span>{" "}
                    High blood sugar levels can damage the blood vessels in the
                    retina, leading to diabetic retinopathy.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Genetics:
                    </span>{" "}
                    Family history of retinal diseases can increase the risk of
                    developing certain conditions.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">Trauma:</span>{" "}
                    Injuries to the eye can lead to retinal detachment or other
                    complications.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Lifestyle Factors:
                    </span>{" "}
                    Smoking, obesity, and high blood pressure can also
                    contribute to retinal damage.
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
