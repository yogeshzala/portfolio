import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ICONS } from "../../assets";

const backdropVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};
const modalVariants = {
  open: {
    y: 0,
  },
  closed: {
    y: 60,
  },
};

export default function Modal({ open, setOpen }) {
  const body = document.querySelector("body");
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [body.style, open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          variants={backdropVariants}
          initial="closed"
          animate="open"
          exit="closed"
          transition={{ duration: 0.5, ease: "ease" }}
          // tabindex="-1"
          className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto h-screen flex justify-center items-center backdrop-blur-sm"
        >
          <div className="relative w-full max-w-sm max-h-full">
            <motion.div
              key="modal"
              variants={modalVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.5 }}
              className="relative bg-primary rounded-lg shadow"
            >
              <button
                className="absolute top-2.5 right-2.5 text-secondary border-secondary border-2 hover:bg-secondary hover:text-primary rounded-full flex p-1 duration-200 transition-colors"
                onClick={handleClose}
              >
                <FontAwesomeIcon
                  icon={ICONS.Close}
                  className="h-3 w-3 sm:h-4 sm:w-4"
                />
              </button>
              <div className="p-6 text-center">
                <FontAwesomeIcon
                  icon={ICONS.messageSuccess}
                  className="h-14 sm:h-16 text-white"
                />
                <p className="text-3xl sm:text-4xl font-concertOne mb-2">
                  Thank You
                </p>
                <p className="text-base sm:text-lg font-concertOne text-white leading-tight">
                  Thank you for reaching out to me; I appreciate your message !
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
