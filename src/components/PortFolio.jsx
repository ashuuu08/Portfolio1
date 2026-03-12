import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaCode, FaServer } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiMysql, SiSupabase, SiTailwindcss, SiVercel } from "react-icons/si";
import { HiOutlineArrowRight } from "react-icons/hi";

const into = (i=0) => ({
  initial:{opacity:0,y:28},
  whileInView:{opacity:1,y:0},
  viewport:{once:true},
  transition:{duration:.65,delay:i*.08,ease:[.16,1,.3,1]},
});

/* ── all projects including 2 freelance ── */
const projects = [
  /* ── FREELANCE ── */
  {
    tag:"Freelance Client",
    emoji:"💼",
    title:"AshbitSoft",
    sub:"IT Solutions & Custom Software Company",
    desc:"Designed and delivered a full company website for AshbitSoft — a software consultancy serving startups, SMEs and enterprises with custom web apps, automation & digital transformation.",
    tech:["React","Tailwind CSS","Vite","Netlify"],
    icons:[<FaReact/>,<SiTailwindcss/>,<SiVercel/>],
    live:"https://ashbit.in",
    accent:"#FFDE59",
    accentLight:"#FFFBDD",
    freelance: true,
  },
  {
    tag:"Freelance Client",
    emoji:"🏋️",
    title:"Ashbit Fit",
    sub:"Health & Productivity OS",
    desc:"Built a modern health & fitness SaaS landing page — featuring workout tracking, GPS routes, calories, sleep, mood, tasks and more. Designed for a premium fitness-tech brand.",
    tech:["React","Tailwind CSS","Vite","Vercel"],
    icons:[<FaReact/>,<SiTailwindcss/>,<SiVercel/>],
    live:"https://ashbitfit.vercel.app",
    accent:"#3DD6A3",
    accentLight:"#EAFAF5",
    freelance: true,
  },
  /* ── PERSONAL / INTERNSHIP ── */
  {
    tag:"Deployed",
    emoji:"📋",
    title:"Checklist Delegation",
    sub:"Real-time task management platform",
    desc:"Multi-role real-time task delegation with WhatsApp notifications, live progress tracking and Supabase real-time sync. 50% reduction in team follow-up time.",
    tech:["Node.js","React","Supabase","PostgreSQL"],
    icons:[<FaNodeJs/>,<FaReact/>,<SiSupabase/>,<SiPostgresql/>],
    live:"https://checklist-delegation.netlify.app/",
    code:"https://github.com/ashuuu08",
    accent:"#FF6B9D",
    accentLight:"#FFF0F5",
  },
  {
    tag:"Deployed",
    emoji:"🎓",
    title:"Internship Platform",
    sub:"Enrollment with Razorpay + QR certificates",
    desc:"Secure enrollment system with Razorpay payment gateway, automated QR-verified PDF certificate generation via PDFBox, Spring Security JWT RBAC.",
    tech:["Spring Boot","React","MySQL","Hibernate"],
    icons:[<SiSpringboot/>,<FaReact/>,<SiMysql/>],
    live:"https://internmaker.vercel.app/",
    code:"https://github.com/ashuuu08/internmaker_backend",
    accent:"#FFDE59",
    accentLight:"#FFFBDD",
  },
  {
    tag:"Deployed",
    emoji:"📧",
    title:"Mail Campaign OS",
    sub:"Automated email marketing suite",
    desc:"10+ template email marketing platform, audience segmentation, open-rate analytics & scheduling. Cut manual campaign effort by 60%.",
    tech:["Node.js","React","Supabase","PostgreSQL"],
    icons:[<FaNodeJs/>,<FaReact/>,<SiSupabase/>],
    code:"https://github.com/ashuuu08",
    accent:"#3DD6A3",
    accentLight:"#EAFAF5",
  },
  {
    tag:"Deployed",
    emoji:"🏫",
    title:"Academy Portal",
    sub:"Role-based study material platform",
    desc:"Secure study material hub with admin/student roles, subject management, file preview and download. Deployed on Vercel.",
    tech:["React","Node.js","MySQL"],
    icons:[<FaReact/>,<FaNodeJs/>,<SiMysql/>],
    live:"https://gharhischool.vercel.app/",
    code:"https://github.com/ashuuu08/gharhischool",
    accent:"#FF6B9D",
    accentLight:"#FFF0F5",
  },
  {
    tag:"OSS",
    emoji:"🛒",
    title:"E-Commerce Micro",
    sub:"Microservices shopping platform",
    desc:"Scalable shopping architecture with microservices, product management, cart, JWT auth, and Razorpay payment integration.",
    tech:["Spring Boot","React","JWT","Microservices"],
    icons:[<SiSpringboot/>,<FaReact/>,<SiMysql/>],
    code:"https://github.com/ashuuu08/shopEase-e-Commerce",
    accent:"#FFDE59",
    accentLight:"#FFFBDD",
  },
];

