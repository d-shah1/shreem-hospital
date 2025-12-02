/* PACKAGE IMPORTS */
import { motion } from "framer-motion";

/* CONFIG */
import { animation } from "config/animation";
import { Button } from "@material-tailwind/react";

const YoutubeSection = () => {
  return (
    <motion.div
      variants={animation}
      className="py-6 xl:py-12 lg:py-12 bg-greyBackground bg-opacity-60 shadow-inner"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="col-span-1">
            <div className="flex items-center justify-between">
              <h2 className="w-[65%] text-3xl xl:text-3xl lg:text-3xl font-playfair font-bold text-black leading-tight">
                Follow Dr. Pankti Shah Dave on Youtube to get best knowledge
              </h2>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/@dr_pankti_eye"
                className="block mt-4"
              >
                <Button className="shadow-none hover:shadow-none bg-logoPrimary hover:bg-opacity-80 transition-all duration-300 ease-in-out rounded-md normal-case text-base px-5 py-3 text-white font-source-regular">
                  Follow now
                </Button>
              </a>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="col-span-1">
                <iframe
                  className="w-full h-[25vh] rounded-lg"
                  src="https://www.youtube.com/embed/aYupAlHvFoI?si=oOPMEGW5YoKtk490"
                  title="Dr. Pankti Shah Dave"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-span-1">
                <iframe
                  className="w-full h-[25vh] rounded-lg"
                  src="https://www.youtube.com/embed/HGRPcKgB6lA?si=8nrzU5480Bi2cx5a"
                  title="Dr. Pankti Shah Dave"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-span-1">
                <iframe
                  className="w-full h-[25vh] rounded-lg"
                  src="https://www.youtube.com/embed/as3YWVqCMVI?si=XPotDhROx8gbZq6G"
                  title="Dr. Pankti Shah Dave"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-span-1">
                <iframe
                  className="w-full h-[25vh] rounded-lg"
                  src="https://www.youtube.com/embed/Rn_g1yog5pU?si=ZQFuR0-O_mBW1ZZH"
                  title="Dr. Pankti Shah Dave"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center justify-between">
              <h2 className="w-[65%] text-3xl xl:text-3xl lg:text-3xl font-playfair font-bold text-black leading-tight">
                Follow Dr. Anshul Dave on Youtube to check our work
              </h2>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/@anshuldave4400/featured"
                className="block mt-4"
              >
                <Button className="shadow-none hover:shadow-none bg-logoPrimary hover:bg-opacity-80 transition-all duration-300 ease-in-out rounded-md normal-case text-base px-5 py-3 text-white font-source-regular">
                  Follow now
                </Button>
              </a>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="col-span-1">
                <iframe
                  className="w-full h-[25vh] rounded-lg"
                  src="https://www.youtube.com/embed/bTfAFC5kcd4?si=pJ-cVmpxa2FbsLof"
                  title="Dr. Anshul Dave"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-span-1">
                <iframe
                  className="w-full h-[25vh] rounded-lg"
                  src="https://www.youtube.com/embed/hfTz2P_xvI8?si=XALuIQUAUCyJyAlw"
                  title="Dr. Anshul Dave"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-span-1">
                <iframe
                  className="w-full h-[25vh] rounded-lg"
                  src="https://www.youtube.com/embed/ue9SWAm8cjY?si=Lk3Z-A4F0hqHXMgy"
                  title="Dr. Anshul Dave"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="col-span-1">
                <iframe
                  className="w-full h-[25vh] rounded-lg"
                  src="https://www.youtube.com/embed/d2mhyt1fwVs?si=z1tN2AjW_ZAgpq-C"
                  title="Dr. Anshul Dave"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default YoutubeSection;
