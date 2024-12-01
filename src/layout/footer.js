import React from "react";

/* REACT IMPORTS */
import { Link } from "react-router-dom";

/* ICONS */
import { IoCall, IoMail, IoLocation } from "react-icons/io5";

/* NAVIGATION LINKS */
const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About us",
    link: "/about-us",
  },
  {
    id: 3,
    name: "Our Expertise",
    link: "/our-expertise",
  },
  {
    id: 4,
    name: "What we treat",
    link: "/what-we-treat",
  },
  {
    id: 5,
    name: "Gallery",
    link: "/gallery",
  },
  {
    id: 6,
    name: "Book an appointment",
    link: "/book-an-appointment",
  },
];

const Footer = () => {
  return (
    <React.Fragment>
      {/* LOCATION */}
      <div className="p-0 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3691.654092763602!2d73.13406!3d22.2910893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc70034ba105f%3A0x2150f2e25cc10f7b!2sShreem%20Hospital%20%7C%20Eye%20Hospital%20in%20Vadodara%20%7C%20Orthopaedic%20Hospital%20in%20Vadodara!5e0!3m2!1sen!2sin!4v1733055583660!5m2!1sen!2sin"
          className="w-full h-footerMap"
          title="Shreem Hospital"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="relative xl:absolute lg:absolute top-0 right-0 xl:right-20 lg:right-20 h-full">
          <div className="container h-full maps">
            <div className="ml-auto w-full xl:w-[35vh] lg:w-[35vh] h-full bg-[#323232] bg-opacity-90 px-5 py-5 xl:py-0 lg:py-0 flex flex-col justify-center">
              {/* WORKING HOURS */}
              <div className="p-0">
                <h5 className="text-lg font-source-bold text-white">
                  WORKING HOURS
                </h5>
                <div className="mt-3">
                  <div className="pb-1.5 border-b border-white border-opacity-40">
                    <div className="flex items-center justify-between">
                      <p className="text-base font-source-regular text-white">
                        Monday - Saturday
                      </p>
                      <p className="text-base font-source-semibold text-white">
                        9:00 AM - 5:30 PM
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 pb-1.5 border-b border-white border-opacity-40">
                    <div className="flex items-center justify-between">
                      <p className="text-base font-source-regular text-white">
                        Sunday
                      </p>
                      <p className="text-base font-source-semibold text-white">
                        Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* HOSPITAL ADDRESS */}
              <div className="mt-7">
                <h5 className="text-lg font-source-bold text-white">
                  HOSPITAL ADDRESS
                </h5>
                <div className="mt-2">
                  <p className="block text-base font-source-regular text-white group-hover:text-red-300 transition-all duration-300 ease-in-out leading-relaxed">
                    4th floor, Florence Excellence, Vasna - Bhayli Main Rd,
                    above Kathiyavadi khadki restaurant, Bhayli, Vadodara,
                    Gujarat 390015
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black">
        <div className="container">
          {/* TOP FOOTER */}
          <div className="py-8">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-inter-extrabold text-white uppercase">
                LOGO PLACEHOLDER
              </h5>

              {/* NAVIGATION LINKS */}
              <div className="flex items-center gap-10">
                {navLinks.map((data) => (
                  <Link
                    to={data.link}
                    key={data.id}
                    className="block text-base font-source-regular text-white hover:text-orange-400 transition-all duration-300 ease-in-out"
                  >
                    {data.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CONNECT WITH US SECTION */}
          <div className="py-8 border-t border-white border-opacity-40">
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 items-center">
              <div className="col-span-1">
                <h5 className="text-2xl font-inter-bold text-white">
                  Get in touch with us
                </h5>
                <p className="text-base font-source-regular text-white text-opacity-80">
                  Connect with us to know about how we can help you
                </p>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-between">
                  <div className="p-0">
                    <div className="flex items-center gap-5 group cursor-pointer">
                      <div className="w-12 h-12 bg-[#232327] rounded-full shrink-0 flex items-center justify-center">
                        <IoCall className="w-5 h-5 text-white group-hover:text-orange-400 transition-all duration-300 ease-in-out" />
                      </div>
                      <div>
                        <h5 className="text-base font-source-regular text-white text-opacity-80">
                          Give us a call
                        </h5>
                        <a
                          href="tel:+919429190126"
                          className="block text-xl font-source-semibold text-white group-hover:text-orange-400 transition-all duration-300 ease-in-out"
                        >
                          +91 9429190126
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-0">
                    <div className="flex items-center gap-5 group cursor-pointer">
                      <div className="w-12 h-12 bg-[#232327] rounded-full shrink-0 flex items-center justify-center">
                        <IoMail className="w-5 h-5 text-white group-hover:text-orange-400 transition-all duration-300 ease-in-out" />
                      </div>
                      <div>
                        <h5 className="text-base font-source-regular text-white text-opacity-80">
                          Send us an email
                        </h5>
                        <a
                          href="mailto:shreemhospital@gmail.com"
                          className="block text-lg font-source-semibold text-white group-hover:text-orange-400 transition-all duration-300 ease-in-out"
                        >
                          shreemhospital@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-0">
                    <div className="flex items-center gap-5 group cursor-pointer">
                      <div className="w-12 h-12 bg-[#232327] rounded-full shrink-0 flex items-center justify-center">
                        <IoLocation className="w-5 h-5 text-white group-hover:text-red-300 transition-all duration-300 ease-in-out" />
                      </div>
                      <div>
                        <h5 className="text-base font-source-regular text-white text-opacity-80">
                          Visit us at our hospital
                        </h5>
                        <a
                          href="https://maps.app.goo.gl/KjFZcHxeLkbnBshy9"
                          target="_blank"
                          rel="noreferrer"
                          className="block text-lg font-source-semibold text-white group-hover:text-red-300 transition-all duration-300 ease-in-out"
                        >
                          Bhayli, Vadodara, Gujarat
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COPYRIGHT FOOTER */}
          <div className="py-4 border-t border-white border-opacity-40">
            <div className="block xl:flex lg:flex items-center justify-center xl:justify-between lg:justify-between">
              <p className="text-sm font-source-regular text-white text-center xl:text-start lg:text-start">
                © Copyright 2024 Shreem Hospital. All Rights Reserved.
              </p>

              {/* POLICIES */}
              <Link
                href="/privacy-policy"
                className="mt-3 xl:mt-0 lg:mt-0 block text-base font-source-regular text-white hover:text-orange-400 text-center xl:text-start lg:text-start"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
