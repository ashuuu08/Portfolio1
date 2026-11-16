import React, { useState } from "react";
import { FaShieldAlt, FaServer, FaDatabase, FaMobileAlt, FaExchangeAlt, FaBolt, FaCheck } from "react-icons/fa";
import { useCinematicScroll } from "../animations/useCinematicScroll";

const architectureNodes = [
  {
    id: "client",
    title: "1. Client & Ingress Tier",
    badge: "Edge / Frontend",
    tech: "React 18 + Vite / Mobile Browsers",
    role: "Single Page Applications and external webhooks initiate HTTPS requests through CDN edge nodes.",
    metrics: "< 50ms Edge DNS, Brotli/Gzip compression, Core Web Vitals optimized",
    security: "Content Security Policy, Strict-Transport-Security, HTTPS 1.3",
  },
  {
    id: "security",
    title: "2. Security & Gateway Filter",
    badge: "Auth Boundary",
    tech: "Spring Security + Stateless JWT",
    role: "Intercepts every HTTP dispatch, decodes bearer tokens, verifies cryptographic signatures, and prevents unauthorized invocation.",
    metrics: "< 5ms token validation, In-memory blacklist lookup",
    security: "Stateless session policy, CORS origin whitelist, CSRF mitigation",
  },
  {
    id: "services",
    title: "3. Microservices & Business Logic",
    badge: "Compute Layer",
    tech: "Spring Boot 3 + Node.js / Express",
    role: "Processes transactional domains (payments, checklist delegation, user state, email pipelines) with strict isolation.",
    metrics: "High-throughput asynchronous executors, HikariCP thread management",
    security: "Role-Based Access Control (@PreAuthorize), Parameter Sanitization",
  },
  {
    id: "data",
    title: "4. Persistence & Real-Time Sync",
    badge: "Storage Engine",
    tech: "PostgreSQL + Supabase + Redis",
    role: "Relational integrity, ACID compliance, real-time WebSocket subscriptions, and sub-millisecond query cache.",
    metrics: "Indexed B-Tree lookups, connection pooling (20 max), automated migrations",
    security: "Row Level Security (RLS), encrypted at rest, prepared SQL statements",
  },
];

export default function Scene4Architecture() {
  const [selectedNode, setSelectedNode] = useState(architectureNodes[1]);

  const containerRef = useCinematicScroll((ctx, isDesktop) => {
    const gsap = window.gsap;
    if (!gsap || !window.ScrollTrigger) return;

    gsap.fromTo(
      ".arch-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#architecture",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Flow line pulse animation
    gsap.to(".arch-flow-pulse", {
      strokeDashoffset: -100,
      repeat: -1,
      duration: 3,
      ease: "linear",
    });

    // Stagger node boxes
    gsap.fromTo(
      ".arch-node-box",
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".arch-nodes-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="architecture" ref={containerRef} className="sec-cinematic bg-[#070A12]">
      <div className="ambient-orb w-[450px] h-[450px] bg-blue-500/5 top-1/3 -left-48" />

      <div className="wrap relative z-10">
        {/* Header */}
        <div className="arch-header max-w-3xl mb-14">
          <div className="badge-cinematic mb-4">Scene 04 — Systems Blueprint</div>
          <h2
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            End-to-End <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">
              System Architecture Flow.
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Click on any architectural node below to inspect latency budgets, security constraints, 
            and data pipeline specifications.
          </p>
        </div>

        {/* Architecture Topology SVG Flow Diagram */}
        <div className="card-cinematic p-6 sm:p-8 mb-10 overflow-hidden relative border-cyan-500/20">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
            <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <FaExchangeAlt /> High-Throughput Request-Response Pipeline
            </span>
            <span className="text-xs font-mono text-gray-400 hidden sm:inline-block">
              Interactive Topology • Click Stage to Inspect
            </span>
          </div>

          {/* SVG Animated Connection Flow */}
          <div className="w-full overflow-x-auto py-4">
            <svg
              className="w-full min-w-[750px] h-32"
              viewBox="0 0 900 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Pipeline Line Backdrops */}
              <line x1="80" y1="60" x2="820" y2="60" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="4" />
              
              {/* Animated GSAP Packet Flow Line */}
              <line
                className="arch-flow-pulse"
                x1="80"
                y1="60"
                x2="820"
                y2="60"
                stroke="url(#flowGradient)"
                strokeWidth="4"
                strokeDasharray="16 12"
              />

              <defs>
                <linearGradient id="flowGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22D3EE" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#818CF8" />
                </linearGradient>
              </defs>

              {/* Node 1: Client */}
              <g transform="translate(80, 60)" className="cursor-pointer" onClick={() => setSelectedNode(architectureNodes[0])}>
                <circle r="34" fill={selectedNode.id === "client" ? "#0E7490" : "#0F172A"} stroke="#22D3EE" strokeWidth="2.5" />
                <text textAnchor="middle" dy="5" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">CLIENT</text>
              </g>

              {/* Node 2: Gateway */}
              <g transform="translate(320, 60)" className="cursor-pointer" onClick={() => setSelectedNode(architectureNodes[1])}>
                <circle r="34" fill={selectedNode.id === "security" ? "#0E7490" : "#0F172A"} stroke="#38BDF8" strokeWidth="2.5" />
                <text textAnchor="middle" dy="5" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">SECURITY</text>
              </g>

              {/* Node 3: Services */}
              <g transform="translate(560, 60)" className="cursor-pointer" onClick={() => setSelectedNode(architectureNodes[2])}>
                <circle r="34" fill={selectedNode.id === "services" ? "#0E7490" : "#0F172A"} stroke="#60A5FA" strokeWidth="2.5" />
                <text textAnchor="middle" dy="5" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">SERVICES</text>
              </g>

              {/* Node 4: Database */}
              <g transform="translate(800, 60)" className="cursor-pointer" onClick={() => setSelectedNode(architectureNodes[3])}>
                <circle r="34" fill={selectedNode.id === "data" ? "#0E7490" : "#0F172A"} stroke="#818CF8" strokeWidth="2.5" />
                <text textAnchor="middle" dy="5" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono" fontWeight="bold">DATABASE</text>
              </g>
            </svg>
          </div>

          {/* Interactive Inspection Card */}
          <div className="mt-6 p-6 rounded-xl bg-[#0B111E] border border-white/10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {selectedNode.badge}
                </span>
                <span className="text-xs text-gray-400 font-mono">{selectedNode.tech}</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{selectedNode.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{selectedNode.role}</p>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                <FaBolt size={11} /> Performance Metrics
              </p>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-gray-300">
                {selectedNode.metrics}
              </div>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                <FaShieldAlt size={11} /> Security & Integrity Guard
              </p>
              <div className="p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-emerald-300/90">
                {selectedNode.security}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Interactive Stage Cards */}
        <div className="arch-nodes-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {architectureNodes.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`arch-node-box text-left p-5 rounded-xl border transition-all ${
                  isSelected
                    ? "bg-cyan-950/20 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                    : "bg-[#090D17]/80 border-white/5 hover:border-white/20 hover:bg-[#0D1424]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    {node.badge}
                  </span>
                  {isSelected && <FaCheck size={12} className="text-cyan-400" />}
                </div>
                <h5 className="font-bold text-sm text-white mb-1.5">{node.title}</h5>
                <p className="text-xs text-gray-400 line-clamp-2">{node.role}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

