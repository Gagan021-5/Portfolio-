import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/xdkdkyol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px -5px rgba(79, 70, 229, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 sm:py-12 lg:py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <ToastContainer />
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-6 sm:mb-8"
        variants={headerVariants}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-indigo-950/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-indigo-500/30"
        variants={itemVariants}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 sm:gap-6"
        >
          <motion.div variants={itemVariants}>
            <label className="text-gray-300 text-lg font-semibold mb-2 block">
              Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              className="h-12 w-full bg-indigo-900/50 rounded-xl text-white outline-none px-4 py-2 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="text-gray-300 text-lg font-semibold mb-2 block">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              className="h-12 w-full bg-indigo-900/50 rounded-xl text-white outline-none px-4 py-2 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="text-gray-300 text-lg font-semibold mb-2 block">
              Write your message
            </label>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              className="h-32 sm:h-40 w-full bg-indigo-900/50 rounded-xl text-white outline-none p-4 focus:ring-2 focus:ring-indigo-500 transition-all duration-300 resize-y"
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </motion.div>

          <motion.div className="flex justify-end" variants={itemVariants}>
            <motion.input
              type="submit"
              value={isSubmitting ? "Sending..." : "Send"}
              disabled={isSubmitting}
              className="cursor-pointer px-6 py-3 bg-indigo-800 text-white font-semibold rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            />
          </motion.div>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;