import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload, FaComments } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import resume from "../assets/ashish_resum.pdf";

/* ── helpers ───────────────────────────── */
const stagger = {
  container: { hidden:{}, show:{ transition:{ staggerChildren:.12 }}},
  item: { hidden:{ opacity:0, y:30 }, show:{ opacity:1, y:0, transition:{ duration:.65, ease:[.16,1,.3,1] }}},
};

/* rotating rings behind name */
const RingDeco = () => (
  <div className="absolute -inset-8 pointer-events-none">
    <div className="absolute inset-0 border-2 border-dashed border-[#FFDE59]/30 rounded-full spin-slow" />
    <div className="absolute inset-4 border border-[#FF6B9D]/20 rounded-full spin-slow" style={{animationDirection:'reverse',animationDuration:'12s'}} />
  </div>
);

/* floating icon chip */
const Chip = ({ emoji, label, style, cls="" }) => (
  <motion.div animate={{y:[0,-10,0]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut",...style}}
    className={`absolute card px-4 py-2 flex items-center gap-2 shadow-xl text-sm font-semibold z-20 ${cls}`}>
    <span className="text-xl">{emoji}</span> {label}
  </motion.div>
);

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* ── full-bleed bg artwork ── */}
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] blob opacity-20"
        style={{background:"radial-gradient(circle,#FFDE59 0%,transparent 75%)"}} />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] blob opacity-15"
        style={{background:"radial-gradient(circle,#FF6B9D 0%,transparent 75%)",animationDelay:"4s"}} />
      <div className="absolute -bottom-32 left-1/3 w-[400px] h-[400px] blob opacity-15"
        style={{background:"radial-gradient(circle,#3DD6A3 0%,transparent 75%)",animationDelay:"8s"}} />

      <div className="wrap w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-10 lg:pt-0">

          {/* ── LEFT ── */}
          <motion.div variants={stagger.container} initial="hidden" animate="show" className="space-y-7 relative z-20 flex-1 w-full max-w-2xl">

            {/* status badge */}
            <motion.div variants={stagger.item}>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold"
                style={{background:"rgba(61,214,163,.14)",border:"1.5px solid #3DD6A3",color:"#1CB887"}}>
                <HiSparkles className="text-[#3DD6A3]" /> Open to Full-Time Roles
              </span>
            </motion.div>

            {/* name */}
            <motion.div variants={stagger.item} className="space-y-2">
              <h1 className="h-xl text-[#0D0D0D]">
                Hey, I'm<br />
                <span className="relative inline-block">
                  <span style={{color:"var(--yh)"}}>Ashish</span>
                </span>{" "}
                <span className="cursor">Rathour</span>
              </h1>
              <div className="text-2xl md:text-3xl font-bold text-gray-400 flex flex-wrap items-center gap-3">
                <span>Full Stack</span>
                <ReactTyped
                  strings={["Developer ⚡", "Engineer 🛠️", "Architect 🏗️", "Problem Solver 🔥"]}
                  typeSpeed={60} backSpeed={35} loop
                  style={{color:"var(--ph)"}}
                />
              </div>
            </motion.div>

            {/* tagline */}
            <motion.p variants={stagger.item} className="text-gray-500 text-lg max-w-xl leading-relaxed">
              I build <span className="font-bold text-gray-800">fast, scalable web applications</span> using{" "}
              <span style={{color:"var(--ph)"}} className="font-bold">Java · Spring Boot</span>,{" "}
              <span style={{color:"var(--yh)"}} className="font-bold">Node.js · Express</span> and{" "}
              <span style={{color:"var(--mh)"}} className="font-bold">React</span>. 
              Production-ready code, clean architecture, real-world impact.
            </motion.p>

            {/* skill marquee */}
            <motion.div variants={stagger.item} className="overflow-hidden rounded-2xl border py-3 max-w-lg" style={{borderColor:"var(--bdr)",background:"var(--bg2)"}}>
              <div className="flex marquee-track gap-3 w-max">
                {["Java","Spring Boot","React","Node.js","PostgreSQL","Supabase","MySQL","REST APIs","Hibernate","Git","Docker"].concat(
                  ["Java","Spring Boot","React","Node.js","PostgreSQL","Supabase","MySQL","REST APIs","Hibernate","Git","Docker"]
                ).map((t,i)=>(
                  <span key={i} className="whitespace-nowrap text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl"
                    style={{background:`${i%3===0?"#FFDE59":i%3===1?"#FFD6E0":"#D4F5E9"}`,color:"var(--ink)"}}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={stagger.item} className="flex flex-wrap gap-3">
              <button onClick={()=>document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})} className="btn btn-y group">
                View Projects <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href={resume} download="Ashish_Rathour_Resume.pdf" className="btn btn-ghost">
                <FaDownload /> Resume
              </a>
              <button onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})} className="btn btn-p">
                <FaComments /> Hire Me
              </button>
            </motion.div>

            {/* socials */}
            <motion.div variants={stagger.item} className="flex items-center gap-4 hidden sm:flex">
              {[
                {icon:<FaGithub size={18}/>,href:"https://github.com/ashuuu08",label:"GitHub"},
                {icon:<FaLinkedin size={18}/>,href:"https://linkedin.com/in/itzashu08",label:"LinkedIn"},
              ].map((s,i)=>(
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  className="w-11 h-11 rounded-2xl flex items-center justify-center border font-medium text-gray-500 hover:text-gray-900 hover:-translate-y-1 transition-all glow-y"
                  style={{borderColor:"var(--bdr)",background:"var(--bg2)"}}>
                  {s.icon}
                </a>
              ))}
              <span className="text-xs text-gray-400 ml-2">/ Find me online</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — avatar / visual ── */}
          <motion.div initial={{opacity:0,scale:.88}} animate={{opacity:1,scale:1}} transition={{duration:.9,ease:[.16,1,.3,1], delay: 0.2}}
            className="flex-1 w-full max-w-[500px] flex items-center justify-center relative min-h-[450px] z-10 scale-90 sm:scale-100 lg:scale-[1.1] xl:scale-[1.15] lg:mr-8 xl:mr-16">

            {/* outer ring decoration */}
            <RingDeco />

            {/* ── SYSTEM CLUSTER VISUAL ── */}
            <div className="relative w-full max-w-[450px] h-[450px] z-10 shadow-2xl">
              
              {/* Main Dashboard Card */}
              <motion.div 
                animate={{y:[-5, 5, -5]}} transition={{duration:6, repeat:Infinity, ease:"easeInOut"}}
                whileHover={{ scale: 1.03, zIndex: 50 }}
                className="absolute top-1/2 right-[10px] -translate-y-1/2 w-[240px] card p-5 shadow-2xl bg-white/95 backdrop-blur-xl border-gray-200 z-20 cursor-default scale-90"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-[#3DD6A3] animate-pulse"/>
                  <div className="text-xs font-bold text-gray-800 tracking-widest uppercase">System Status</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium">API Gateway</span>
                    <span className="font-bold text-[#3DD6A3] bg-[#EAFAF5] px-2 py-0.5 rounded">OK</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium">Database (SQL)</span>
                    <span className="font-bold text-[#FF6B9D] bg-[#FFF0F5] px-2 py-0.5 rounded">4ms</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-medium">Auth Server</span>
                    <span className="font-bold text-[#FFDE59] bg-[#FFFBDD] px-2 py-0.5 rounded text-[#C49A00]">21ms</span>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-bold uppercase">Uptime</span>
                  <span className="text-sm font-black text-gray-900" style={{fontFamily:"Space Grotesk,sans-serif"}}>99.99%</span>
                </div>
              </motion.div>

              {/* API Latency Chart */}
              <motion.div 
                animate={{y:[5, -5, 5]}} transition={{duration:5, repeat:Infinity, ease:"easeInOut"}}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                className="absolute top-[15px] right-[40px] w-36 card p-4 shadow-xl bg-white/95 backdrop-blur-xl border-[#FFDE59] border-2 z-10 cursor-default scale-90"
              >
                <div className="text-[10px] font-bold text-gray-400 mb-3 tracking-widest">REQ L/SEC</div>
                <div className="flex items-end gap-1.5 h-14">
                  {[40, 70, 45, 90, 60, 30].map((h, i) => (
                    <motion.div key={i}
                      animate={{height: [`${h}%`, `${h+20}%`, `${h}%`]}} transition={{duration:2, delay:i*0.2, repeat:Infinity}}
                      className="w-full rounded-sm" style={{background: "#FFDE59"}} />
                  ))}
                </div>
              </motion.div>

              {/* Terminal Snippet */}
              <motion.div 
                animate={{y:[-4, 4, -4]}} transition={{duration:7, repeat:Infinity, ease:"easeInOut"}}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                className="absolute bottom-[20px] left-[15px] w-56 p-4 rounded-2xl shadow-xl border border-gray-800 font-mono text-[10px] leading-relaxed z-30 cursor-default scale-95"
                style={{background: "#0D0D0D", color: "#3DD6A3"}}
              >
                <p className="text-gray-500 mb-2">~/portfolio/system $</p>
                <ReactTyped 
                  strings={[
                    "npm run deploy<br/>Building client...<br/>Success 🚀",
                    "mvn spring-boot:run<br/>Tomcat started on port 8080<br/>Started Application in 2.1s"
                  ]} 
                  typeSpeed={30} backSpeed={10} loop 
                />
              </motion.div>

              {/* HANDWRITTEN TORN PAPER NOTE */}
              <motion.div
                drag
                dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
                whileHover={{ zIndex: 50, scale: 1.05 }}
                className="absolute top-[20px] left-[30px] z-40 torn-paper-wrap w-52 cursor-grab active:cursor-grabbing scale-[0.85]"
                style={{ rotate: '-8deg' }}
              >
                <div className="torn-paper torn-paper-lines py-5 pt-6 px-5 pl-8 shadow-inner">
                  <div className="font-hand text-[#111] text-[20px] leading-[1.3] -ml-1 mt-1 font-medium">
                    <span className="text-3xl inline-block mb-1">👋</span> Hey there! <br/>
                    I'm Ashish.<br/><br/>
                    I love architecting<br/>
                    <span className="text-[#00A170] font-bold">bulletproof</span> backends & <br/>
                    building things that <br/>
                    actually matter.<br/><br/>
                    Let's build something! 🔥
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* ── STATS BAR ── */}
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.8,duration:.6}}
          className="grid grid-cols-3 gap-4 mt-20 max-w-lg">
          {[
            {n:"10+",l:"Projects Built",c:"var(--y)"},
            {n:"150+",l:"DSA Solved",c:"var(--p)"},
            {n:"2+",l:"Internships",c:"var(--m)"},
          ].map((s,i)=>(
            <div key={i} className="card p-5 text-center hover:scale-105 transition-transform">
              <div className="text-3xl font-black" style={{fontFamily:"Syne,sans-serif",color:s.c==="var(--m)"?"var(--mh)":s.c==="var(--p)"?"var(--ph)":"var(--yh)"}}>{s.n}</div>
              <div className="text-xs text-gray-400 font-medium mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
