export const RESUME_LINK =
  "https://drive.google.com/file/d/1qMWkvq2shfdn3_1Bqmqpp8Yl7p1-fPT1/view?usp=sharing";

// ── Skills ────────────────────────────────────────────────────────────────────
export const SKILLS = [
  { cat: "Languages", tags: ["Java", "SQL", "JavaScript"] },
  {
    cat: "Backend",
    tags: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
    ],
  },
  { cat: "Security", tags: ["Spring Security", "JWT", "OAuth 2.0"] },
  { cat: "Databases", tags: ["PostgreSQL", "MongoDB", "MySQL"] },
  { cat: "Frontend", tags: ["React", "HTML", "CSS", "Tailwind CSS"] },
  { cat: "Core CS", tags: ["DSA", "OOP", "DBMS", "OS", "Networks"] },
];

// ── Projects ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    num: "01",
    name: "Incognito Campus",
    sub: "Anonymous Real-Time Chat Platform",
    links: [
      {
        icon: "fas fa-external-link-alt",
        label: "Live",
        href: "https://incognito-campus-frontend.vercel.app/",
      },
    ],
    desc: [
      "Full-stack anonymous chat — React + Spring Boot with real-time bidirectional WebSocket communication.",
      "Gemini AI API integration to auto-summarize chat rooms into structured digests.",
      "End-to-end production deploy: Vercel (frontend) · Railway (backend) · MongoDB Atlas (DB).",
    ],
    tech: [
      "React",
      "Spring Boot",
      "WebSocket",
      "MongoDB",
      "Gemini AI",
      "Vercel",
      "Railway",
    ],
  },
  {
    num: "02",
    name: "Smart Email Assistant",
    sub: "AI-Powered Email Response Generator",
    links: [
      {
        icon: "fab fa-github",
        label: "GitHub",
        href: "https://github.com/Kumargaurav126/Smart-Email-Assistant",
      },
    ],
    desc: [
      "Chrome extension reads Gmail DOM → Spring Boot REST API → AI reply injected back into Gmail.",
      "Gemini AI via Spring WebClient (non-blocking); prompt engineering for formal / casual / friendly tones.",
      "React + Material UI with tone picker, loading states, error handling, and one-click clipboard copy.",
    ],
    tech: [
      "React",
      "Spring Boot",
      "REST APIs",
      "Gemini AI",
      "Chrome Extension",
      "Material UI",
    ],
  },
  {
    num: "03",
    name: "E-Commerce REST API",
    sub: "Secure Product Management System",
    links: [],
    desc: [
      "Full-stack e-commerce: React frontend + Spring Boot APIs for products, users, cart, and orders.",
      "Spring Security · JWT · Google OAuth 2.0 · role-based access control (ADMIN / USER).",
      "Custom JPQL @Query annotations across Product, User, Cart, and Order entity relationships.",
    ],
    tech: [
      "React",
      "Spring Boot",
      "Spring Data JPA",
      "JWT",
      "OAuth 2.0",
      "PostgreSQL",
    ],
  },
];

// ── Achievements ──────────────────────────────────────────────────────────────
export const ACHIEVEMENTS = [
  {
    icon: "🧩",
    title: "600+ DSA Problems",
    desc: "Strong algorithmic foundation and competitive problem-solving.",
    links: [
      { label: "LeetCode", href: "https://leetcode.com/u/Kumargaurav12/" },
      {
        label: "GeeksforGeeks",
        href: "https://www.geeksforgeeks.org/profile/kumargaurav121?tab=activity",
      },
      {
        label: "Code360",
        href: "https://www.naukri.com/code360/profile/e0b2fe64-b3dd-42f0-8c2f-f632bed533a0",
      },
    ],
  },
  {
    icon: "⭐",
    title: "5-Star Java · HackerRank",
    desc: "Proficiency across core and advanced Java programming challenges.",
    links: [],
  },
  {
    icon: "📜",
    title: "Wipro TalentNext",
    desc: "Java Full Stack Development certification from the Wipro TalentNext Program.",
    links: [
      {
        label: "View certificate",
        href: "https://drive.google.com/file/d/1R4Yynhh-yy2Ff27d1rJqzo1L9770-foO/view?usp=sharing",
      },
    ],
  },
];

// ── Contact ───────────────────────────────────────────────────────────────────
export const CONTACT_LINKS = [
  {
    icon: "fas fa-envelope",
    label: "contact.kumargaurav12@gmail.com",
    href: "mailto:contact.kumargaurav12@gmail.com",
  },
  {
    icon: "fab fa-github",
    label: "github.com/Kumargaurav126",
    href: "https://github.com/Kumargaurav126",
  },
  {
    icon: "fab fa-linkedin",
    label: "linkedin.com/in/kumar-gaurav-133960323",
    href: "https://www.linkedin.com/in/kumar-gaurav-133960323/",
  },
];
