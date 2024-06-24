import projectBSHW from "../assets/img/projects/project-bshw.jpg"
import projectJobBoard from "../assets/img/projects/project-job-board.jpg"
import projectMYSA from "../assets/img/projects/project-mysa.jpg"
import projectPixelPrism from "../assets/img/projects/project-pixel-prysm.jpg"
import projectSentry from "../assets/img/projects/project-sentry.jpg"
import projectPortfolio from "../assets/img/projects/project-portfolio.jpg"

export const META_TITLE = `Pixel Prysm`;

export const INFO_TEXT = ``;

export const PROJECTS_TEXT = ``;

export const CONTACT_TEXT = ``;

export const NAVIGATION = [
  {
    title: "Blog",
    slug: "blog",
    path: "/blog",
    animation: "",
  },
  // {
  //   title: "Info",
  //   slug: "info",
  //   path: "/info",
  //   animation: "",
  // },
  {
    title: "About",
    slug: "about",
    path: "/about",
    animation: "",
  },
  {
    title: "Projects",
    slug: "projects",
    path: "/projects",
    animation: "animate-pulse",
  },
  {
    title: "Contact",
    slug: "contact",
    path: "/contact",
    animation: "",
  },
];

export const PROJECTS = [
  {
    title: "Sentry",
    image: projectSentry,
    description: "Built mobile app for public hazard reporting.",
    link: "https://sentry.ai/"
  },
  {
    title: "Job Board",
    image: projectJobBoard,
    description: "Built a job board for remote only jobs.",
    link: "https://newjobs.com/"
  },
  {
    title: "MYSA Non-profit",
    image: projectMYSA,
    description: "Build website for non-profit.",
    link: "https://mysausa.org/"
  },
  {
    title: "Berkshire Hathaway Revamp",
    image: projectBSHW,
    description: "Revamped the infamous Berkshire Hathaway website.",
    link: "https://berkshirehathawayrevamped.com/"
  },
  {
    title: "Portfolio Website",
    image: projectPortfolio,
    description:
      "Personal portfolio website showcasing projects, skills, and contact information.",
    link: "https://karisakib.com/"
  },
  {
    title: "Pixel Prysm",
    image: projectPixelPrism,
    description: "Pixel Prysm agency website.",
    link: "https://pixelprysm.com/"
  },
];
