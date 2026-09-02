export const siteConfig = {
  name: "Abdullah Asim",
  title: "Abdullah Asim | Frontend Developer",
  role: "Frontend Developer",
  location: "Karachi, Pakistan",
  email: "malikabdullahmalik14@gmail.com",
  availability: "Available for work",
  yearsExperience: "3+",
  description:
    "MERN stack & frontend developer from Karachi, Pakistan — building modern web apps with React, Next.js, and Node.js. Upwork Top Rated with 100% Job Success.",
  keywords: [
    "Abdullah Asim",
    "Frontend developer",
    "MERN Stack",
    "Karachi",
    "Pakistan",
    "React",
    "Next.js",
    "TypeScript",
    "Upwork Top Rated",
    "UI/UX",
    "Web development",
    "Portfolio",
  ],
  social: {
    github: "https://github.com/abdullahmalik14",
    linkedin: "https://www.linkedin.com/in/abdullah-asim-264ab0227/",
  },
  resume: "/Abdullah.pdf",
} as const;

export const navLinks = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Services", hash: "#services" },
  { name: "Contact", hash: "#contact" },
] as const;

export const heroContent = {
  eyebrow: "MERN Stack · Frontend Engineer",
  headline: ["Building interfaces", "that feel effortless."],
  subheadline:
    "I'm Abdullah Asim — a MERN stack developer based in Karachi, crafting modern React & Next.js experiences with performance, clarity, and polish. Upwork Top Rated · 100% Job Success.",
  stats: [
    { label: "Years experience", value: "3+" },
    { label: "Upwork", value: "Top Rated" },
    { label: "Job Success", value: "100%" },
  ],
} as const;

export const aboutContent = {
  heading: "About",
  intro:
    "I'm Abdullah Asim, a frontend & MERN stack developer with 4 years of experience designing and shipping responsive, user-centric, performance-optimized web applications.",
  paragraphs: [
"Highly skilled in React.js, Next.js, Vue.js, WordPress, WooCommerce, and the MERN stack. I turn complex requirements into seamless digital experiences through clean, maintainable code and thoughtful component architecture.",
"I build SaaS dashboards, ecommerce storefronts, real estate websites, and product UIs with strong UI/UX principles, Tailwind CSS / Material UI, REST APIs, WordPress / WooCommerce, and deployment on Vercel and Netlify.",   
"Alongside agency work, I freelanced on Upwork as a Top Rated freelancer with 100% Job Success, delivering high-quality products for clients worldwide.",
"I'm open to opportunities where I can contribute, learn, and grow. If you have a role that matches my skills, let's talk."
  ],
  values: [
    {
      title: "Clarity first",
      description:
        "Interfaces should feel obvious. I design for readability, hierarchy, and calm interaction.",
    },
    {
      title: "Performance minded",
      description:
        "Fast loads and smooth motion aren't extras — they're part of the product experience.",
    },
    {
      title: "Full-stack awareness",
      description:
        "I collaborate across the stack and can own Node.js APIs when the product needs it.",
    },
  ],
  journey: [
    { year: "2023", title: "Freelance begins", detail: "Design + Next.js builds for clients" },
    { year: "2024", title: "Pluton", detail: "Frontend engineer — React, Next.js, SEO UX" },
    { year: "2024–25", title: "Techsinc", detail: "MERN stack — React, Next.js, Node.js APIs" },
    {
      year: "Ongoing",
      title: "Upwork · Top Rated",
      detail: "Freelance MERN developer — 100% Job Success, $9K+ earned, 1,750+ hours",
    },
    { year: "Now", title: "Open to work", detail: "Seeking impactful frontend / product roles" },
  ],
} as const;

export const experiences = [

  {
    title: "Frontend Developer",
    company: "Pluton",
    location: "Pakistan",
    period: "March 2024 — October 2024",
    description:
      "Built and maintained web applications with React.js and Next.js. Developed reusable UI components, optimized page performance, and delivered responsive, SEO-friendly experiences in close collaboration with design and backend teams.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Material UI",
      "Bootstrap",
      "Git",
    ],
  },
  {
    title: "MERN Stack Developer",
    company: "Techsinc",
    location: "Pakistan",
    period: "November 2024 — June 2025",
    description:
      "Built dynamic, responsive web applications across the MERN stack with React.js and Next.js. Owned reusable UI systems, UX improvements, and API integration. Also handled Node.js backend work — CRUD, REST APIs, and third-party services — ensuring efficient data flow across the stack.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Material UI",
      "Bootstrap",
      "Git",
    ],
  },
 
  {
    title: "MERN Stack Developer",
    company: "Upwork",
    location: "Remote",
    period: "2023 — Present",
    description:
      "Top Rated Upwork freelancer with 100% Job Success ($9K+ earned, 1,750+ hours). Built and shipped SaaS products, ecommerce experiences, and full-stack MERN apps for global clients. Owned work end-to-end — UI systems in React, Next.js, and Vue.js, Node.js APIs, MongoDB, and polished delivery from Figma to production — with a strong focus on quality and client satisfaction.",
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "React Native",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "WordPress",
      "WooCommerce",
      "Figma",
      "Git",
    ],
  },
] as const;

