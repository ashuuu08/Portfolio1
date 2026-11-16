import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaCopy, FaCheck } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useCinematicScroll } from "../animations/useCinematicScroll";

const contactLinks = [
  {
    icon: <FaEnvelope className="text-cyan-400" size={16} />,
    label: "Email Directly",
    value: "rajpootashishd@gmail.com",
    href: "mailto:rajpootashishd@gmail.com",
    isCopyable: true,
  },
  {
    icon: <FaPhone className="text-emerald-400" size={16} />,
    label: "Phone / WhatsApp",
    value: "+91 9691207533",
    href: "tel:+919691207533",
  },
  {
    icon: <FaLinkedin className="text-sky-400" size={16} />,
    label: "LinkedIn Profile",
    value: "linkedin.com/in/itzashu08",
    href: "https://linkedin.com/in/itzashu08",
  },
  {
    icon: <FaGithub className="text-gray-200" size={16} />,
    label: "GitHub Repositories",
    value: "github.com/ashuuu08",
    href: "https://github.com/ashuuu08",
  },
];

export default function Scene7Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const containerRef = useCinematicScroll((ctx, isDesktop) => {
    const gsap = window.gsap;
    if (!gsap || !window.ScrollTrigger) return;

    gsap.fromTo(
      ".contact-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".contact-content-block",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".contact-grid-wrap",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/bwnnzkma", data);
      toast.success("Message dispatched successfully. I will get back to you promptly!");
      reset();
    } catch {
      toast.error("Transmission failed. Please reach out directly via email.");
    }
  };

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("rajpootashishd@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" ref={containerRef} className="sec-cinematic bg-[#05070B] pb-16">
      <div className="ambient-orb w-[500px] h-[500px] bg-cyan-500/10 bottom-0 left-1/2 -translate-x-1/2" />

      <div className="wrap relative z-10">
        {/* Header */}
        <div className="contact-header max-w-3xl mb-16 text-center sm:text-left">
          <div className="badge-cinematic mb-4">Scene 07 — Cinematic Finale</div>
          <h2
            className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Initiate Contact. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              Let's Build Something Resilient.
            </span>
          </h2>
          <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            Currently open to high-impact software engineering roles, enterprise backend development, 
            and select full-stack consulting projects.
          </p>
        </div>

        {/* 2-Column Layout: Direct Channels & Interactive Contact Form */}
        <div className="contact-grid-wrap grid lg:grid-cols-5 gap-8 sm:gap-12 max-w-6xl">
          {/* Direct channels (2 cols) */}
          <div className="contact-content-block lg:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Direct Channels
            </h3>
            <p className="text-xs text-gray-400 font-mono mb-4">
              Response SLA: Typically within 12–24 hours.
            </p>

            <div className="space-y-3">
              {contactLinks.map((link, i) => (
                <div
                  key={i}
                  className="card-cinematic p-4 flex items-center justify-between border-white/10 group hover:border-cyan-500/30 transition-all"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 flex-1 min-w-0"
                  >
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                      {link.icon}
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                        {link.label}
                      </div>
                      <div className="text-sm font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors truncate">
                        {link.value}
                      </div>
                    </div>
                  </a>

                  {link.isCopyable && (
                    <button
                      onClick={copyEmail}
                      className="ml-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-300 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copiedEmail ? <FaCheck className="text-emerald-400" size={13} /> : <FaCopy size={13} />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Status Pill */}
            <div className="mt-8 p-5 rounded-2xl bg-[#090E18] border border-cyan-500/20 text-xs font-mono text-gray-300 leading-relaxed">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Status: Immediate Availability</span>
              </div>
              <p className="text-gray-400 text-[11px]">
                Seeking Full-Stack, Java Backend, or Systems Engineering roles. Ready for immediate technical screening.
              </p>
            </div>
          </div>

          {/* Form (3 cols) */}
          <div className="contact-content-block lg:col-span-3">
            <div className="card-cinematic p-6 sm:p-8 border-white/10">
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Transmit Message
              </h3>
              <p className="text-xs text-gray-400 font-mono mb-6">
                Direct endpoint delivery powered by secure transmission hook.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      {...register("name", { required: true })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all font-sans"
                    />
                    {errors.name && <span className="text-[11px] text-red-400 font-mono mt-1 block">Name required</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all font-sans"
                    />
                    {errors.email && <span className="text-[11px] text-red-400 font-mono mt-1 block">Valid email required</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                    Subject / Project Scope
                  </label>
                  <input
                    type="text"
                    placeholder="Full Stack Opportunity / Microservice Architecture Consulting"
                    {...register("subject")}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-400 mb-1.5 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project, timeline, or engineering opportunity..."
                    {...register("message", { required: true })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] transition-all font-sans resize-none"
                  />
                  {errors.message && <span className="text-[11px] text-red-400 font-mono mt-1 block">Message required</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3.5 text-sm font-semibold tracking-wider uppercase font-mono disabled:opacity-50"
                >
                  <FaPaperPlane size={13} className={isSubmitting ? "animate-bounce" : ""} />
                  <span>{isSubmitting ? "Transmitting..." : "Send Secure Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Minimal Cinematic Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>
            © {new Date().getFullYear()} Ashish Rathour. All systems operational.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-cyan-400">GSAP • React 18 • Vite</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

