/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* ASSETS */
import PanktiShah from "assets/images/about-pankti.jpeg";

/* MATERIAL TAILWIND COMPONENTS */
import { Card, CardBody } from "@material-tailwind/react";

/* EXPERTISE AREA */
const expertiseArea = [
  "MICS Phacoemulsification",
  "Optic Nerve related disorders",
  "Pediatric Eye care",
  "Retinal Disease Management",
  "Glaucoma Management",
  "Optical Services",
];

const AboutPanktiDave = () => {
  return (
    <motion.div
      variants={animation}
      className="py-6 xl:py-12 lg:py-12 border-t border-greyBorder"
    >
      <div className="container">
        {/* HEADING */}
        <div className="block xl:flex lg:flex items-end gap-y-5 xl:gap-10 lg:gap-10">
          <img
            src={PanktiShah}
            className="w-40 h-40 rounded-xl border-2 border-logoPrimary shadow-md flex-shrink-0"
            alt="Pankti Dave"
          />

          <div className="pt-5 xl:pt-0 lg:pt-0 pb-0 xl:pb-2 lg:pb-0">
            <h2 className="text-2xl xl:text-3xl lg:text-3xl font-inter-bold text-black tracking-tight">
              Dr. Pankti Shah Dave
            </h2>
            <h5 className="mt-1 xl:mt-2 lg:mt-2 text-xl xl:text-2xl lg:text-2xl font-source-regular text-greyText">
              Cataract surgery, LASIK surgery and Neuro opthalmic discorder
              management expert
            </h5>
            <h5 className="text-xl xl:text-2xl lg:text-2xl font-source-regular text-greyText">
              Shreem Hospital, Vadodara, Gujarat, India
            </h5>
          </div>
        </div>

        {/* BODY */}
        <div className="pt-5 xl:pt-10 lg:pt-10">
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 gap-y-5 xl:gap-20 lg:gap-20">
            <div className="col-span-3">
              <p className="text-md font-source-regular text-greyText leading-relaxed">
                At the heart of excellence in eye care is Dr. Pankti Shah, a
                highly skilled and compassionate ophthalmologist specializing in
                Cataract Surgery, LASIK Surgery, and Neuro-Ophthalmic Disorder
                Management. With a steadfast commitment to restoring and
                enhancing vision, Dr. Shah combines precision, expertise, and
                patient-centered care to deliver outstanding outcomes. Her
                dedication to advancing eye health has earned her a reputation
                as a trusted leader in the field, making her the preferred
                choice for individuals seeking the highest standard of
                treatment.
              </p>
              <p className="mt-5 text-md font-source-regular text-greyText leading-relaxed">
                Dr. Shah's extensive experience in cataract surgery has helped
                countless patients regain clarity in their vision, using the
                latest techniques and advanced lens options tailored to
                individual needs. As an expert in LASIK surgery, she transforms
                lives by providing freedom from glasses and contact lenses,
                utilizing state-of-the-art laser technology for precision and
                safety. Her deep understanding of neuro-ophthalmic disorders
                ensures comprehensive care for complex conditions affecting the
                optic nerve and visual pathways, bridging the gap between
                neurology and ophthalmology with a holistic approach.
              </p>
              <p className="mt-5 text-md font-source-regular text-greyText leading-relaxed">
                Beyond her clinical expertise, Dr. Shah is deeply committed to
                patient education and personalized care. She takes the time to
                understand each patient's unique concerns, ensuring they feel
                empowered and confident throughout their treatment journey. With
                a focus on innovation, compassion, and excellence, Dr. Pankti
                Shah continues to make a profound impact on her patients’ lives,
                one clear vision at a time.
              </p>
            </div>
            <div className="col-span-1">
              {expertiseArea.map((data, index) => (
                <Card
                  key={index}
                  className="bg-logoPrimary border-2 border-white rounded-md shadow-xl mt-3 first:mt-0"
                >
                  <CardBody className="px-5 py-3">
                    <p className="text-md font-source-medium text-white">
                      {data}
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPanktiDave;
