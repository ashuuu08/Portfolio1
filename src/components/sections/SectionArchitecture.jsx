import React, { useState } from "react";
import { FaJava, FaPlay, FaTerminal, FaDatabase, FaServer, FaCode, FaExchangeAlt, FaShieldAlt, FaCheck } from "react-icons/fa";
import { useCinematicScroll } from "../../animations/useCinematicScroll";

const architectureSteps = [
  {
    step: "01",
    id: "frontend",
    title: "React Frontend",
    tech: "React 18 + Vite",
    action: "Dispatches HTTP POST request with JSON payload & Bearer JWT token.",
    latency: "< 5ms client serialize",
  },
  {
    step: "02",
    id: "gateway",
    title: "REST API Gateway",
    tech: "HTTP/2 + CORS Filter",
    action: "Terminates TLS, validates origin header against whitelist, checks rate-limit budget.",
    latency: "< 8ms edge ingress",
  },
  {
    step: "03",
    id: "security",
    title: "Spring Security Filter",
    tech: "SecurityFilterChain + JWT",
    action: "Intercepts request, decodes RSA256 signature, populates SecurityContextHolder.",
    latency: "< 4ms cryptographic check",
  },
  {
    step: "04",
    id: "controller",
    title: "Spring Boot Controller",
    tech: "@RestController + DTOs",
    action: "Validates @Valid @RequestBody annotations and delegates payload to business service.",
    latency: "< 2ms dispatch",
  },
  {
    step: "05",
    id: "service",
    title: "Service Layer",
    tech: "@Service + @Transactional",
    action: "Executes business validation rules, transaction boundary isolation, idempotency check.",
    latency: "< 10ms compute",
  },
  {
    step: "06",
    id: "repository",
    title: "Repository / JPA Layer",
    tech: "Spring Data JPA + Hibernate",
    action: "Translates domain entity method to optimized SQL prepared statement.",
    latency: "< 2ms ORM mapping",
  },
  {
    step: "07",
    id: "database",
    title: "PostgreSQL Database",
    tech: "PostgreSQL + HikariCP",
    action: "Executes indexed query with row-level locks and commits transaction.",
    latency: "< 12ms execution",
  },
];

