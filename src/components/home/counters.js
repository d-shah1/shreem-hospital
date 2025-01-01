/* PACKAGES */
import { motion } from "framer-motion";
import CountUp from "react-countup";

/* CONFIG */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENT */
import { Card, CardBody } from "@material-tailwind/react";

/* STAT CARD */
const StatCard = (props) => {
  return (
    <Card className="bg-orange-400 bg-opacity-5 border border-orange-400 border-opacity-50 rounded-lg shadow">
      <CardBody className="p-5">
        <CountUp
          end={props.counter}
          suffix={props.suffix}
          className="text-4xl font-inter-bold text-black"
        />
        <div className="mt-2">
          <h5 className="text-lg font-source-semibold text-black">
            {props.title}
          </h5>
          <p className="mt-1 text-base font-source-regular text-greyText">
            {props.description}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

/* DATA */
const statsData = [
  {
    id: 1,
    counter: 10,
    suffix: "+",
    title: "Years of Experience",
    description:
      "Providing specialized care to patients with 10+ years of expertise",
  },
  {
    id: 2,
    counter: 100,
    suffix: "+",
    title: "Successful Surgeries",
    description:
      "Over 100+ surgeries performed with exceptional care and precision",
  },
  {
    id: 3,
    counter: 50,
    suffix: "+",
    title: "Outreach camps organized",
    description:
      "Bringing quality healthcare services to underserved communities",
  },
  {
    id: 4,
    counter: 200,
    suffix: "+",
    title: "Happy patients",
    description: "Transforming health with compassion and medical expertise",
  },
];

const Counters = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 gap-5">
          {statsData.map((data, index) => (
            <div className="col-span-1" key={index}>
              <StatCard
                counter={data.counter}
                suffix={data.suffix}
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Counters;
