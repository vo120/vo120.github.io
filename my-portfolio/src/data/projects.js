// Single source of truth for project metadata used by the Home and
// Portfolio pages. Images are imported so the CRA build can fingerprint them.
import blogSite from "../imgPF/blog-site.gif";
import bankApp from "../imgPF/bank-app.gif";
import imageGenerator from "../imgPF/image-generator.gif";
import blockchain from "../imgPF/3DLogo.gif";
import tiktok from "../imgPF/TikTok Redesign.gif";
import chrome from "../imgPF/GoogleHomepage.jpg";
import portfolio from "../imgPF/portfolio.gif";
import chess from "../imgPF/chessgametrimmed.gif";
import notes from "../imgPF/NotesApp.gif";
import caseConverter from "../imgPF/CaseConverter.gif";

export const projects = [
  {
    slug: "blog-site",
    title: "Blog Site",
    category: "Full-Stack",
    year: "2023",
    tags: ["React", "GraphQL", "Next.js"],
    blurb: "A headless, server-rendered publishing platform.",
    image: blogSite,
    featured: true,
  },
  {
    slug: "bank-app",
    title: "Bank App",
    category: "Mobile",
    year: "2023",
    tags: ["React Native", "Expo", "TypeScript"],
    blurb: "Finances re-imagined — built in 48 hours.",
    image: bankApp,
    featured: true,
  },
  {
    slug: "image-generator",
    title: "Image Generator",
    category: "AI / ML",
    year: "2022",
    tags: ["OpenAI", "DALL·E", "JavaScript"],
    blurb: "Turning prompts into pictures with DALL·E.",
    image: imageGenerator,
    featured: true,
  },
  {
    slug: "blockchain-site",
    title: "Blockchain Site",
    category: "WebGL / 3D",
    year: "2022",
    tags: ["React-Three-Fiber", "Web3", "GLSL"],
    blurb: "A living 3D logo for a web3 client.",
    image: blockchain,
    featured: true,
  },
  {
    slug: "tiktok-redesign",
    title: "TikTok Redesign",
    category: "UX / Product",
    year: "2021",
    tags: ["UX Research", "Prototyping", "Figma"],
    blurb: "Rethinking a feed for the way people really watch.",
    image: tiktok,
    featured: true,
  },
  {
    slug: "chrome-redesign-concept",
    title: "Chrome Concept",
    category: "UI Concept",
    year: "2021",
    tags: ["UI Design", "Concept", "Figma"],
    blurb: "A calmer, cleaner browser homepage.",
    image: chrome,
    featured: false,
  },
  {
    slug: "personal-portfolio",
    title: "This Portfolio",
    category: "Design + Dev",
    year: "2026",
    tags: ["React", "GSAP", "CSS"],
    blurb: "The site you're looking at, from the ground up.",
    image: portfolio,
    featured: false,
  },
  {
    slug: "chess-app",
    title: "Chess Engine",
    category: "Software",
    year: "2021",
    tags: ["Python", "GUI", "Algorithms"],
    blurb: "A playable chess game with a Python GUI.",
    image: chess,
    featured: false,
  },
  {
    slug: "notes-app",
    title: "Notes App",
    category: "Frontend",
    year: "2021",
    tags: ["JavaScript", "UI", "Design"],
    blurb: "A focused, friction-free place to take notes.",
    image: notes,
    featured: false,
  },
  {
    slug: "case-converter",
    title: "Case Converter",
    category: "Tool",
    year: "2021",
    tags: ["JavaScript", "Utility", "UI"],
    blurb: "Switch text between cases in one click.",
    image: caseConverter,
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
