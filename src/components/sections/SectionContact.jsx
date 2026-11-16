import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaFileAlt, FaCopy, FaCheck } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { profileData } from "../../data/portfolioData";
import { useCinematicScroll } from "../../animations/useCinematicScroll";

export default function SectionContact() {
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
      ".contact-cell",
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/bwnnzkma", data);
      toast.success("Message transmitted successfully. I will get back to you promptly!");
      reset();
    } catch {
      toast.error("Transmission error. Please email directly at rajpootashishd@gmail.com");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopiedEmail(true);
    toast.success("Email address copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" ref={containerRef} className="sec-industrial bg-[#111111] pb-16">
      <div className="wrap">
        
        {/* Section Header */}
        <div className="contact-header max-w-4xl mb-16">
          <div className="badge-acid mb-4">
            SECTION 08 // DIRECT DISPATCH
          </div>
          <h2
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F4EF] tracking-tight leading-[1.04]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            LET'S BUILD <br />
            <span className="text-[#E8FF36]">SOMETHING THAT WORKS.</span>
          </h2>
          <p className="mt-6 text-[#929292] text-base sm:text-lg leading-relaxed max-w-2xl">
            Currently open to high-impact Java engineering positions, backend microservice architecture, and production full-stack developments.
          </p>
        </div>

        {/* 2-Column Industrial Contact Layout */}
        <div className="contact-grid grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Direct Communication Channels (5 cols) */}
          <div className="contact-cell lg:col-span-5 space-y-6">
            <h3
              className="text-xl font-bold text-[#F5F4EF]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Direct Communication
            </h3>
            <p className="text-xs font-mono text-[#929292]">
              SLA: Standard response within 12–24 business hours.
            </p>

            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <div className="card-industrial p-4 flex items-center justify-between border-white/10 group">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="flex items-center gap-3 text-[#F5F4EF] hover:text-[#E8FF36] transition-colors truncate"
                >
                  <div className="p-2.5 rounded bg-[#161616] border border-white/5 text-[#E8FF36]">
                    <FaEnvelope size={14} />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-[#929292] block uppercase">EMAIL (PRIMARY)</span>
                    <span className="truncate">{profileData.contact.email}</span>
                  </div>
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 text-[#929292] hover:text-[#E8FF36] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <FaCheck className="text-[#E8FF36]" size={12} /> : <FaCopy size={12} />}
                </button>
              </div>

              {/* Phone */}
              <a
                href={`tel:${profileData.contact.phone}`}
                className="card-industrial p-4 flex items-center gap-3 text-[#F5F4EF] hover:text-[#E8FF36] transition-colors block border-white/10"
              >
                <div className="p-2.5 rounded bg-[#161616] border border-white/5 text-[#E8FF36]">
                  <FaPhone size={14} />
                </div>
                <div>
                  <span className="text-[10px] text-[#929292] block uppercase">TELEPHONE / WHATSAPP</span>
                  <span>{profileData.contact.phone}</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-industrial p-4 flex items-center gap-3 text-[#F5F4EF] hover:text-[#E8FF36] transition-colors block border-white/10"
              >
                <div className="p-2.5 rounded bg-[#161616] border border-white/5 text-[#E8FF36]">
                  <FaLinkedin size={14} />
                </div>
                <div>
                  <span className="text-[10px] text-[#929292] block uppercase">LINKEDIN NETWORK</span>
                  <span>linkedin.com/in/itzashu08</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-industrial p-4 flex items-center gap-3 text-[#F5F4EF] hover:text-[#E8FF36] transition-colors block border-white/10"
              >
                <div className="p-2.5 rounded bg-[#161616] border border-white/5 text-[#E8FF36]">
                  <FaGithub size={14} />
                </div>
                <div>
                  <span className="text-[10px] text-[#929292] block uppercase">GITHUB REPOSITORIES</span>
                  <span>github.com/ashuuu08</span>
                </div>
              </a>
            </div>

            {/* Resume Callout Card */}
            <div className="p-5 rounded bg-[#181818] border border-[#E8FF36]/30 flex items-center justify-between font-mono text-xs">
              <div>
                <span className="text-[#E8FF36] font-bold block mb-0.5">FULL RESUME ARCHIVE</span>
                <span className="text-[#929292] text-[11px]">Updated 2026 Curriculum Vitae</span>
              </div>
              <a
                href={profileData.contact.resume}
                download="Ashish_Rathour_Resume.pdf"
                className="btn-acid py-2 px-3 text-[11px]"
              >
                <FaFileAlt size={10} />
                <span>DOWNLOAD</span>
              </a>
            </div>
          </div>

          {/* Secure Transmission Form (7 cols) */}
          <div className="contact-cell lg:col-span-7">
            <div className="card-industrial p-7 sm:p-8 border-white/10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08] font-mono text-xs">
                <span className="text-[#E8FF36] font-bold">
                  TRANSMISSION TERMINAL // SECURE ENDPOINT
                </span>
                <span className="text-[#929292]">GETFORM.IO INTEGRATION</span>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-mono text-xs">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#929292] mb-1.5 uppercase text-[10px]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      {...register("name", { required: true })}
                      className="w-full px-4 py-3 rounded bg-[#111111] border border-white/10 text-[#F5F4EF] focus:outline-none focus:border-[#E8FF36] font-sans text-sm transition-colors"
                    />
                    {errors.name && <span className="text-[#E8FF36] text-[10px] mt-1 block">Required</span>}
                  </div>

                  <div>
                    <label className="block text-[#929292] mb-1.5 uppercase text-[10px]">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full px-4 py-3 rounded bg-[#111111] border border-white/10 text-[#F5F4EF] focus:outline-none focus:border-[#E8FF36] font-sans text-sm transition-colors"
                    />
                    {errors.email && <span className="text-[#E8FF36] text-[10px] mt-1 block">Valid email required</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-[#929292] mb-1.5 uppercase text-[10px]">
                    Subject / Project Scope
                  </label>
                  <input
                    type="text"
                    placeholder="Java Backend Role / Distributed Systems Consultation"
                    {...register("subject")}
                    className="w-full px-4 py-3 rounded bg-[#111111] border border-white/10 text-[#F5F4EF] focus:outline-none focus:border-[#E8FF36] font-sans text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#929292] mb-1.5 uppercase text-[10px]">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your engineering requirements, team role, or project..."
                    {...register("message", { required: true })}
                    className="w-full px-4 py-3 rounded bg-[#111111] border border-white/10 text-[#F5F4EF] focus:outline-none focus:border-[#E8FF36] font-sans text-sm resize-none transition-colors"
                  />
                  {errors.message && <span className="text-[#E8FF36] text-[10px] mt-1 block">Message required</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-acid w-full py-4 text-xs font-mono font-bold tracking-wider disabled:opacity-50"
                >
                  <FaPaperPlane size={11} className={isSubmitting ? "animate-bounce" : ""} />
                  <span>{isSubmitting ? "TRANSMITTING TO ENDPOINT..." : "TRANSMIT MESSAGE"}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Minimal Swiss Colophon Footer */}
        <footer className="mt-24 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#929292]">
          <div>
            © {new Date().getFullYear()} ASHISH RATHOUR. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#E8FF36]">MODERN INDUSTRIAL ARCHITECTURE</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-[#929292] hover:text-[#E8FF36] transition-colors"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </footer>

      </div>
    </section>
  );
}