export default function SectionArchitecture() {
  const [activeStepIndex, setActiveStepIndex] = useState(2);
  const [isRunningSim, setIsRunningSim] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    "$ mvn clean install",
    "[INFO] Scanning for projects...",
    "[INFO] ----------------< com.ashish:enterprise-service >-----------------",
    "[INFO] Building Enterprise Backend Service 3.2.4",
    "[INFO] Compiling 24 source files with OpenJDK 21",
    "[INFO] Running com.ashish.security.SecurityFilterChainTest",
    "[INFO] Tests run: 14, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.428 s",
    "[INFO] BUILD SUCCESS",
  ]);

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

    // Pulse line flow
    gsap.to(".arch-pulse-flow", {
      strokeDashoffset: -120,
      repeat: -1,
      duration: 3,
      ease: "linear",
    });
  }, []);

  const runBuildSimulation = () => {
    if (isRunningSim) return;
    setIsRunningSim(true);
    setTerminalLogs((prev) => [
      ...prev,
      "$ ./gradlew test --continuous",
      "[LOG] Initializing HikariCP connection pool (min-idle: 5, max-pool: 20)...",
    ]);

    setTimeout(() => {
      setTerminalLogs((prev) => [
        ...prev,
        "[SECURITY] JWT Filter verified mock token payload in 3ms.",
        "[PERSISTENCE] PostgreSQL transaction committed with repeatable-read isolation.",
        "[STATUS] 200 OK Response returned to client. (Total roundtrip: 38ms)",
        "[SUCCESS] 0 MEMORY LEAKS DETECTED.",
      ]);
      setIsRunningSim(false);
    }, 1200);
  };

  const currentStep = architectureSteps[activeStepIndex];

  return (
    <section id="architecture" ref={containerRef} className="sec-industrial bg-[#111111]">
      <div className="wrap">
        
        {/* Section Header */}
        <div className="arch-header max-w-4xl mb-16">
          <div className="badge-acid mb-4">
            SECTION 04 // HOW SYSTEMS WORK
          </div>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F4EF] tracking-tight leading-[1.08]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            END-TO-END <br />
            <span className="text-[#E8FF36]">REQUEST PIPELINE TRACE.</span>
          </h2>
          <p className="mt-6 text-[#929292] text-base sm:text-lg leading-relaxed max-w-3xl">
            A real-world trace of how an HTTP dispatch travels from a client application through our security filter chains, Spring Boot service boundaries, and down into the PostgreSQL storage engine.
          </p>
        </div>

        {/* Interactive Architecture Visualization Canvas */}
        <div className="card-industrial p-6 sm:p-8 mb-12 border-white/10 relative overflow-hidden">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-8 border-b border-white/[0.08] font-mono text-xs">
            <span className="flex items-center gap-2 text-[#E8FF36] font-bold">
              <FaExchangeAlt /> INTERACTIVE REQUEST & RESPONSE LIFECYCLE
            </span>
            <span className="text-[#929292]">
              SELECT STAGE 01–07 TO INSPECT EXECUTION CONSTRAINTS
            </span>
          </div>

          {/* SVG Connection Flow Pipeline */}
          <div className="w-full overflow-x-auto py-2">
            <svg
              className="w-full min-w-[780px] h-28"
              viewBox="0 0 880 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Neutral Base Wire */}
              <line x1="50" y1="55" x2="830" y2="55" stroke="rgba(245, 244, 239, 0.12)" strokeWidth="3" />

              {/* Animated GSAP Traveling Acid Signal */}
              <line
                className="arch-pulse-flow"
                x1="50"
                y1="55"
                x2="830"
                y2="55"
                stroke="#E8FF36"
                strokeWidth="3.5"
                strokeDasharray="14 16"
              />

              {/* 7 Interactive Architecture Nodes */}
              {architectureSteps.map((s, idx) => {
                const xCoord = 50 + idx * 130;
                const isSelected = activeStepIndex === idx;

                return (
                  <g
                    key={s.id}
                    transform={`translate(${xCoord}, 55)`}
                    className="cursor-pointer group"
                    onClick={() => setActiveStepIndex(idx)}
                  >
                    <circle
                      r={isSelected ? "26" : "20"}
                      fill={isSelected ? "#E8FF36" : "#181818"}
                      stroke={isSelected ? "#E8FF36" : "rgba(245, 244, 239, 0.2)"}
                      strokeWidth={isSelected ? "3" : "1.5"}
                      className="transition-all duration-300"
                    />
                    <text
                      textAnchor="middle"
                      dy="4"
                      fill={isSelected ? "#111111" : "#F5F4EF"}
                      fontSize="10"
                      fontFamily="JetBrains Mono"
                      fontWeight="bold"
                    >
                      {s.step}
                    </text>
                    <text
                      textAnchor="middle"
                      dy="42"
                      fill={isSelected ? "#E8FF36" : "#929292"}
                      fontSize="9"
                      fontFamily="JetBrains Mono"
                      className="uppercase"
                    >
                      {s.title.split(" ")[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Active Stage Inspection Readout */}
          <div className="mt-8 p-6 rounded bg-[#161616] border border-white/10 grid md:grid-cols-3 gap-6 font-mono text-xs">
            <div>
              <span className="text-[#929292] block text-[10px] uppercase tracking-wider mb-1">
                STAGE {currentStep.step} // ACTIVE COMPONENT
              </span>
              <h4 className="text-base font-bold text-[#F5F4EF] mb-1 font-sans">
                {currentStep.title}
              </h4>
              <span className="text-[#E8FF36]">{currentStep.tech}</span>
            </div>

            <div>
              <span className="text-[#929292] block text-[10px] uppercase tracking-wider mb-1">
                ENGINEERING ACTION EXECUTED
              </span>
              <p className="text-gray-300 leading-relaxed font-sans text-xs">
                {currentStep.action}
              </p>
            </div>

            <div>
              <span className="text-[#929292] block text-[10px] uppercase tracking-wider mb-1">
                LATENCY BUDGET / PERFORMANCE
              </span>
              <div className="p-2.5 rounded bg-[#111111] border border-white/5 text-[#E8FF36] font-bold">
                {currentStep.latency}
              </div>
            </div>
          </div>

        </div>

        {/* Code Laboratory Simulation Window */}
        <div className="card-industrial border-white/10 overflow-hidden font-mono text-xs">
          
          {/* Editor Title Bar */}
          <div className="px-5 py-3.5 bg-[#181818] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs text-[#929292] flex items-center gap-1.5 ml-2 font-bold">
                <FaJava className="text-[#E8FF36]" /> UserService.java — Spring Boot 3.2.x Enterprise Workspace
              </span>
            </div>

            <button
              onClick={runBuildSimulation}
              disabled={isRunningSim}
              className="btn-acid py-1.5 px-3 text-[11px] disabled:opacity-50"
            >
              <FaPlay size={9} className={isRunningSim ? "animate-spin" : ""} />
              <span>{isRunningSim ? "COMPILING..." : "EXECUTE SIMULATION"}</span>
            </button>
          </div>

          {/* Java Code View */}
          <div className="p-6 bg-[#141414] overflow-x-auto text-[#F5F4EF] leading-relaxed">
            <pre>
              <code>{`@Service
@Slf4j
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public User getUser(Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
    }
}`}</code>
            </pre>
          </div>

          {/* Embedded Terminal Simulation */}
          <div className="p-5 bg-[#0C0C0C] border-t border-white/[0.08]">
            <div className="flex items-center justify-between mb-2.5 text-[#929292] text-[11px]">
              <span className="flex items-center gap-2">
                <FaTerminal className="text-[#E8FF36]" />
                <span>TERMINAL BUILD OUTPUT & TEST ASSERTIONS</span>
              </span>
              <span className="text-[#E8FF36] font-bold">JVM 21 // LTS</span>
            </div>

            <div className="p-4 rounded bg-[#070707] border border-white/5 space-y-1 text-xs text-[#929292] max-h-40 overflow-y-auto">
              {terminalLogs.map((logLine, lIdx) => (
                <div key={lIdx}>
                  {logLine.includes("BUILD SUCCESS") || logLine.includes("[STATUS]") || logLine.includes("[SUCCESS]") ? (
                    <span className="text-[#E8FF36] font-bold">{logLine}</span>
                  ) : logLine.includes("$") ? (
                    <span className="text-[#F5F4EF] font-bold">{logLine}</span>
                  ) : (
                    <span>{logLine}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

