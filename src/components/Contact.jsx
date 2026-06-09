import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const into = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
});

/* ══════════════════════════════════════════
   SERVICES SECTION
══════════════════════════════════════════ */
const services = [
  { t: "Full Stack Web Apps", d: "End-to-end applications built with Spring Boot, Node.js, and React. Production-ready and monitored." },
  { t: "REST API Development", d: "Secure, scalable APIs using JWT, Spring Security, and OpenAPI standards." },
  { t: "Frontend Architecture", d: "Pixel-perfect responsive interfaces with React & Next.js focusing on Core Web Vitals." },
  { t: "Performance Audits", d: "Memory leak fixing, bundle size reduction, and query optimization at scale." },
  { t: "DevOps & Cloud", d: "Docker containerization, CI/CD pipelines, and cloud deployments on AWS/Vercel." },
  { t: "Database Design", d: "Schema design, migrations, and indexing strategies for SQL and NoSQL databases." },
];

function ServicesSection() {
  return (
    <section id="services" className="sec border-b border-gray-200">
      <div className="wrap">
        <motion.div {...into(0)} className="mb-16">
          <p className="badge">Services</p>
          <h2 className="text-5xl md:text-6xl font-black text-black" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}>
            Capabilities.
          </h2>
          <p className="text-gray-500 max-w-xl text-lg mt-6">
            Technical expertise delivered from system architecture to pixel-perfect deployment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} {...into(i * 0.1)} className="group p-8 border border-gray-200 bg-white hover:border-black transition-colors rounded-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <h3 className="font-bold text-black text-xl mb-3 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>{s.t}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   CONTACT SECTION
══════════════════════════════════════════ */
const contactLinks = [
  { icon: <FaEnvelope size={18} />, label: "Email", value: "rajpootashishd@gmail.com", href: "mailto:rajpootashishd@gmail.com" },
  { icon: <FaPhone size={18} />, label: "Phone", value: "+91 9691207533", href: "tel:+919691207533" },
  { icon: <FaLinkedin size={18} />, label: "LinkedIn", value: "linkedin.com/in/itzashu08", href: "https://linkedin.com/in/itzashu08" },
  { icon: <FaGithub size={18} />, label: "GitHub", value: "github.com/ashuuu08", href: "https://github.com/ashuuu08" },
];

function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/bwnnzkma", data);
      toast.success("Message delivered.");
      reset();
    } catch {
      toast.error("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="sec-alt">
      <div className="wrap">
        <motion.div {...into(0)} className="mb-16">
          <p className="badge">Contact</p>
          <h2 className="text-5xl md:text-6xl font-black text-black" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}>
            Get in touch.
          </h2>
          <p className="text-gray-500 max-w-xl text-lg mt-6">
            Open to full-time roles, freelance contracts, and architectural consultations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 max-w-6xl">
          {/* info columns */}
          <motion.div {...into(0.1)} className="md:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
              {contactLinks.map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-5 p-4 border border-gray-200 rounded-md bg-white hover:border-black transition-colors group">
                  <div className="text-gray-400 group-hover:text-black transition-colors">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-mono mb-1">{c.label}</p>
                    <p className="font-medium text-black text-sm">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 border border-gray-200 bg-white rounded-md mt-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-black" />
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <p className="font-bold text-black text-sm tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Available for Work</p>
              </div>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">Currently seeking SDE-1 and Full Stack Developer positions globally.</p>
            </div>
          </motion.div>

          {/* form */}
          <motion.div {...into(0.2)} className="md:col-span-3">
            <div className="p-8 md:p-10 border border-gray-200 bg-white rounded-md">
              <h3 className="font-bold text-black text-2xl mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Send an Inquiry</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest font-mono mb-3">{f.label}</label>
                      <input {...register(f.name, { required: true })} type={f.type} placeholder={f.placeholder}
                        className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm font-medium text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors bg-gray-50 focus:bg-white"
                        style={{ borderColor: errors[f.name] ? "red" : undefined }} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest font-mono mb-3">Project Details / Message</label>
                  <textarea {...register("message", { required: true })} rows={5}
                    placeholder="Tell me about your requirements..."
                    className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm font-medium text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none bg-gray-50 focus:bg-white"
                    style={{ borderColor: errors.message ? "red" : undefined }} />
                </div>
                <button type="submit" disabled={isSubmitting} className="btn bg-black text-white hover:bg-gray-800 w-full md:w-auto px-8 py-4 disabled:opacity-50">
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <>
      <ServicesSection />
      <ContactSection />
    </>
  );
}
