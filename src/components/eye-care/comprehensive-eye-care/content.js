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
                  Symptoms Addressed in Comprehensive Eye Care
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  Comprehensive eye care covers a wide range of symptoms and
                  conditions, including:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Blurred or distorted vision.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Eye pain, discomfort, or redness.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Frequent headaches or eye strain.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Sensitivity to light or glare.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Difficulty focusing on near or distant objects.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Sudden changes in vision, such as flashes of light or
                    floaters.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Dry, itchy, or watery eyes.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-inter-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Causes of Common Eye Problems
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  Comprehensive eye care aims to address the underlying causes
                  of various eye conditions, which may include:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">Age:</span>{" "}
                    The most common cause of cataracts is the natural aging
                    process, typically affecting people over 60.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Refractive Errors:
                    </span>{" "}
                    Caused by the shape of the eye, leading to myopia,
                    hyperopia, or astigmatism.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">Aging:</span>{" "}
                    Conditions such as cataracts, glaucoma, and macular
                    degeneration often develop with age.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Infections and Allergies:
                    </span>{" "}
                    Viral or bacterial infections, as well as environmental
                    allergens, can lead to eye discomfort and inflammation.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Lifestyle Factors:
                    </span>{" "}
                    Prolonged screen time, poor lighting, and inadequate
                    nutrition can strain the eyes and impact vision.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Chronic Diseases:
                    </span>{" "}
                    Conditions like diabetes and hypertension can lead to
                    complications such as diabetic retinopathy or hypertensive
                    retinopathy.
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
