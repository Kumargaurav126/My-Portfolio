export const RESUME_LINK =
  "https://drive.google.com/file/d/15qJbS1mBgdH7J9D1tssIUwWtz00P_Kpo/view?usp=sharing";

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
      "Standalone MCP server exposes GitHub as AI-callable tools (file reading, code search, complexity analysis) — LLM autonomously navigates codebases in response to natural language queries.",
      "Tool-call orchestration loop: AI iteratively invokes MCP tools and feeds results back until it has sufficient context to answer, mirroring Claude Desktop's internal architecture.",
      "GitHub OAuth2 with AES-encrypted token storage, stateless JWT auth, and React chat UI with expandable file tree explorer.",
    ],
    tech: [
      "Java 21",
      "Spring Boot",
      "React.js",
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
      "Engineered a full-stack anonymous chat platform enabling real-time bidirectional communication via WebSocket for instant message delivery.",
      "Auto-generated anonymous display names at registration by randomly combining adjective-animal pairs with a numeric suffix (e.g. SilentFox482).",
      "Integrated Gemini AI API to automatically summarize chat room conversations, grouping multiple messages into concise digests for quick review.",
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "React.js",
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
      "Built a Chrome extension that detects Gmail's dynamic compose window, injecting an AI Reply button into the toolbar and writing generated replies directly into the compose box.",
      "Developed a React frontend with tone selection, loading state handling, error feedback, and one-click clipboard copy for generated replies.",
      "Integrated Gemini AI API via Spring WebClient for non-blocking HTTP calls with dynamic prompt engineering to support configurable reply tones (formal, casual, friendly).",
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "React.js",
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
