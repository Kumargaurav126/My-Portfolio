export const RESUME_LINK =
  "https://drive.google.com/file/d/1iKGou63Pnmju0H7MzFBpk4suw23vZzik/view?usp=sharing";
export const RESUME_DOWNLOAD_LINK = "/Kumar_Gaurav_Resume.pdf";

// ── Skills ────────────────────────────────────────────────────────────────────
export const SKILLS = [
  { cat: "Languages", tags: ["Java", "SQL", "C++"] },
  {
    cat: "Backend",
    tags: [
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "Spring Data JPA",
      "RESTful APIs",
      "Microservices",
      "MCP (Model Context Protocol)",
    ],
  },
  {
    cat: "Frontend",
    tags: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  { cat: "Security", tags: ["Spring Security", "JWT", "OAuth 2.0"] },
  { cat: "Cloud & DevOps", tags: ["AWS", "Docker"] },
  { cat: "Databases", tags: ["PostgreSQL", "MongoDB"] },
  {
    cat: "Tools",
    tags: ["Git", "GitHub", "Maven", "Postman", "IntelliJ IDEA", "VS Code"],
  },
  {
    cat: "Core Concepts",
    tags: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "DBMS",
      "Operating Systems",
      "SDLC",
      "System Design",
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    num: "1",
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
      "Engineered a modular 3-tier architecture — React frontend, Spring Boot backend, and standalone MCP server — enabling LLMs to autonomously navigate and analyze repository source code.",
      "Built 4+ GitHub intelligence tools (file reading, code search, complexity analysis, PR diffing) exposed via MCP, enabling iterative tool invocation and context-aware repository analysis.",
      "Implemented GitHub OAuth2 authentication with AES-encrypted token storage and JWT authorization, enabling secure AI interactions with private GitHub repositories.",
    ],
    tech: [
      "Java 21",
      "Spring Boot",
      "React",
      "MCP Server",
      "PostgreSQL",
      "GitHub OAuth2",
      "OpenRouter API",
    ],
  },
  {
    num: "2",
    name: "Incognito Campus",
    sub: "Real-Time Anonymous Messaging Platform",
    links: [
      {
        icon: "fas fa-external-link-alt",
        label: "Live Demo",
        href: "https://incognito-campus-frontend.vercel.app/",
      },
    ],
    desc: [
      "Developed an anonymous identity generation system creating 400K+ unique username combinations using adjective-animal pairs with randomized numeric suffixes.",
      "Integrated Gemini AI API to automatically summarize chat room conversations, grouping multiple messages into concise digests for quick review.",
      "Deployed full-stack app with React on Vercel and Spring Boot on Render using Docker, with MongoDB Atlas as the cloud database.",
    ],
    tech: [
      "Java 17",
      "Spring Boot",
      "React",
      "WebSocket",
      "MongoDB",
      "Gemini AI API",
      "Docker",
      "Vercel",
      "Render",
    ],
  },
  {
    num: "3",
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
    title: "750+ DSA Problems",
    desc: "Solved 750+ problems of varying difficulties across multiple platforms.",
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
    icon: "🏆",
    title: "Max LeetCode Rating 1700",
    desc: "Achieved a max contest rating of 1673 on LeetCode.",
    links: [
      {
        label: "LeetCode Profile",
        href: "https://leetcode.com/u/Kumargaurav12/",
      },
    ],
  },
  {
    icon: "⭐",
    title: "5-Star Java · HackerRank",
    desc: "Proficiency across core and advanced Java programming challenges.",
    links: [
      {
        label: "HackerRank Profile",
        href: "https://www.hackerrank.com/profile/kumargaurav12",
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
