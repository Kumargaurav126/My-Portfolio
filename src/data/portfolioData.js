export const RESUME_LINK =
  "https://drive.google.com/file/d/1EFPHnSrYbNbR0VvzCCjtqNa_E5_DMxpZ/view?usp=sharing";

// ── Skills ────────────────────────────────────────────────────────────────────
export const SKILLS = [
  { cat: "Languages", tags: ["Java", "SQL", "C++"] },
  {
    cat: "Backend",
    tags: [
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Model Context Protocol (MCP)",
    ],
  },
  { cat: "Frontend", tags: ["React.js", "HTML", "CSS", "Tailwind CSS"] },
  { cat: "Security", tags: ["Spring Security", "JWT", "OAuth 2.0"] },
  { cat: "Cloud & DevOps", tags: ["AWS", "Docker"] },
  { cat: "Databases", tags: ["PostgreSQL", "MongoDB", "MySQL"] },
  {
    cat: "Tools",
    tags: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "IntelliJ IDEA",
      "VS Code",
      "Postman",
    ],
  },
  {
    cat: "Core Concepts",
    tags: ["DSA", "OOP", "DBMS", "SDLC", "System Design"],
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    num: "01",
    name: "AI Dev Assistant",
    sub: "MCP-Based AI Code Review & Documentation Tool",
    links: [
      {
        icon: "fab fa-github",
        label: "GitHub",
        href: "https://github.com/Kumargaurav126/AI-Dev-Assistant",
      },
    ],
    desc: [
      "Built a standalone MCP server with 4+ GitHub intelligence tools — LLMs can autonomously browse repos, search code, and analyze complexity.",
      "Designed an orchestration loop where the AI keeps calling tools and feeding results back into context until it has enough information to give a complete answer.",
      "GitHub OAuth2 login with AES-encrypted token storage, JWT-secured stateless sessions, and a React chat UI with an expandable file tree for navigating codebases.",
    ],
    tech: [
      "Java 21",
      "Spring Boot",
      "React",
      "MCP Server",
      "PostgreSQL",
      "GitHub OAuth2",
      "OpenRouter API",
      "JavaParser",
    ],
  },
  {
    num: "02",
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
      "Full-stack anonymous chat platform with real-time bidirectional WebSocket messaging — no accounts, no identity, just instant communication.",
      "Users get auto-generated display names on join by combining random adjective-animal pairs with a numeric suffix (e.g. SilentFox482) for a fun anonymous experience.",
      "Gemini AI summarizes long chat room threads into concise digests automatically, so users can catch up without scrolling through hundreds of messages.",
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "React",
      "WebSocket",
      "MongoDB",
      "Gemini AI API",
      "Vercel",
      "Render",
    ],
  },
  {
    num: "03",
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
      "Chrome extension that hooks into Gmail's compose window and injects an AI Reply button — generated responses land directly in the compose box, ready to send.",
      "React frontend with tone picker (formal / casual / friendly), loading states, error handling, and one-click clipboard copy — clean UX with zero friction.",
      "Spring Boot backend calls Gemini AI via non-blocking WebClient with dynamic prompt engineering to match the selected reply tone on every request.",
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "React",
      "Gemini AI API",
      "Chrome Extension",
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
