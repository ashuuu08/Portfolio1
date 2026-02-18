import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPaperPlane, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

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
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-blue-500" />,
      label: "Phone",
      value: "+91 9691207533",
      link: "tel:+919691207533"
    },
    {
      icon: <FaEnvelope className="text-indigo-500" />,
      label: "Email",
      value: "rajpootashishd@gmail.com",
      link: "mailto:rajpootashishd@gmail.com"
    },
    {
      icon: <FaLinkedin className="text-blue-600" />,
      label: "LinkedIn",
      value: "itzashu08",
      link: "https://www.linkedin.com/in/itzashu08"
    },
    {
      icon: <FaGithub className="text-slate-400" />,
      label: "GitHub",
      value: "ashuuu08",
      link: "https://github.com/ashuuu08"
    }
  ];

  return (
    <section
      name="Contact"
      className="max-w-7xl mx-auto px-6 md:px-12 py-24"
    >
      <div className="space-y-16">
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Get In Touch
          </motion.h2>
          <p className="text-slate-500 max-w-2xl">
            Have a project in mind or just want to say hi? Feel free to reach out.
            I'm always open to discussing new opportunities and creative ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:translate-x-2 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-blue-500/10 transition-all">
                  {info.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{info.label}</div>
                  <div className="text-white font-medium">{info.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card p-10 rounded-3xl space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Name</label>
                  <input
                    {...register("name", { required: true })}
                    placeholder="John Doe"
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-colors text-white"
                  />
                  {errors.name && <span className="text-red-500 text-xs ml-1 font-bold italic">Required</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Email</label>
                  <input
                    {...register("email", { required: true })}
                    placeholder="john@example.com"
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-colors text-white"
                  />
                  {errors.email && <span className="text-red-500 text-xs ml-1 font-bold italic">Required</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-500/50 transition-colors text-white resize-none"
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs ml-1 font-bold italic">Required</span>}
              </div>

              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-3"
              >
                Send Message
                <FaPaperPlane className="text-sm opacity-80" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
