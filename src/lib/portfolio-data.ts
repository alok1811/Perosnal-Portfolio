export const profile = {
  name: "Alok Singh",
  firstName: "Alok",
  role: "Software Engineer",
  tagline: "Backend & Full Stack Developer",
  headline: "Engineering scalable backends, AI-powered products, and developer-grade interfaces.",
  bio: "Software Engineering student at KIIT Bhubaneswar, building production-grade full-stack systems with a strong focus on backend architecture, secure REST APIs and AI integration. I care about clean code, performance and the kind of detail that makes products feel inevitable.",
  about:
    "I'm a B.Tech Information Technology student at Kalinga Institute of Industrial Technology (2023–2027), focused on backend engineering, distributed systems and full-stack product development. I work across React, Node.js, Express, FastAPI and PostgreSQL — and I enjoy the parts most people avoid: API design, data modeling, authentication flows, and turning fuzzy product ideas into reliable services. Currently interning as a Software Engineer at The Entrepreneurship Network, where I ship scalable web apps and REST APIs in agile, Git-driven workflows.",
  location: "Bhubaneswar, India",
  email: "11aloksingh18@gmail.com",
  phone: "+91 8797696742",
  github: "https://github.com/alok1811",
  linkedin: "https://linkedin.com/in/11alok-singh18",
  resume: "/Alok_Singh_Resume.pdf",
  roles: [
    "Backend Developer",
    "Full Stack Engineer",
    "DevOps Enthusiast",
    "AI Integrations",
    "API Architect",
  ],
};

export const stats = [
  { label: "Years Coding", value: 4, suffix: "+" },
  { label: "Projects Shipped", value: 12, suffix: "+" },
  { label: "REST APIs Built", value: 30, suffix: "+" },
  { label: "Tech Stacks", value: 15, suffix: "+" },
];

export const skills = [
  {
    category: "Languages",
    items: ["C++", "Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Frameworks & Runtime",
    items: ["Node.js", "Express.js", "React.js", "FastAPI", "Next.js"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "GitHub Actions", "Vercel", "Linux", "Nginx"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
  {
    category: "Concepts",
    items: ["DSA", "OOP", "OS", "DBMS", "System Design"],
  },
];

export const projects = [
  {
    title: "Smart Study Planner",
    period: "May 2026",
    tagline: "AI-powered productivity engine with adaptive scheduling.",
    description:
      "Full-stack study planner with personalized scheduling, analytics, and adaptive study recommendations. Built secure REST APIs with JWT authentication and integrated Groq AI for intelligent strategies and productivity insights.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "Groq AI"],
    highlights: [
      "JWT-based auth with refresh rotation",
      "Adaptive AI study recommendations",
      "Analytics dashboard with streak tracking",
    ],
    href: "https://github.com/alok1811",
    accent: "from-violet-500 to-indigo-500",
  },
  {
    title: "MedGuide",
    period: "Feb 2026",
    tagline: "AI healthcare platform for medical report intelligence.",
    description:
      "Healthcare platform that ingests medical reports through an OCR pipeline, runs AI-driven health assessments, and generates downloadable PDF summaries with disease insights powered by Gemini AI.",
    stack: ["FastAPI", "MongoDB", "OCR", "Gemini AI", "ReportLab", "PdfPlumber"],
    highlights: [
      "OCR + PdfPlumber ingestion pipeline",
      "Gemini-powered diagnostic summaries",
      "Automated ReportLab PDF generation",
    ],
    href: "https://github.com/alok1811",
    accent: "from-cyan-500 to-emerald-500",
  },
  {
    title: "DevPulse API",
    period: "2025",
    tagline: "Observability-first REST API toolkit.",
    description:
      "A modular Express + Prisma toolkit for shipping production REST APIs with auth, rate limiting, structured logging and OpenAPI docs out of the box.",
    stack: ["Node.js", "Express", "Prisma", "PostgreSQL", "Docker", "OpenAPI"],
    highlights: [
      "Rate limiting + request tracing",
      "Auto-generated OpenAPI 3.1 spec",
      "Dockerized dev + CI pipeline",
    ],
    href: "https://github.com/alok1811",
    accent: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Neurosynaptic Research",
    period: "2025",
    tagline: "Published research on bio-inspired green computing.",
    description:
      "Co-authored a research paper on Neurosynaptic Green Computing — synergizing neuromorphic architectures with bio-inspired AI for self-sustaining digital ecosystems. Presented at the 2nd National Conclave on Viksit Bharat @2047, Bhubaneswar.",
    stack: ["Research", "AI", "Neuromorphic", "Sustainability"],
    highlights: [
      "Co-authored publication",
      "Presented at national conclave",
      "Bio-inspired AI architectures",
    ],
    href: "https://linkedin.com/in/11alok-singh18",
    accent: "from-amber-500 to-orange-500",
  },
];

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "The Entrepreneurship Network",
    location: "Remote",
    period: "May 2026 — Present",
    points: [
      "Developing scalable full-stack web applications and secure RESTful APIs using modern software engineering practices.",
      "Designing responsive, user-centric interfaces while collaborating in agile workflows with Git-based development and debugging tools.",
      "Owning end-to-end feature delivery from API design to UI implementation and deployment.",
    ],
  },
  {
    role: "General Volunteer",
    company: "KIIT NSS Bureau",
    location: "Bhubaneswar, India",
    period: "Aug 2024 — Present",
    points: [
      "Planned and led community outreach including health camps, slum visits and social awareness drives.",
      "Coordinated with volunteers and faculty to organize institutional events, logistics and student engagement.",
    ],
  },
];

export const education = [
  {
    school: "Kalinga Institute of Industrial Technology",
    degree: "B.Tech, Information Technology",
    period: "July 2023 — July 2027",
    location: "Bhubaneswar, Odisha",
    detail: "Coursework: DSA, OOP, Operating Systems, DBMS, Software Engineering.",
  },
  {
    school: "Jawahar Vidya Mandir Shyamali",
    degree: "Senior Secondary Education (CBSE)",
    period: "June 2021 — April 2023",
    location: "Ranchi, Jharkhand",
    detail: "Science stream with focus on Mathematics and Computer Science.",
  },
];

export const certifications = [
  {
    title: "Neurosynaptic Green Computing — Research Publication",
    issuer: "2nd National Conclave on Viksit Bharat @2047",
    year: "2025",
    description:
      "Co-author of a research paper on synergizing neuromorphic architectures with bio-inspired AI for self-sustaining digital ecosystems.",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Self-paced + Project Based",
    year: "2024",
    description: "MERN + PostgreSQL stack with deployment workflows on Vercel and Docker.",
  },
  {
    title: "Backend Engineering with Node.js",
    issuer: "Independent Study",
    year: "2024",
    description: "REST API design, authentication, Prisma ORM, and PostgreSQL modeling.",
  },
];

export const testimonials = [
  {
    name: "Engineering Mentor",
    role: "Senior Software Engineer",
    quote:
      "Alok writes the kind of backend code you actually want in production — opinionated, well-structured and observable from day one.",
  },
  {
    name: "Project Collaborator",
    role: "Full Stack Developer",
    quote:
      "Rare combination of speed and discipline. Ships features fast without leaving a mess of tech debt behind.",
  },
  {
    name: "Faculty Reviewer",
    role: "KIIT University",
    quote:
      "Consistently one of the strongest students on systems thinking and end-to-end product execution.",
  },
];