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
                  Symptoms of Glaucoma
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  Glaucoma often develops without noticeable symptoms in its
                  early stages, making it a "silent thief of sight." However, as
                  the condition progresses, you may experience:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Gradual loss of peripheral (side) vision, often in both
                    eyes.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Sudden onset of severe eye pain, headache, or nausea (in
                    acute cases).
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Blurred vision or halos around lights.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Redness in the eye.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-playfair font-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Causes of Glaucoma
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  The most common cause of glaucoma is increased intraocular
                  pressure, which occurs when fluid in the eye (aqueous humor)
                  does not drain properly. This can damage the optic nerve over
                  time. Other causes include:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Genetic predisposition or family history of glaucoma.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Age (risk increases after 40).
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Medical conditions such as diabetes or hypertension.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Previous eye injuries or surgeries.
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
