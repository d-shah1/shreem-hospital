import React from "react";

/* PACKAGE IMPORTS */
import { motion } from "framer-motion";

/* CONFIG */
import { animation } from "config/animation";

/* MATERIAL TAILWIND COMPONENTS */
import { Card, CardBody } from "@material-tailwind/react";

/* DATA */
const data = [
  {
    id: 1,
    title: "Advance Technology",
    description:
      "We are equipped with the latest medical technology to ensure precise diagnosis and effective treatment.",
  },
  {
    id: 2,
    title: "Highly Qualified Experts",
    description:
      "With a commitment to continuous learning, our staff work collaboratively to provide world-class care tailored to each patient's unique needs.",
  },
  {
    id: 3,
    title: "Clarity You Can Trust",
    description:
      "Our transparent pricing policy ensures you know the costs upfront, with no hidden fees, empowering you to make informed decisions about your health.",
  },
];

const CardElement = (props) => {
  return (
    <Card className="group bg-white border border-greyBorder rounded-lg shadow mt-5 first:mt-0">
      <CardBody className="p-5">
        <div className="block xl:flex lg:flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-white group-hover:bg-orange-400 transition-all duration-300 ease-in-out border border-greyBorder group-hover:border-orange-400 flex items-center justify-center flex-shrink-0">
            <h5 className="text-3xl font-inter-bold text-orange-400 group-hover:text-white">
              0{props.index}
            </h5>
          </div>
          <div className="p-0 pt-3 xl:pt-0 lg:pt-0">
            <h5 className="text-xl font-source-semibold text-black">
              {props.title}
            </h5>
            <p className="text-base font-source-regular text-greyText">
              {props.description}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const WhyChooseUs = () => {
  return (
    <motion.div variants={animation} className="py-6 xl:py-12 lg:py-12">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-y-5 xl:gap-20 lg:gap-20">
          <div className="col-span-1">
            {/* BADGE */}
            <div className="w-fit bg-orange-400 border-2 border-white shadow-md rounded-full px-4 py-2">
              <p className="text-base font-source-medium text-white">
                YOUR HEALTH IS OUR TOP GOAL
              </p>
            </div>

            <div className="mt-5">
              <h2 className="text-3xl font-inter-bold text-black tracking-tight leading-tight xl:leading-normal lg:leading-normal">
                Your Health, Our Mission
              </h2>
              <p className="mt-2 text-lg font-source-regular text-greyText">
                We combine care with cutting-edge technology to deliver
                exceptional healthcare services. With the state-of-the-art
                facilities, and a patient-first approach, we are dedicated to
                your well-being at every step of your journey to health.
              </p>
            </div>
          </div>
          <div className="col-span-1">
            {data.map((data) => (
              <React.Fragment key={data.id}>
                <CardElement
                  icon={data.icon}
                  title={data.title}
                  description={data.description}
                  index={data.id}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
