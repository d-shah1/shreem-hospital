/* eslint-disable no-unused-vars */
import { useState } from "react";

/* PACKAGE IMPORTS */
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast, Bounce } from "react-toastify";

/* MATERIAL TAILWIND COMPONENTS */
import { Button } from "@material-tailwind/react";

/* ICONS */
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

/* CONFIG */
import { containerAnimation } from "config/animation";

/* VALIDATION SCHEMA */
const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email().required("Email address is required"),
  phone: yup.string().required("Phone number is required."),
  medicalCondition: yup
    .string()
    .required(
      "Please describe your medical condition as it will help us for diagnosis."
    ),
});

const BookAppointment = () => {
  const [loading, setLoading] = useState(false);

  /* FORM STATES */
  const contactForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      medicalCondition: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const formData = {
        name: values.firstName + " " + values.lastName,
        email: values.email,
        phone: values.phone,
        medicalCondition: values.medicalCondition,
      };

      try {
        const response = await fetch("http://localhost:8080/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setLoading(false);
          toast(
            "Your details have been captured successfully. We will get back to you shortly."
          );
          contactForm.resetForm();
        } else {
          toast("Failed to send your details. Please try again later.");
        }
      } catch (e) {
        console.log("Error: ", e);
      }
    },
  });

  return (
    <>
      <ToastContainer
        theme="light"
        transition={Bounce}
        closeOnClick
        autoClose={7500}
      />
      <motion.section
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        className="py-6 xl:py-12 lg:py-12"
      >
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 gap-5 xl:gap-20 lg:gap-0 items-center">
            {/* LEFT SECTION */}
            <div className="col-span-1">
              <h1 className="text-2.5xl xl:text-3xl lg:text-3xl font-inter-bold text-black tracking-tight leading-tight xl:leading-tight lg:leading-tight">
                Schedule an appointment with us
              </h1>
              <h2 className="text-lg font-source-regular text-greyText mt-3 leading-relaxed">
                Schedule your visit with ease at our clinic. Describe your
                medical condition and get personalized care from our expert
                medical professionals.
              </h2>

              {/* CONTACT DETAILS */}
              <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
                <div className="col-span-1 w-full bg-gray-400 shadow bg-opacity-5 border border-greyBorder p-5 rounded-lg">
                  <IoIosCall className="w-8 h-8 text-logoPrimary" />
                  <h5 className="mt-3 text-black font-source-regular text-base">
                    Call us on Mon-Fri
                  </h5>
                  <a
                    href="tel:+917990026506"
                    className="block text-xl font-source-bold text-black mt-1 hover:text-deep-orange-600 transition-all duration-300 ease-in-out"
                  >
                    +91 7990026506
                  </a>
                </div>
                <div className="col-span-1 w-full bg-gray-400 shadow bg-opacity-5 border border-greyBorder p-5 rounded-lg">
                  <MdEmail className="w-8 h-8 text-logoPrimary" />
                  <h5 className="mt-3 text-black font-source-regular text-base">
                    Email us at
                  </h5>
                  <a
                    href="mailto:shreemhosp@gmail.com"
                    className="block text-xl font-source-bold text-black mt-1 hover:text-deep-orange-600 transition-all duration-300 ease-in-out"
                  >
                    shreemhosp@gmail.com
                  </a>
                </div>
              </div>

              {/* FORM */}
              <form className="mt-10" onSubmit={contactForm.handleSubmit}>
                <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-5">
                  <div className="col-span-2 xl:col-span-1 lg:col-span-1">
                    <label className="text-base font-source-regular text-greyText">
                      First name <span className="text-red-400">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First name"
                        value={contactForm.values.firstName}
                        onChange={contactForm.handleChange}
                        className={`w-full block outline-none focus:outline-none text-sm border ${
                          contactForm.errors.firstName &&
                          contactForm.touched.firstName
                            ? "border-red-400"
                            : "border-greyBorder focus:border-logoPrimary"
                        } rounded-md px-5 py-3 font-source-regular`}
                      />
                    </div>
                  </div>
                  <div className="col-span-2 xl:col-span-1 lg:col-span-1">
                    <label className="text-base font-source-regular text-greyText">
                      Last name <span className="text-red-400">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last name"
                        value={contactForm.values.lastName}
                        onChange={contactForm.handleChange}
                        className={`w-full block outline-none focus:outline-none text-sm border ${
                          contactForm.errors.lastName &&
                          contactForm.touched.lastName
                            ? "border-red-400"
                            : "border-greyBorder focus:border-logoPrimary"
                        } rounded-md px-5 py-3 font-source-regular`}
                      />
                    </div>
                  </div>
                  <div className="col-span-2 xl:col-span-1 lg:col-span-1">
                    <label className="text-base font-source-regular text-greyText">
                      Email address <span className="text-red-400">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email address"
                        value={contactForm.values.email}
                        onChange={contactForm.handleChange}
                        className={`w-full block outline-none focus:outline-none text-sm border ${
                          contactForm.errors.email && contactForm.touched.email
                            ? "border-red-400"
                            : "border-greyBorder focus:border-logoPrimary"
                        } rounded-md px-5 py-3 font-source-regular`}
                      />
                    </div>
                  </div>
                  <div className="col-span-2 xl:col-span-1 lg:col-span-1">
                    <label className="text-base font-source-regular text-greyText">
                      Phone number <span className="text-red-400">*</span>
                    </label>
                    <div className="mt-1">
                      <PhoneInput
                        placeholder="Enter phone number"
                        name="phone"
                        className={`phone ${
                          contactForm.errors.phone &&
                          contactForm.touched.phone &&
                          "error"
                        }`}
                        defaultCountry="IN"
                        countries={["IN"]}
                        value={contactForm.values.phone}
                        onChange={(e) => contactForm.setFieldValue("phone", e)}
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="text-base font-source-regular text-greyText">
                      Describe your medical condition{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <div className="mt-1">
                      <textarea
                        rows="4"
                        name="medicalCondition"
                        id="medicalCondition"
                        placeholder="Describe your medical condition in brief"
                        value={contactForm.values.medicalCondition}
                        onChange={contactForm.handleChange}
                        className={`w-full block outline-none focus:outline-none text-sm border ${
                          contactForm.errors.medicalCondition &&
                          contactForm.touched.medicalCondition
                            ? "border-red-400"
                            : "border-greyBorder focus:border-logoPrimary"
                        } rounded-md px-5 py-3 font-source-regular`}
                      />
                    </div>
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="mt-5 shadow-none hover:shadow-none bg-logoPrimary hover:bg-opacity-80 transition-all duration-300 ease-in-out text-sm font-source-medium text-white rounded-md normal-case"
                >
                  {loading ? "Please wait..." : "Submit details"}
                </Button>
              </form>
            </div>

            {/* RIGHT SECTION */}
            <div className="col-span-1">
              <iframe
                title="Clinic Address"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6540932999787!2d73.13148507561031!3d22.291089279693164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc70034ba105f%3A0x2150f2e25cc10f7b!2sShreem%20Hospital%20%7C%20Eye%20Hospital%20in%20Vadodara%20%7C%20Orthopaedic%20Hospital%20in%20Vadodara!5e0!3m2!1sen!2sin!4v1734365851385!5m2!1sen!2sin"
                className="w-full h-[40vh] xl:h-[80vh] lg:h-[80vh] border-l border-[#E5E5E5] rounded-xl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default BookAppointment;
