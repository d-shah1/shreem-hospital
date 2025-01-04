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
                  Symptoms of Optic Nerve Disorders
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  The symptoms of optic nerve-related disorders vary but may
                  include:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Sudden or gradual vision loss in one or both eyes.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Pain or discomfort, especially during eye movement (commonly
                    seen in optic neuritis).
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Blurred, dim, or distorted vision.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Loss of peripheral vision or "tunnel vision."
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Changes in color perception or difficulty distinguishing
                    colors.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Swelling around the optic nerve head, visible during an eye
                    exam.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-inter-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Causes of Optic Nerve Disorders
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  The underlying causes of optic nerve disorders include:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Inflammation:
                    </span>{" "}
                    Conditions like optic neuritis, often linked to autoimmune
                    diseases such as multiple sclerosis.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Increased Eye Pressure:
                    </span>{" "}
                    Glaucoma damages the optic nerve over time due to elevated
                    intraocular pressure.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Trauma or Injury:
                    </span>{" "}
                    Direct injury to the eye or head can impact the optic nerve.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Ischemia:
                    </span>{" "}
                    Reduced blood flow to the optic nerve, known as ischemic
                    optic neuropathy, commonly affects older adults.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">
                      Infections:
                    </span>{" "}
                    Viral or bacterial infections can lead to optic nerve
                    damage.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    <span className="font-source-bold text-black">Tumors:</span>{" "}
                    Brain or orbital tumors may compress the optic nerve,
                    leading to vision problems.
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
