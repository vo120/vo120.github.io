// Full case-study content for each project, keyed by slug.
// The base card data (title, category, year, tags, cover image) lives in
// projects.js; this adds the long-form detail, links and galleries.

// blog
import blogGif from "../imgPF/blog-site.gif";
import blogHome from "../imgPF/blog-site-home-page.png";
import blogPost from "../imgPF/blog-site-post-page.png";
// bank
import bankGif from "../imgPF/bank-app.gif";
import bankCover from "../imgPF/bank-cover.png";
import bankHome from "../imgPF/bank-home.png";
import bankBalance from "../imgPF/bank-balance.png";
// image generator
import imgGen from "../imgPF/image-generator.gif";
// blockchain
import threeDLogo from "../imgPF/3DLogo.gif";
import threeDResponsive from "../imgPF/3DResponsive.gif";
// tiktok
import ttOriginal from "../imgPF/Original Design.png";
import ttOriginalCC from "../imgPF/Original with CC.png";
import ttRedesign from "../imgPF/TikTok Redesign.gif";
import ttCover from "../imgPF/cover.png";
import ttClosed from "../imgPF/ClosedBottom&SideSheet.JPG";
import ttOpenBtm from "../imgPF/OpenBottomSheet.JPG";
import ttOpenSide from "../imgPF/OpenSideSheet.JPG";
import ttOpenBoth from "../imgPF/OpenBottom&SideSheetModal.JPG";
// chrome
import chromeHome from "../imgPF/GoogleHomepage.jpg";
import chromeT from "../imgPF/T_shaped.jpg";
import chromeColStacked from "../imgPF/columntostacked.jpg";
import chromeStackedCol from "../imgPF/stackedtocolumn.jpg";
import chromeStacked from "../imgPF/stackedview.jpg";
import chromeSide from "../imgPF/sidebyside.jpg";
// portfolio
import portfolioGif from "../imgPF/portfolio.gif";
// chess
import chessGame from "../imgPF/chessgame.png";
import chessGif from "../imgPF/chessgametrimmed.gif";
// notes
import notesEmpty from "../imgPF/EmptyNotes.png";
import notesOpen from "../imgPF/NotesAppOpenPage.png";
import notesIn from "../imgPF/NoteInNotesApp.png";
import notesGif from "../imgPF/NotesApp.gif";
// case converter
import ccProper from "../imgPF/ProperCase.png";
import ccUpper from "../imgPF/UpperCase.png";
import ccSentence from "../imgPF/Sentence Case.png";
import ccLower from "../imgPF/LowerCase.png";
import ccGif from "../imgPF/CaseConverter.gif";

