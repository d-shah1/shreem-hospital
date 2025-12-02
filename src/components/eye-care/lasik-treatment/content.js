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
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-y-5 xl:gap-10 lg:gap-10">
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Symptoms Indicating Suitability for Vision Correction
                </h2>
                <ul className="ml-8 mt-5 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Blurred or distorted vision due to refractive errors.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Difficulty focusing on objects at a distance or up close.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Frequent need to update prescription glasses or contact
                    lenses.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Desire for a more convenient and glasses-free lifestyle.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Benefits of Vision Correction Procedures
                </h2>
                <ul className="ml-8 mt-5 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Significantly reduced dependence on glasses or contact
                    lenses.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Quick recovery time with most patients resuming normal
                    activities within days.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Enhanced precision and safety with advanced laser
                    technology.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Long-lasting results with improved quality of life and
                    visual clarity.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Causes of Vision Impairment Addressed by Laser Treatments
                </h2>
                <ul className="ml-8 mt-5 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Refractive Errors:
                    </span>{" "}
                    Caused by the shape of the cornea or lens, leading to
                    myopia, hyperopia, and astigmatism.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">Aging:</span>{" "}
                    Natural changes in the eye’s structure can lead to vision
                    issues over time.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Genetic Factors:
                    </span>{" "}
                    A family history of refractive errors increases the
                    likelihood of similar conditions.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Lifestyle Factors:
                    </span>{" "}
                    Prolonged screen time, inadequate lighting, and lack of eye
                    care can exacerbate vision problems.
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