const ProjectCard = ({p, i}) => (
  <motion.article {...into(i*.07)} className={`card card-pop group flex flex-col overflow-hidden relative ${p.freelance?"ring-2":""}`}
    style={p.freelance?{ringColor:p.accent}:{}}>

    {/* freelance star stamp */}
    {p.freelance && (
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black uppercase"
        style={{background:p.accent,color:"#111827",letterSpacing:".5px"}}>
        ⭐ Freelance
      </div>
    )}

    {/* visual header */}
    <div className="relative h-40 flex items-center justify-center text-7xl overflow-hidden"
      style={{background:`linear-gradient(135deg,${p.accentLight},#fff)`}}>
      <span className="group-hover:scale-110 transition-transform duration-500 inline-block">{p.emoji}</span>
      {/* animated corner accent */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 opacity-50"
        style={{background:p.accent}}/>
    </div>

    {/* body */}
    <div className="p-6 flex flex-col flex-grow gap-4">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest" style={{color:p.accent==="var(--y)"||p.accent==="#FFDE59"?"#C49A00":p.accent==="#3DD6A3"?"var(--mh)":"var(--ph)"}}>
          {p.tag}
        </span>
        <h3 className="text-xl font-bold text-gray-900 mt-1 group-hover:text-[#0D0D0D] transition-colors leading-tight" style={{fontFamily:"Syne,sans-serif"}}>
          {p.title}
        </h3>
        <p className="text-xs text-gray-400 font-medium mt-0.5">{p.sub}</p>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{p.desc}</p>

      {/* tech stack */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {p.tech.map((t,j)=>(
          <span key={j} className="px-2.5 py-1 rounded-lg text-xs font-semibold"
            style={{background:p.accentLight,color:"#374151",border:`1px solid ${p.accent}`}}>
            {t}
          </span>
        ))}
      </div>

      {/* action links */}
      <div className="flex items-center gap-3 pt-3 border-t" style={{borderColor:"var(--bdr)"}}>
        {p.code && (
          <a href={p.code} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-gray-900 transition-colors">
            <FaGithub/> Code
          </a>
        )}
        {p.live && (
          <a href={p.live} target="_blank" rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl transition-all hover:-translate-y-0.5"
            style={{background:p.accent,color:"#111827"}}>
            <FaExternalLinkAlt size={10}/>
            {p.freelance ? "Visit Site" : "Live Demo"}
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

export default function Portfolio() {
  const freelance = projects.filter(p=>p.freelance);
  const personal  = projects.filter(p=>!p.freelance);

  return (
    <section id="projects" className="sec-alt">
      <div className="wrap">

        {/* header */}
        <motion.div {...into(0)} className="mb-16">
          <p className="badge"> 🏗️ PORTFOLIO </p>
          <h2 className="h-lg">
            What I've <span className="hy">Shipped</span>
          </h2>
          <p className="text-gray-500 max-w-xl">
            From freelance client sites to production enterprise systems — work that ships and works.
          </p>
        </motion.div>

        {/* ── FREELANCE HIGHLIGHT ── */}
        <motion.div {...into(.05)} className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1" style={{background:"var(--bdr)"}}/>
            <span className="text-xs font-black uppercase tracking-widest text-gray-400">⭐ Freelance Work</span>
            <div className="h-px flex-1" style={{background:"var(--bdr)"}}/>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {freelance.map((p,i)=><ProjectCard key={i} p={p} i={i}/>)}
        </div>

        {/* ── PERSONAL PROJECTS ── */}
        <motion.div {...into(.05)} className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1" style={{background:"var(--bdr)"}}/>
            <span className="text-xs font-black uppercase tracking-widest text-gray-400">Personal & Internship Projects</span>
            <div className="h-px flex-1" style={{background:"var(--bdr)"}}/>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personal.map((p,i)=><ProjectCard key={i} p={p} i={i}/>)}
        </div>

        {/* github CTA */}
        <motion.div {...into(.3)} className="text-center mt-14">
          <a href="https://github.com/ashuuu08" target="_blank" rel="noopener noreferrer"
            className="btn btn-ghost inline-flex">
            <FaGithub size={16}/> See All Repositories
            <HiOutlineArrowRight/>
          </a>
        </motion.div>
      </div>
    </section>
  );
}