export const caseStudies = {
  "blog-site": {
    role: "Full-Stack Engineer",
    timeline: "Feb 2023",
    intro:
      "A project to learn Next.js & GraphQL — so I built a blog with it. I used GraphCMS for the data schema and content, Next.js & React for the frontend and routing, and GraphQL to fetch and render the data.",
    body: [
      "I learned Next.js & GraphQL on the same day that I built this. (The trickiest part was getting the font to look identical in production as it did in development — as my many commits can attest. 🤦🏽‍♀️)",
    ],
    links: [
      { label: "View live site", href: "https://vanessa-blog-site.vercel.app" },
    ],
    gallery: [
      { src: blogGif, caption: "Blog site in action" },
      { src: blogHome, caption: "Home page" },
      { src: blogPost, caption: "Blog post page" },
    ],
  },

  "bank-app": {
    role: "Frontend Engineer",
    timeline: "7–9 Feb 2023",
    intro:
      "A concept for a modern bank app. I wanted to experiment with a clean, modernistic look and feel for personal finance.",
    body: [
      "I learned React Native & Expo just two days before building this. I wanted to challenge myself and put my skills to the test, brushing up on TypeScript along the way.",
      "Note: on iPhone you'll need to sign into the Expo Go app after downloading it.",
    ],
    links: [
      { label: "View code", href: "https://github.com/vo120/Bank-App" },
      {
        label: "Try on Expo",
        href: "https://expo.dev/@vo120/bank-app?serviceType=classic&distribution=expo-go",
      },
    ],
    gallery: [
      { src: bankCover, caption: "Welcome screen" },
      { src: bankHome, caption: "Home screen" },
      { src: bankBalance, caption: "Balance screen" },
      { src: bankGif, caption: "Bank app in action" },
    ],
  },

  "image-generator": {
    role: "Full-Stack Engineer",
    timeline: "Jan 2023",
    intro:
      "With AI everywhere, I built an image generator. Using OpenAI's DALL·E API, the app creates a unique image from the user's text prompt — regenerate the same prompt and you get a brand-new image. Every image is AI-generated, not pulled from the internet.",
    body: [
      "For the backend I used Node.js and Express.js with the OpenAI-Node package. For the frontend, plain HTML, CSS & JavaScript.",
    ],
    links: [
      {
        label: "View live site",
        href: "https://image-generator-app-vo120.vercel.app/",
      },
    ],
    gallery: [{ src: imgGen, caption: "Image generator in action" }],
  },

  "blockchain-site": {
    role: "Frontend Engineer",
    timeline: "Aug – Dec 2022",
    intro:
      "A client wanted help building their blockchain / web3 company website. Alongside a team of engineers, I helped build it with a PERN stack — owning much of the frontend, including the interactive 3D logo and the internal client dashboard sidebars, plus guidance on user journeys and flows.",
    body: [
      "I learned React-Three-Fiber to build the 3D logo. I chose three dodecahedron shapes to capture the theme of blockchain technology; hovering over each changes its color and scales it up for a sense of interactivity. I also made the logo fully responsive for mobile.",
      "The client requested privacy, so I can only share the 3D-logo feature shown here — no name or identifying details from the front page.",
    ],
    links: [],
    gallery: [
      { src: threeDLogo, caption: "3D logo on the front page" },
      { src: threeDResponsive, caption: "3D responsiveness" },
    ],
  },

  "tiktok-redesign": {
    role: "UX Designer & Researcher",
    timeline: "Spring 2020 → Feb 2022",
    intro:
      "When quarantine hit in 2020, TikTok exploded — but it wasn't very accessible. User-typed closed captions overlapped the video's own captions, hurting the experience, especially for people with hearing disabilities. After seeing this confirmed by deaf creators, I set out to redesign TikTok to be more accessible.",
    body: [
      "I originally started in Figma back in 2020 but didn't yet know the tool, so I focused on research first. I later taught myself enough Figma to redesign TikTok in two days — starting with a low-fidelity wireframe and translating it into a working prototype. The goal: make TikTok more usable, equitable, useful and enjoyable for all users.",
    ],
    links: [
      {
        label: "View Figma prototype",
        href: "https://www.figma.com/community/file/1074501002749472433?preview=fullscreen",
      },
    ],
    gallery: [
      { src: ttOriginal, caption: "Original design" },
      { src: ttOriginalCC, caption: "Original design with closed captions" },
      { src: ttRedesign, caption: "Redesign in action" },
      { src: ttCover, caption: "Redesign mockup" },
      { src: ttClosed, caption: "Closed bottom & side sheet — wireframe" },
      { src: ttOpenBtm, caption: "Open bottom sheet — wireframe" },
      { src: ttOpenSide, caption: "Open side sheet — wireframe" },
      { src: ttOpenBoth, caption: "Open bottom & side sheet — wireframe" },
    ],
  },

  "chrome-redesign-concept": {
    role: "UX Engineer",
    timeline: "Mar 2022 → ongoing",
    intro:
      "Split-screen views are common across operating systems, but I hadn't seen the pattern inside Google Chrome — so why not integrate it? I empathized with users who constantly switch back and forth between tabs and explored an optional split-view feature designed to be equitable, usable, enjoyable and useful.",
    body: [
      "I ideated and produced the wireframes shown here. A Figma mockup and a coded prototype are still to come — stay tuned.",
    ],
    links: [],
    gallery: [
      { src: chromeHome, caption: "Google search homepage" },
      { src: chromeT, caption: "T-shaped tab view" },
      { src: chromeColStacked, caption: "Column-to-stacked tab view" },
      { src: chromeStackedCol, caption: "Stacked-to-column tab view" },
      { src: chromeStacked, caption: "Stacked tab view" },
      { src: chromeSide, caption: "Side-by-side tab view" },
    ],
  },

  "personal-portfolio": {
    role: "UX Engineer",
    timeline: "Feb 2022 → 2026",
    intro:
      "While sick with COVID, I decided to build my personal portfolio from scratch — to showcase my work and put my front-end skills to the test. I'd learned HTML, CSS & JavaScript a month prior, and picked up jQuery & Bootstrap along the way, plus how to make it responsive.",
    body: [
      "In about 1.5 days I had most of the site up and running, adding finishing touches over the following days.",
      "Update (Dec 2022): rebuilt with React.js & Webpack.",
      "Update (2026): fully redesigned with a new editorial design system, custom cursor, scroll-driven motion and a rebuilt case-study layout — the site you're looking at now.",
    ],
    links: [],
    gallery: [{ src: portfolioGif, caption: "Portfolio front page in action" }],
  },

  "chess-app": {
    role: "Software Engineer",
    timeline: "Aug – Dec 2021",
    intro:
      "I play a lot of chess, so for my first software-engineering school project I thought: why not build a chess engine from scratch? Having only ever used Python for statistics, I built the game with Python's GUI.",
    body: [
      "While learning data structures and algorithms, I put the theory straight to work building the game. I planned the whole project — gathering requirements, the design phase, the MVC and the algorithms. The source code, MVC and project plan are on my GitHub.",
    ],
    links: [{ label: "View on GitHub", href: "https://github.com/vo120" }],
    gallery: [
      { src: chessGame, caption: "Chess game" },
      { src: chessGif, caption: "Chess game in action" },
    ],
  },

  "notes-app": {
    role: "Software Engineer",
    timeline: "Jan 2022",
    intro:
      "At the start of 2022 I taught myself HTML, CSS & JavaScript. Once I felt comfortable, I built a notes app that can add multiple notes, delete them, and undo.",
    body: [],
    links: [],
    gallery: [
      { src: notesEmpty, caption: "Empty notes" },
      { src: notesOpen, caption: "Open page" },
      { src: notesIn, caption: "Notes in the app" },
      { src: notesGif, caption: "Notes app in action" },
    ],
  },

  "case-converter": {
    role: "Software Engineer",
    timeline: "Jan 2022",
    intro:
      "While teaching myself HTML, CSS & JavaScript through resources like JetBrains Academy, I built this case converter as a capstone. It converts text into sentence case, proper case, lower case and uppercase.",
    body: [],
    links: [],
    gallery: [
      { src: ccProper, caption: "Proper case" },
      { src: ccUpper, caption: "Uppercase" },
      { src: ccSentence, caption: "Sentence case" },
      { src: ccLower, caption: "Lowercase" },
      { src: ccGif, caption: "Case converter in action" },
    ],
  },
};
