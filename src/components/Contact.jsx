import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFire } from "react-icons/fa";
import { HiOutlineLightningBolt } from "react-icons/hi";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const into = (i=0) => ({
  initial:{opacity:0,y:28},
  whileInView:{opacity:1,y:0},
  viewport:{once:true},
  transition:{duration:.65,delay:i*.08,ease:[.16,1,.3,1]},
});



/* ══════════════════════════════════════════
   SERVICES SECTION
══════════════════════════════════════════ */
const services = [
  { e:"🏗️", t:"Full Stack Web Apps",   d:"End-to-end apps — Spring Boot backend, React frontend, deployed & monitored.", c:"#FFDE59", cl:"#FFFBDD" },
  { e:"⚡", t:"REST API Development",   d:"Secure, documented APIs with JWT, Spring Security and OpenAPI standards.",     c:"#FF6B9D", cl:"#FFF0F5" },
  { e:"🎨", t:"React UI Interfaces",    d:"Pixel-perfect responsive frontends with smooth animations and great UX.",       c:"#3DD6A3", cl:"#EAFAF5" },
  { e:"🔍", t:"Bug Fixes & Optimize",   d:"Performance audits, memory leak fixing, and query optimization at scale.",     c:"#FFDE59", cl:"#FFFBDD" },
  { e:"☁️", t:"Deployment & DevOps",    d:"Docker, CI/CD pipelines, and cloud deployment on Vercel, Netlify or AWS.",    c:"#FF6B9D", cl:"#FFF0F5" },
  { e:"🗄️", t:"Database Architecture", d:"Schema design, indexing, migrations and query optimization for SQL/NoSQL.",   c:"#3DD6A3", cl:"#EAFAF5" },
];

function ServicesSection() {
  return (
    <section id="services" className="sec-alt">
      <div className="wrap">
        <motion.div {...into(0)} className="mb-14">
          <p className="badge">💡 WHAT I OFFER</p>
          <h2 className="h-lg">Services <span className="hp">I Provide</span></h2>
          <p className="text-gray-500 max-w-xl">
            From idea to production — full ownership of whatever you need built.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={i} {...into(i*.07)} className="card-pop card group p-7 cursor-default">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: s.cl }}>
                {s.e}
              </div>
              <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Syne,sans-serif" }}>{s.t}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.d}</p>
              <div className="mt-5 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                style={{ background: s.c }} />
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
  { icon: <FaEnvelope size={18}/>, label:"Email",    value:"rajpootashishd@gmail.com",           href:"mailto:rajpootashishd@gmail.com",     c:"#FFDE59", cl:"#FFFBDD" },
  { icon: <FaPhone    size={16}/>, label:"Phone",    value:"+91 9691207533",                      href:"tel:+919691207533",                   c:"#3DD6A3", cl:"#EAFAF5" },
  { icon: <FaLinkedin size={18}/>, label:"LinkedIn", value:"linkedin.com/in/itzashu08",           href:"https://linkedin.com/in/itzashu08",   c:"#FF6B9D", cl:"#FFF0F5" },
  { icon: <FaGithub   size={18}/>, label:"GitHub",   value:"github.com/ashuuu08",                href:"https://github.com/ashuuu08",         c:"#FFDE59", cl:"#FFFBDD" },
];

function ContactSection() {
  const { register, handleSubmit, reset, formState:{ errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/bwnnzkma", data);
      toast.success("Sent! I'll get back to you soon 🎉");
      reset();
    } catch {
      toast.error("Couldn't send. Please try again.");
    }
  };

  return (
    <section id="contact" className="sec">
      <div className="wrap">
        <motion.div {...into(0)} className="mb-14">
          <p className="badge">📬 CONTACT</p>
          <h2 className="h-lg">Let's <span className="hy">Build Together</span></h2>
          <p className="text-gray-500 max-w-xl">
            Open to full-stack roles, freelance contracts, and interesting projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
          {/* info cards */}
          <motion.div {...into(.1)} className="space-y-3">
            {contactLinks.map((c,i)=>(
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
                className="card flex items-center gap-4 p-5 group hover:-translate-x-1 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                  style={{background:c.cl}}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{c.label}</p>
                  <p className="font-semibold text-gray-800 text-sm">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="card p-6 mt-4" style={{background:"linear-gradient(135deg,#FFFBDD,#FFF0F5)",borderColor:"#FFDE59"}}>
              <p className="font-bold text-gray-900 mb-1">🟢 Available for Hire</p>
              <p className="text-sm text-gray-600">Full Stack / Backend roles. Remote, Hybrid or Relocation. Freelance contracts welcome.</p>
            </div>
          </motion.div>

          {/* form */}
          <motion.div {...into(.2)} className="card p-8">
            <h3 className="font-bold text-gray-900 text-lg mb-6" style={{fontFamily:"Syne,sans-serif"}}>Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {[
                { name:"name",  label:"Your Name",     type:"text",  placeholder:"John Doe" },
                { name:"email", label:"Email Address",  type:"email", placeholder:"john@example.com" },
              ].map(f=>(
                <div key={f.name}>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{f.label}</label>
                  <input {...register(f.name,{required:true})} type={f.type} placeholder={f.placeholder}
                    className="w-full px-5 py-3.5 rounded-2xl border text-sm font-medium text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 transition-all bg-white"
                    style={{borderColor:errors[f.name]?"var(--p)":"var(--bdr)"}} />
                </div>
              ))}
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                <textarea {...register("message",{required:true})} rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-5 py-3.5 rounded-2xl border text-sm font-medium text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 resize-none transition-all bg-white"
                  style={{borderColor:errors.message?"var(--p)":"var(--bdr)"}} />
              </div>
              <button type="submit" disabled={isSubmitting} className="btn btn-y w-full justify-center disabled:opacity-60">
                {isSubmitting ? "Sending…" : "Send Message →"}
              </button>
            </form>
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
