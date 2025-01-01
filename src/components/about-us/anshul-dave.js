/* PACKAGES */
import { motion } from "framer-motion";

/* ANIMATION */
import { animation } from "config/animation";

/* ASSETS */
import AnshulDave from "assets/images/about-anshul.jpeg";

/* MATERIAL TAILWIND COMPONENTS */
import { Card, CardBody } from "@material-tailwind/react";

/* EXPERTISE AREA */
const expertiseArea = [
  "Total Knee Replacement",
  "Total Hip Replacement",
  "Sports Injuries",
  "ACL Reconstruction",
  "Pelvic & Acetabular Surgery",
  "Foot & Ankle Surgeries",
  "Orthopedic Oncology",
  "Clinic Systems Implementation",
];

const AboutAnshulDave = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        {/* HEADING */}
        <div className="block xl:flex lg:flex items-end gap-y-5 xl:gap-10 lg:gap-10">
          <img
            src={AnshulDave}
            className="w-40 h-40 rounded-xl border-2 border-logoPrimary shadow-md flex-shrink-0"
            alt="Anshul Dave"
          />

          <div className="pt-5 xl:pt-0 lg:pt-0 pb-0 xl:pb-2 lg:pb-0">
            <h2 className="text-2xl xl:text-3xl lg:text-3xl font-inter-bold text-black tracking-tight">
              Dr. Anshul Dave
            </h2>
            <h5 className="mt-1 xl:mt-2 lg:mt-2 text-xl xl:text-2xl lg:text-2xl font-source-regular text-greyText">
              Chief and Head Orthopedics, Joint Replacement and Sports Injury
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
                Meet Dr. Anshul Dave, a distinguished orthopedic surgeon and the
                Chief and Head of Orthopedics, renowned for his expertise in
                Joint Replacement and Sports Injury management. With a career
                spanning years of excellence, Dr. Dave has dedicated himself to
                transforming lives by restoring mobility and function through
                innovative surgical techniques and personalized care. His
                patient-first approach, combined with a relentless commitment to
                medical excellence, has established him as a trusted leader in
                the field of orthopedics.
              </p>
              <p className="mt-5 text-md font-source-regular text-greyText leading-relaxed">
                Dr. Dave specializes in advanced joint replacement procedures,
                including hip, knee, and shoulder replacements, ensuring his
                patients achieve pain-free movement and a significantly improved
                quality of life. Leveraging the latest advancements in minimally
                invasive techniques and robotics, he consistently delivers
                precise, effective outcomes that minimize recovery time. Whether
                addressing the challenges of degenerative joint diseases or
                traumatic injuries, Dr. Dave tailors every treatment plan to
                meet the unique needs of his patients, fostering confidence and
                trust in his care.
              </p>
              <p className="mt-5 text-md font-source-regular text-greyText leading-relaxed">
                As an expert in sports injury management, Dr. Anshul Dave is
                passionate about helping athletes of all levels recover from
                injuries and return to their peak performance. His in-depth
                understanding of musculoskeletal dynamics and rehabilitation
                allows him to create comprehensive recovery strategies that
                emphasize long-term wellness and injury prevention. From
                ligament reconstruction to advanced arthroscopic procedures, Dr.
                Dave combines surgical excellence with compassionate care to
                support his patients every step of the way.
              </p>
              <p className="mt-5 text-md font-source-regular text-greyText leading-relaxed">
                Beyond the operating room, Dr. Dave is committed to advancing
                orthopedic knowledge and sharing his expertise. He regularly
                engages in research, education, and community outreach, striving
                to empower patients and future medical professionals. With a
                focus on innovation, empathy, and excellence, Dr. Anshul Dave
                continues to make a profound impact on the lives of his
                patients, helping them rediscover the joy of movement and an
                active lifestyle.
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

export default AboutAnshulDave;