export const projects = [
  {
    slug: "aurelia-estates",
    title: "Aurelia Estates",
    featured: true,
    image: "/images/aurelia-estates.png",
    tagline: "Luxury real estate platform with a premium, editorial experience.",
    description:
      "Designed and developed a high-end real estate website for curating exceptional residences. Full-bleed hero photography, refined typography, and polished CTAs create a luxury brand feel — built as a modern, responsive Next.js experience.",
    highlights: [
      "Full-bleed cinematic hero with brand-forward typography",
      "Property discovery and consultation-focused CTAs",
      "Premium gold accent system on dark cinematic imagery",
      "Fully responsive across desktop, tablet, and mobile",
    ],
    stats: [
      { label: "Type", value: "Real Estate" },
      { label: "Focus", value: "Luxury UI" },
      { label: "Role", value: "Frontend" },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://aurelia-states.vercel.app/",
    githubUrl: "https://github.com/abdullahmalik14",
  },
  {
    slug: "hr-management",
    title: "HR Management System",
    featured: true,
    image: "/images/project-1.jpg",
    tagline: "MERN system for attendance, leave, and shift workflows.",
    description:
      "Full-stack employee management system built with the MERN stack. Simplifies attendance tracking, leave requests, and shift scheduling for employees with admin control over data and schedules.",
    highlights: [
      "Attendance, leave, and shift modules",
      "Employee + admin experiences",
      "Clean modular architecture",
      "Real-time data updates",
    ],
    stats: [
      { label: "Stack", value: "MERN" },
      { label: "Domain", value: "HR Tech" },
      { label: "Role", value: "Full-stack" },
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
    liveUrl: "https://hr.clikkle.com/",
    githubUrl: "https://github.com/abdullahmalik14",
  },
] as const;

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "React Native",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "WordPress",
      "WooCommerce",
    ],
  },
  {
    name: "Backend & Data",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth"],
  },
  {
    name: "Tools & Delivery",
    skills: ["Git", "GitHub", "Figma", "Vercel", "Netlify", "Upwork"],
  },
] as const;

export const techStack = [
  { name: "React", category: "UI" },
  { name: "Next.js", category: "Framework" },
  { name: "Vue.js", category: "UI" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Material UI", category: "Styling" },
  { name: "Node.js", category: "Runtime" },
  { name: "MongoDB", category: "Database" },
  { name: "Express", category: "API" },
  { name: "Git", category: "Workflow" },
  { name: "Figma", category: "Design" },
  { name: "Vercel", category: "Deploy" },
  { name: "WordPress", category: "CMS" },
  { name: "WooCommerce", category: "Ecommerce" },
] as const;

export const services = [
  {
    title: "Frontend Engineering",
    description:
      "Production React, Next.js, and Vue.js interfaces — component systems, responsive layouts, and polished interaction design.",
  },
  {
    title: "SaaS Product Builds",
    description:
      "Dashboards, multi-tenant flows, and scalable UI systems for SaaS products — from MVP to production polish.",
  },
  {
    title: "Ecommerce Experiences",
    description:
      "Storefronts, product pages, carts, and conversion-focused UI for ecommerce brands that need speed and clarity.",
  },
  {
    title: "Full-stack Web Apps",
    description:
      "End-to-end MERN product slices with Node.js APIs, MongoDB, auth flows, and clean frontend-backend integration.",
  },
] as const;

export const achievements = [
  {
    title: "Upwork Top Rated · 100% Job Success",
    description:
      "Trusted freelancer with $8K+ earned and 1,570+ hours delivered consistent quality and client satisfaction.",
  },
  {
    title: "3+ years shipping products",
    description:
      "Consistent delivery across Upwork, Pluton, and Techsinc from reusable UI systems to production releases.",
  },
  {
    title: "SaaS & ecommerce delivery",
    description:
      "Shipped SaaS dashboards and ecommerce experiences alongside MERN apps focused on UX, conversion, and maintainable code.",
  },
  {
    title: "Full-stack MERN capability",
    description:
      "Beyond UI: Node.js CRUD, REST APIs, JWT auth, and third-party integrations when products need it.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Abdullah delivered a clean, responsive interface and was easy to collaborate with throughout the build.",
    name: "Client Name",
    role: "Product Lead",
    placeholder: true,
  },
  {
    quote:
      "Strong React fundamentals and a clear eye for UX details. Communication was reliable and professional.",
    name: "Collaborator Name",
    role: "Engineering Partner",
    placeholder: true,
  },
  {
    quote:
      "Took ownership from design handoff to a polished Next.js delivery. Would work together again.",
    name: "Stakeholder Name",
    role: "Founder",
    placeholder: true,
  },
] as const;

export const contactContent = {
  heading: "Let's build something sharp.",
  description:
    "Have a role, project, or collaboration in mind? Reach out directly or send a message — I typically respond within 24–48 hours.",
  cta: "Start a conversation",
} as const;
