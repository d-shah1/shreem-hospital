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
                  Symptoms of Pediatric Eye Conditions
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  While some eye conditions may not have obvious symptoms,
                  parents should watch for the following signs in children:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Difficulty reading, writing, or focusing on objects.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Misaligned or crossed eyes (strabismus).
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Frequent rubbing or squinting of the eyes.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Sensitivity to light or excessive tearing.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Persistent redness or swelling in the eyes.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Poor hand-eye coordination or delayed motor skills.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Difficulty recognizing objects or people at a distance.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Causes of Pediatric Eye Problems
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  Several factors can lead to eye conditions in children,
                  including:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Genetic Factors:
                    </span>{" "}
                    A family history of eye disorders like myopia, strabismus,
                    or glaucoma can increase the risk in children.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Congenital Abnormalities:
                    </span>{" "}
                    Some eye problems, like congenital cataracts or retinal
                    disorders, are present at birth.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Infections or Injuries:
                    </span>{" "}
                    Eye infections or trauma during childhood can cause vision
                    issues.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Lifestyle Factors:
                    </span>{" "}
                    Excessive screen time, poor lighting, or inadequate
                    nutrition can contribute to eye strain and vision problems.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Premature Birth:
                    </span>{" "}
                    Premature babies are at a higher risk for certain eye
                    conditions, such as retinopathy of prematurity.
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
