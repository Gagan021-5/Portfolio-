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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("🚀 Message sent successfully!", { position: "top-right" });
        reset();
      } else throw new Error("Failed to send");
    } catch (error) {
      toast.error("❌ Failed to send message. Try again.", { position: "top-right" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(99, 102, 241, 0.6)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      id="contact"
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >

    
      <ToastContainer />

      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent mb-4"
        variants={headerVariants}
      >
        Contact Me
       </motion.h1>

      <motion.p
        className="text-gray-400 text-center max-w-2xl mb-10 leading-relaxed"
        variants={itemVariants}
      >
        Have a project in mind, a collaboration idea, or just want to say hi?
        Drop me a message — I’d love to hear from you.
      </motion.p>

      <motion.div
        className="w-full max-w-2xl bg-gradient-to-b from-[#14184b]/90 to-[#0f1236]/90 border border-indigo-400/20 rounded-2xl shadow-[0_0_25px_rgba(99,102,241,0.2)] backdrop-blur-xl p-8 relative z-10"
        variants={itemVariants}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
     
          <motion.div variants={itemVariants}>
            <label className="text-gray-300 font-medium mb-2 block">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="h-12 w-full bg-[#1a1e3f]/70 rounded-xl text-white px-4 outline-none  transition-all"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </motion.div>

  
          <motion.div variants={itemVariants}>
            <label className="text-gray-300 font-medium mb-2 block">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="h-12 w-full bg-[#1a1e3f]/70 rounded-xl text-white px-4 outline-none transition-all"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </motion.div>

     
          <motion.div variants={itemVariants}>
            <label className="text-gray-300 font-medium mb-2 block">
              Your Message
            </label>
            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: { value: 5, message: "At least 5 characters" },
              })}
              className="h-40 w-full bg-[#1a1e3f]/70 rounded-xl text-white p-4 outline-none focus:ring-2 transition-all resize-none"
              placeholder="Drop your message here..."
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
              value={isSubmitting ? "Sending..." : "Send Message ✉️"}
              disabled={isSubmitting}
              className="cursor-pointer px-8 py-3 bg-gradient-to-r from-indigo-800 text-white font-semibold rounded-xl 0 transition-all duration-300 disabled:opacity-50 "
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
