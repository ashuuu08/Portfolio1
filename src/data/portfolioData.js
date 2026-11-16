import checklistImg from "../assets/checklist.png";
import inventrymImg from "../assets/inventrym.png";
import resumePdf from "../assets/ashish_resum.pdf";

export const profileData = {
  name: "Ashish Rathour",
  title: "Java Developer / Software Engineer",
  location: "Bhopal / Raipur, India",
  headline: "ENGINEERING BEYOND THE CODE.",
  supportingStatement:
    "I build reliable backend systems, modern applications and software products that solve real-world problems.",
  narrativeLead:
    "Specializing in Java & Spring Boot backend architecture, robust REST API design, relational schema engineering and responsive full-stack applications. I turn complex business requirements into maintainable, production-ready software.",
  contact: {
    email: "rajpootashishd@gmail.com",
    phone: "+91 9691207533",
    linkedin: "https://linkedin.com/in/itzashu08",
    github: "https://github.com/ashuuu08",
    portfolioUrl: "https://itzashu08.netlify.app",
    resume: resumePdf,
  },
  metrics: [
    { value: "20+", label: "Engineered Projects", note: "Production & Client Deployments" },
    { value: "200+", label: "DSA Problems Solved", note: "LeetCode & GeeksforGeeks" },
    { value: "1+ Yrs", label: "Commercial Experience", note: "LeadAngel & Botivate" },
    { value: "90.8%", label: "Academic Excellence", note: "12th Senior Secondary" },
  ],
};

export const projectsData = [
  {
    id: "inventrym",
    number: "01",
    tag: "Enterprise System",
    title: "Inventory Management System",
    sub: "Enterprise Stock Governance & Procurement Platform",
    desc: "A comprehensive inventory governance application built for end-to-end stock lifecycles. Features multi-warehouse tracking, purchase orders, goods receipt notes, automated low-stock deficit alerts, vendor management, and real-time inventory synchronization.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    image: inventrymImg,
    aspect: "landscape",
    role: "Full Stack Engineer",
    features: [
      "Real-time inventory decrement tracking",
      "Automated low-stock deficit alerts reducing stockouts by 22%",
      "Purchase orders & goods receipt reconciliation",
      "Role-based access control (RBAC)",
      "Multi-warehouse dispatch workflows",
      "Real-time database sync via Supabase WebSockets",
    ],
    decisions:
      "Prevented race conditions during concurrent warehouse stock decrements by implementing PostgreSQL row-level locks (SELECT FOR UPDATE) combined with Supabase real-time broadcast channels.",
    live: null,
    github: null,
  },
  {
    id: "internmaker",
    number: "02",
    tag: "Production SaaS",
    title: "InternMaker — Internship Management Platform",
    sub: "Student Enrollment & QR-Verified PDF Platform",
    desc: "A production-deployed educational platform facilitating student enrollment, Razorpay automated payment verification, and asynchronous cryptographic QR-verified PDF certificate generation using Spring Boot.",
    tech: ["Java", "Spring Boot", "Spring Security", "React.js", "MySQL", "Razorpay"],
    image: null,
    aspect: "schematic",
    role: "Backend & Systems Engineer",
    features: [
      "Student enrollment & program workflows",
      "Stateless JWT authentication & Spring Security filter chains",
      "Razorpay payment gateway with webhook verification",
      "Asynchronous QR-code cryptographic PDF certificate rendering",
      "Database transaction management with ACID isolation",
      "RESTful API contracts with Postman testing suites",
    ],
    decisions:
      "Offloaded certificate rendering to a dedicated Spring background thread pool to prevent blocking the primary HTTP request thread, preserving sub-200ms API response latency.",
    live: "https://internmaker.vercel.app/",
    github: "https://github.com/ashuuu08/internmaker_backend",
  },
  {
    id: "checklist",
    number: "03",
    tag: "Operations SaaS",
    title: "Leave Management & Task Assignment System",
    sub: "Real-Time Task Delegation with WhatsApp API Integration",
    desc: "A mission-critical operational system architected to streamline managerial leave approvals, task delegation, automated reassignment, and real-time progress notifications via the WhatsApp Business API.",
    tech: ["React.js", "Node.js", "Supabase", "PostgreSQL", "WhatsApp API"],
    image: checklistImg,
    aspect: "landscape",
    role: "Full Stack Developer",
    features: [
      "Automated task delegation & deadline reminders",
      "WhatsApp API status notifications for managerial roles",
      "Employee leave requests with hierarchical approvals",
      "Automatic task reassignment when assignees are on leave",
      "Real-time task tracking with Supabase subscriptions",
      "Reduced managerial follow-up overhead by 50%",
    ],
    decisions:
      "Integrated idempotent webhook handlers to guard against duplicate WhatsApp notification deliveries during third-party network retries.",
    live: null,
    github: null,
  },
  {
    id: "ngo-finance",
    number: "04",
    tag: "Backend & Security",
    title: "NGO Finance Management System",
    sub: "Spring Security 6 & JWT Financial Governance Engine",
    desc: "A secure financial governance API engine for non-profit organizations. Architected with Spring Security, stateless JWT authentication, and embedded H2/MySQL database pooling for auditable financial transactions.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "H2 Database"],
    image: null,
    aspect: "schematic",
    role: "Backend Lead",
    features: [
      "Stateless JWT bearer authentication filter",
      "Strict Role-Based Access Control (@PreAuthorize)",
      "Automated financial report generation saving 6 hours/week",
      "HikariCP database connection pool tuning",
      "Comprehensive Postman integration test suites",
      "ACID transactional audit trails",
    ],
    decisions:
      "Implemented an in-memory token blacklist paired with short-lived access token TTLs to allow instant session revocation without compromising stateless server scalability.",
    live: null,
    github: "https://github.com/ashuuu08/ngo_finance",
  },
];

