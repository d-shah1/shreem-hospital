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
                <h2 className="text-2xl font-inter-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Who can benefit from Ortho Biologic Treatments?
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  Ortho biologic treatments are suitable for:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    Patients with chronic joint pain or stiffness due to
                    arthritis.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Individuals recovering from sports injuries like ligament
                    tears or tendon damage.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Those looking to delay or avoid surgical interventions for
                    orthopedic conditions.
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    Patients seeking faster recovery from joint or soft tissue
                    injuries.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
          <div className="col-span-1">
            <Card className="h-full bg-white border-2 border-greyBorder rounded-lg shadow-md">
              <CardBody className="p-5 xl:p-10 lg:p-10">
                <h2 className="text-2xl font-inter-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                  Addressing Common Concerns About Ortho Biologic Treatments
                </h2>
                <p className="mt-2 text-lg font-source-regular text-greyText">
                  We understand that many people are unfamiliar with these
                  advanced treatments and may have concerns:
                </p>
                <ul className="ml-8 mt-3 list-disc">
                  <li className="text-lg font-source-regular text-greyText leading-relaxed">
                    “Are these treatments safe?”
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    “Will they really work for me?”
                  </li>
                  <li className="mt-2 text-lg font-source-regular text-greyText leading-relaxed">
                    “Are they too expensive?”
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
