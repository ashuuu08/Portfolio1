import React, { useState } from "react";
import { FaJava, FaPlay, FaCheck, FaCopy, FaTerminal, FaCode, FaShieldAlt } from "react-icons/fa";
import { useCinematicScroll } from "../animations/useCinematicScroll";

const codeSnippets = [
  {
    id: "security",
    title: "SecurityFilterChain.java",
    desc: "Spring Security 6 stateless JWT bearer authentication filter & CORS policy.",
    badge: "Auth & Security",
    code: `@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(AbstractHttpConfigurer::disable)
            .cors(Customizer.withDefaults())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**", "/actuator/health").permitAll()
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authenticationProvider(authenticationProvider)
            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }
}`,
  },
  {
    id: "service",
    title: "PaymentService.java",
    desc: "Transactional boundary with idempotent webhook processing & optimistic locking.",
    badge: "Core Service",
    code: `@Service
@Slf4j
@RequiredArgsConstructor
public class PaymentVerificationService {

    private final OrderRepository orderRepo;
    private final WebhookAuditLogger auditLogger;

    @Transactional(isolation = Isolation.REPEATABLE_READ)
    public TransactionReceipt processWebhook(String idempotencyKey, PaymentPayload payload) {
        if (auditLogger.isAlreadyProcessed(idempotencyKey)) {
            log.warn("Replay attack prevented for key: {}", idempotencyKey);
            return auditLogger.getCachedReceipt(idempotencyKey);
        }

        Order order = orderRepo.findByIdWithLock(payload.getOrderId())
            .orElseThrow(() -> new EntityNotFoundException("Order mismatch"));

        order.markPaid(payload.getTransactionId(), Instant.now());
        orderRepo.save(order);

        auditLogger.recordSuccess(idempotencyKey, order.getId());
        return new TransactionReceipt(order.getId(), PaymentStatus.VERIFIED);
    }
}`,
  },
  {
    id: "resilience",
    title: "ResilienceConfig.java",
    desc: "Resilience4j Circuit Breaker with exponential backoff & graceful fallback.",
    badge: "Fault Tolerance",
    code: `@Configuration
public class CircuitBreakerConfiguration {

    @Bean
    public Customizer<ReactiveResilience4JCircuitBreakerFactory> defaultCustomizer() {
        return factory -> factory.configureDefault(id -> new Resilience4JConfigBuilder(id)
            .circuitBreakerConfig(CircuitBreakerConfig.custom()
                .slidingWindowSize(100)
                .failureRateThreshold(50.0f)
                .waitDurationInOpenState(Duration.ofSeconds(10))
                .permittedNumberOfCallsInHalfOpenState(5)
                .build())
            .timeLimiterConfig(TimeLimiterConfig.custom()
                .timeoutDuration(Duration.ofMillis(1200))
                .build())
            .build());
    }
}`,
  },
];

export default function Scene3CodeLab() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [logs, setLogs] = useState([
    "[JVM] OpenJDK 64-Bit Server VM (build 21.0.2+13-LTS) initialized.",
    "[Spring] Bootstrapped ApplicationContext in 1.482 seconds (process running for 2.1s)",
    "[HikariCP] HikariPool-1 - Pool initialized (min-idle: 5, max-pool: 20)",
    "[Ready] Port 8080 open. Security filter chains compiled successfully.",
  ]);

  const containerRef = useCinematicScroll((ctx, isDesktop) => {
    const gsap = window.gsap;
    if (!gsap || !window.ScrollTrigger) return;

    gsap.fromTo(
      ".code-lab-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#code-lab",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".code-lab-window",
      { opacity: 0, scale: 0.96, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: ".code-lab-window",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExecute = () => {
    if (executing) return;
    setExecuting(true);
    setLogs((prev) => [
      ...prev,
      `[Test Runner] Executing test suite for ${codeSnippets[activeTab].title}...`,
    ]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        `[JWT Test] Authenticating mock Bearer token with RSA256 signature... ✓ PASSED (14ms)`,
        `[Integration] Checking Spring context & Hikari connection pool health... ✓ 100% HEALTHY`,
        `[Result] ALL 8 ASSERTIONS PASSED. Zero memory leaks detected.`,
      ]);
      setExecuting(false);
    }, 1200);
  };

  return (
    <section id="code-lab" ref={containerRef} className="sec-cinematic bg-[#05070B]">
      <div className="wrap relative z-10">
        {/* Header */}
        <div className="code-lab-header max-w-3xl mb-12">
          <div className="badge-cinematic mb-4">Scene 03 — Java Code Laboratory</div>
          <h2
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Enterprise Backend <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              Architecture in Code.
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            A window into real production Java patterns. Inspect how I architect stateless authentication filters, 
            idempotent transactions with lock prevention, and microservice circuit breakers.
          </p>
        </div>

        {/* Code Lab IDE Window */}
        <div className="code-lab-window rounded-2xl border border-white/10 bg-[#090D16] shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Window Titlebar */}
          <div className="px-4 py-3 bg-[#06080E] border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 font-mono text-xs text-gray-400 flex items-center gap-2">
                <FaJava className="text-amber-400" /> IntelliJ IDEA — Spring Boot 3.2.x Workspace
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                title="Copy Code"
              >
                {copied ? <FaCheck className="text-emerald-400" size={11} /> : <FaCopy size={11} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>

              <button
                onClick={handleExecute}
                disabled={executing}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold text-gray-900 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 transition-all shadow-sm disabled:opacity-50"
              >
                <FaPlay size={10} className={executing ? "animate-spin" : ""} />
                <span>{executing ? "Testing..." : "Run Test Suite"}</span>
              </button>
            </div>
          </div>

          {/* File Tabs */}
          <div className="flex overflow-x-auto border-b border-white/5 bg-[#070A12] scrollbar-none">
            {codeSnippets.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2.5 px-5 py-3 text-xs font-mono border-r border-white/5 whitespace-nowrap transition-colors ${
                  activeTab === i
                    ? "bg-[#090D16] text-amber-300 border-t-2 border-t-amber-400 font-semibold"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.02]"
                }`}
              >
                <FaCode size={12} className={activeTab === i ? "text-amber-400" : "text-gray-500"} />
                <span>{tab.title}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-gray-400 ml-1">
                  {tab.badge}
                </span>
              </button>
            ))}
          </div>

          {/* Code Viewer */}
          <div className="p-4 sm:p-6 overflow-x-auto bg-[#080C15] font-mono text-xs sm:text-sm leading-relaxed text-gray-300">
            <pre className="text-amber-100/90">
              <code>{codeSnippets[activeTab].code}</code>
            </pre>
          </div>

          {/* Interactive Output / Terminal Drawer */}
          <div className="border-t border-white/10 bg-[#05070B] p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <FaTerminal size={12} />
                <span className="font-semibold uppercase tracking-wider">Embedded Spring Actuator & Test Console</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Engine Active
              </span>
            </div>

            <div className="bg-[#030407] rounded-xl p-3 sm:p-4 border border-white/5 font-mono text-xs text-gray-400 space-y-1.5 max-h-40 overflow-y-auto">
              {logs.map((logLine, idx) => (
                <div key={idx} className="leading-snug">
                  {logLine.includes("✓") ? (
                    <span className="text-emerald-400">{logLine}</span>
                  ) : logLine.includes("[JVM]") ? (
                    <span className="text-gray-400">{logLine}</span>
                  ) : logLine.includes("[Test") ? (
                    <span className="text-amber-300 font-semibold">{logLine}</span>
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