export const experienceData = [
  {
    company: "LeadAngel",
    role: "Java Developer",
    duration: "27 October 2026 – Present",
    status: "Current",
    type: "Full-Time",
    location: "India",
    highlights: [
      "Develop Java and Spring Boot backend features for high-throughput enterprise systems.",
      "Implement and maintain secure, performant REST APIs adhering to strict latency budgets.",
      "Resolve complex production bugs and conduct rigorous architectural code reviews.",
      "Integrate third-party CRM microservices across Salesforce, Microsoft Dynamics 365, and HubSpot.",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "Microservices", "CRM Integrations", "SQL"],
  },
  {
    company: "LeadAngel",
    role: "Java Support Engineer",
    duration: "July 2026 – October 2026",
    status: "Promoted to Developer",
    type: "Full-Time",
    location: "India",
    highlights: [
      "Investigated mission-critical production issues, analyzed application logs, and pinpointed root causes.",
      "Resolved client-facing technical escalations with measurable SLA improvements.",
      "Optimized slow SQL queries and debugged complex REST API endpoints under production traffic.",
      "Contributed core Java patches and stabilization improvements to production codebases.",
    ],
    tech: ["Java", "SQL Optimization", "Log Analysis", "Production Debugging", "REST APIs"],
  },
  {
    company: "Botivate",
    role: "Web Developer Intern",
    duration: "January 2026 – June 2026",
    status: "Completed",
    type: "Internship",
    location: "Raipur, Chhattisgarh",
    highlights: [
      "Developed full-stack web applications using React.js and Node.js.",
      "Built the Leave Management and Task Assignment System with WhatsApp API alerts.",
      "Implemented role-based access control and maintained production web applications.",
      "Resolved 30+ critical bugs across the stack, reducing overall defect rates by 40%.",
    ],
    tech: ["React.js", "Node.js", "Supabase", "PostgreSQL", "WhatsApp API"],
  },
  {
    company: "JSpiders",
    role: "Java Full Stack Development Trainee & Intern",
    duration: "January 2025 – April 2025",
    status: "Completed",
    type: "Trainee / Intern",
    location: "Bhopal, MP",
    highlights: [
      "Rigorous hands-on immersion in Core Java, OOP principles, and Data Structures & Algorithms.",
      "Developed robust backend systems using Spring Boot, Hibernate, JPA, and MySQL.",
      "Integrated React.js frontends with Spring Boot RESTful services across complete SDLC cycles.",
    ],
    tech: ["Core Java", "Spring Boot", "Hibernate", "JPA", "MySQL", "React.js", "DSA"],
  },
  {
    company: "CypherBYTE",
    role: "Web Developer Intern",
    duration: "May 2024 – June 2024",
    status: "Completed",
    type: "Internship",
    location: "Bhopal, MP",
    highlights: [
      "Built responsive, accessible React.js interfaces connected to secure RESTful APIs.",
      "Integrated Razorpay payment gateway with automated receipt generation workflows.",
      "Achieved a 25% improvement in Core Web Vitals and component rendering speeds.",
    ],
    tech: ["React.js", "JavaScript", "REST APIs", "Razorpay"],
  },
];

export const skillsCategories = [
  {
    name: "Backend Engineering",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 82 },
      { name: "Spring MVC", level: 80 },
      { name: "Spring Security", level: 78 },
      { name: "Hibernate / JPA", level: 78 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "React.js", level: 78 },
      { name: "JavaScript (ES6+)", level: 75 },
      { name: "HTML5 / CSS3", level: 85 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    name: "Databases & Storage",
    skills: [
      { name: "MySQL", level: 82 },
      { name: "PostgreSQL", level: 75 },
      { name: "Supabase", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    name: "Node & Secondary Backend",
    skills: [
      { name: "Node.js", level: 72 },
      { name: "Express.js", level: 72 },
    ],
  },
  {
    name: "Tools & Methodologies",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Docker", level: 65 },
      { name: "Maven", level: 80 },
      { name: "Postman", level: 85 },
      { name: "IntelliJ IDEA / VS Code", level: 88 },
      { name: "DSA & OOP Architecture", level: 85 },
    ],
  },
];

export const educationData = [
  {
    institution: "Bansal Institute of Science & Technology, Bhopal",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2021 – 2025",
    details: "Core subjects: Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks.",
  },
  {
    institution: "Government Excellence Higher Secondary School",
    degree: "Senior Secondary (12th: 90.8%) & Secondary (10th: 87.6%)",
    duration: "2017 – 2021",
    details: "Focus in Science and Mathematics with distinction honors.",
  },
];

export const achievementsData = [
  {
    title: "200+ DSA Problems Solved",
    platform: "LeetCode & GeeksforGeeks",
    desc: "Rigorous focus on arrays, linked lists, binary trees, dynamic programming, and graph traversal optimization.",
  },
  {
    title: "Java with DSA Certification",
    platform: "Apna College Alpha 2.0",
    desc: "Comprehensive certification covering advanced algorithms, memory management, and OOP system design.",
  },
];

