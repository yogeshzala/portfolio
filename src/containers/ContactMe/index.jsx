import React, { Fragment, useCallback, useEffect, useState } from "react";
import Heading from "../../components/Heading";

import Button from "../../components/Button";
import InputBox from "../../components/InputBox";

import { motion } from "framer-motion";
import { IMAGES } from "../../assets";
import { testEmail } from "../../utils/helper";

export default function ContactMe() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFromErrors] = useState({});
  console.log("🚀 ~ file: index.jsx:22 ~ ContactMe ~ formErrors:", formErrors);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = useCallback(() => {
    const { name, email, message } = formValues;
    let isValid = true;
    const errors = {};
    if (!name) {
      errors.name = "Name can't be empty !";
      isValid = false;
    }
    if (testEmail(email)) {
      errors.email = testEmail(email);
      isValid = false;
    }
    if (!message) {
      errors.message = "Message can't be empty !";
      isValid = false;
    }
    setFromErrors(errors);
    return isValid;
  }, [formValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (validateForm()) {
      console.log("Values", formValues);
    }
  };

  useEffect(() => {
    if (isSubmitted) validateForm();
  }, [isSubmitted, validateForm, formValues]);

  return (
    <Fragment>
      <div className="min-h-screen sm:h-screen grid grid-cols-1 lg:grid-cols-2 w-full">
        <motion.div className="overflow-auto py-5 sm:py-14 lg:py-20 flex flex-col justify-evenly">
          <div className="flex gap-3 text-3xl sm:text-6xl text-primary font-concertOne mb-4 sm:mb-12">
            <Heading text="Contact" /> <Heading text="Me" />
          </div>
          <div className="flex items-center justify-center mb-6 sm:mb-12 lg:hidden">
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: -10 }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                duration: 3,
                repeatType: "reverse",
              }}
            >
              <img
                src={IMAGES.ContactMeVector}
                alt="AboutMeVector"
                className="w-52 sm:w-96"
              />
            </motion.div>
          </div>
          <motion.form
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-4 sm:gap-6"
            onSubmit={onSubmit}
          >
            <InputBox
              type="text"
              placeholder="Name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              error={formErrors.name}
              autoComplete="off"
            />
            <InputBox
              type="text"
              placeholder="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              error={formErrors.email}
              autoComplete="off"
            />
            <div className="flex flex-col">
              <textarea
                rows="5"
                placeholder="Message"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                className="w-full px-4 sm:px-5 py-3 sm:py-4 font-concertOne text-sm sm:text-lg text-primary bg-transparent border-2 border-primary rounded-lg focus:outline-none placeholder-primary resize-none"
                autoComplete="off"
              />
              {formErrors.message && (
                <p className="text-primary text-sm mt-1 ml-4 sm:ml-5">
                  {formErrors.message}
                </p>
              )}
            </div>
            <Button type="submit" text="Send" />
          </motion.form>
        </motion.div>
        <div className="flex items-center justify-center pl-20 max-lg:hidden">
          <motion.div
            initial={{ y: 10 }}
            animate={{ y: -10 }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 3,
              repeatType: "reverse",
            }}
          >
            <img
              src={IMAGES.ContactMeVector}
              alt="ContactMeVector"
              className="w-52 sm:w-96"
            />
          </motion.div>
        </div>
      </div>
    </Fragment>
  );
}
