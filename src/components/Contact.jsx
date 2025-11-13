import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/bwnnzkma", data);
      toast.success("✅ Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to send message. Try again.");
    }
  };

  return (
    <section
      id="Contact"
      className="bg-gradient-to-br from-[#0a0a1a]  to-[#000006] text-gray-100 py-12 px-6 flex flex-col items-center justify-center"
    >
           <motion.h1
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-4xl sm:text-5xl font-extrabold mb-4 text-center tracking-wide"
           >
             for <span className="text-blue-500">Contact</span>
           </motion.h1>  
      <p className="text-gray-400 mb-10 text-center">
        Let’s collaborate or discuss opportunities — drop a quick message below.
      </p>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#111] border border-gray-800/80 rounded-2xl p-12 md:w-[450px] w-full shadow-xl backdrop-blur-lg
        hover:border-indigo-500/50 transition-all duration-500"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name */}
        <div className="flex flex-col mb-5">
          <label className="text-gray-300 mb-2 font-medium">Full Name</label>
          <input
            {...register("name", { required: true })}
            placeholder="Enter your full name"
            className="bg-[#0f0f16] text-gray-200 px-4 py-3 rounded-lg outline-none border border-gray-700 focus:border-indigo-500 transition"
          />
          {errors.name && (
            <span className="text-red-400 text-sm mt-1">This field is required</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col mb-5">
          <label className="text-gray-300 mb-2 font-medium">Email</label>
          <input
            {...register("email", { required: true })}
            placeholder="Enter your email"
            className="bg-[#0f0f16] text-gray-200 px-4 py-3 rounded-lg outline-none border border-gray-700 focus:border-indigo-500 transition"
          />
          {errors.email && (
            <span className="text-red-400 text-sm mt-1">This field is required</span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col mb-6">
          <label className="text-gray-300 mb-2 font-medium">Message</label>
          <textarea
            {...register("message", { required: true })}
            rows="4"
            placeholder="Type your message..."
            className="bg-[#0f0f16] text-gray-200 px-4 py-3 rounded-lg outline-none border border-gray-700 focus:border-indigo-500 transition resize-none"
          ></textarea>
          {errors.message && (
            <span className="text-red-400 text-sm mt-1">This field is required</span>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-indigo-600/30 transition"
        >
          <FaPaperPlane /> Send Message
        </motion.button>
      </motion.form>

      <p className="mt-8 text-sm text-gray-500">
        I’ll get back to you within 24 hours 🚀
      </p>
    </section>
  );
}

export default Contact;
