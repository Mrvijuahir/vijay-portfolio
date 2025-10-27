import {
  NavLinkTypes,
  SocialLinkTypes,
  ExternalLinksTypes,
  ExperienceDetailTypes,
  SkillDetailTypes,
  ProjectDetailTypes,
  TestimonialDetailTypes,
} from "./types";

export const EXTERNAL_LINKS: ExternalLinksTypes = {
  GITHUB_REPO: "https://github.com/Mrvijuahir/vijay-portfolio",
};

export const NAV_LINKS: NavLinkTypes[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLinkTypes[] = [
  {
    icon: "/images/logos/github-light.svg",
    darkModeIcon: "/images/logos/github-dark.svg",
    url: "https://github.com/Mrvijuahir",
    iconAlt: "GitHub Icon",
  },
  {
    icon: "/images/logos/gitlab.svg",
    url: "https://gitlab.com/vijuahir2096",
    iconAlt: "GitLab Icon",
  },
  {
    icon: "/images/logos/upwork-logo.png",
    url: "https://www.upwork.com/freelancers/~011eb6d62cfbadfed1?mp_source=share",
    iconAlt: "Upwork Icon",
  },
  {
    icon: "/images/logos/linkedin-logo.png",
    url: "https://www.linkedin.com/in/vijay-puchhadiya/",
    iconAlt: "LinkedIn Icon",
  },
  {
    icon: "/images/logos/hackerrank.svg",
    url: "http://www.hackerrank.com/profile/vahir9487",
    iconAlt: "HackerRank Icon",
  },
];

export const EXPERIENCES: ExperienceDetailTypes[] = [
  {
    logo: "/images/logos/upwork.svg",
    logoAlt: "Upwork logo",
    url: "https://www.upwork.com/freelancers/~011eb6d62cfbadfed1?mp_source=share",
    position: "Freelancer",
    startDate: new Date(2024, 6),
    currentlyWorkHere: true,
    showLinkToProfileIcon: true,
    width: 100,
    height: 40,
    summary: [
      "Building on the experience I gained at ManekTech, I stepped into full-time freelancing to push my technical limits and take on diverse, real-world challenges.",
      "Through global client collaborations, I strengthened my Full-Stack expertise with React, Next.js, Node.js, Nest.js, MySQL, and PostgreSQL, while also expanding into Laravel for backend development.",
    ],
  },
  {
    logo: "/images/logos/mt.svg",
    logoAlt: "ManekTech logo",
    url: "https://www.manektech.com/",
    position: "Full Stack Developer",
    startDate: new Date(2024, 3),
    endDate: new Date(2025, 5),
    width: 40,
    height: 40,
    summary: [
      "Following my time at IIH Global, I joined ManekTech as a Full-Stack Web Developer, where I continued working with my core tech stack — React, Next.js, Node.js, and Nest.js — while expanding my skills with advanced tools such as GraphQL, Serverless Framework, and AWS Lambda.",
      "At ManekTech, I had the opportunity to work on building scalable, serverless architectures and API-driven applications, further strengthening both my technical expertise and my ability to deliver efficient, real-world solutions.",
    ],
  },
  {
    logo: "/images/logos/iih-global.png",
    darkModeLogo: "/images/logos/iih-global-dark.png",
    logoAlt: "IIH Global logo",
    url: "https://www.iihglobal.com/",
    position: "Full Stack Developer",
    startDate: new Date(2021, 4),
    endDate: new Date(2024, 2),
    width: 100,
    height: 40,
    summary: [
      "I started my career as a Full-Stack Web Developer at IIH Global, my first company, where I built a strong technical foundation working with React, Next.js, Node.js, Nest.js, MySQL, PostgreSQL, and AWS.",
      "The experience I gained there was instrumental in shaping both my skills and professional mindset.",
    ],
  },
];

export const SKILLS: SkillDetailTypes[] = [
  {
    label: "Javascript",
    logo: "/images/logos/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: "/images/logos/typescript.svg",
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: "/images/logos/react.svg",
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: "/images/logos/nextjs.svg",
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: "/images/logos/nodejs.svg",
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: "/images/logos/express.svg",
    darkModeLogo: "/images/logos/express-light.svg",
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: "/images/logos/nest.svg",
    url: "https://nestjs.com/",
  },
  {
    label: "Socket.io",
    logo: "/images/logos/socket.svg",
    darkModeLogo: "/images/logos/socket-light.svg",
    url: "https://socket.io/",
  },
  {
    label: "MySQL",
    logo: "/images/logos/mysql.svg",
    url: "https://www.mysql.com/",
  },
  {
    label: "PostgreSQL",
    logo: "/images/logos/postgresql.svg",
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: "/images/logos/mongodb.svg",
    url: "https://www.mongodb.com/",
  },
  {
    label: "Redis",
    logo: "/images/logos/redis.svg",
    url: "https://redis.io/",
  },
  {
    label: "Sequelize",
    logo: "/images/logos/sequelize.svg",
    url: "https://sequelize.org/",
  },
  {
    label: "Mongoose",
    logo: "/images/logos/mongoose.svg",
    url: "https://mongoosejs.com/",
  },
  {
    label: "HTML",
    logo: "/images/logos/html.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    label: "CSS",
    logo: "/images/logos/css.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    label: "Sass/Scss",
    logo: "/images/logos/sass.svg",
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: "/images/logos/tailwindcss.svg",
    url: "https://tailwindcss.com/",
  },
  {
    label: "Material UI",
    logo: "/images/logos/mui.svg",
    url: "https://mui.com/",
  },
  {
    label: "Redux",
    logo: "/images/logos/redux.svg",
    url: "https://redux.js.org/",
  },
  {
    label: "Open AI",
    logo: "/images/logos/openai.svg",
    url: "https://platform.openai.com/",
  },
  {
    label: "AWS",
    logo: "/images/logos/aws.svg",
    url: "https://aws.amazon.com/",
  },
  {
    label: "Vercel",
    logo: "/images/logos/vercel.svg",
    url: "https://vercel.com/",
  },
  {
    label: "Strapi",
    logo: "/images/logos/strapi.svg",
    url: "https://strapi.io/",
  },
  {
    label: "Laravel (Basic)",
    logo: "/images/logos/laravel.svg",
    url: "https://laravel.com/",
  },
  {
    label: "Git",
    logo: "/images/logos/git.svg",
    url: "https://git-scm.com/",
  },
];

export const PROJECTS: ProjectDetailTypes[] = [
  {
    name: "Giveable.AI",
    description:
      "The simplest tool Used by Non-Profits / Churches / Creators / Fundraisers to track giving, automate outreach & follow up with members",
    url: "https://www.giveable.ai/",
    previewImage: "/images/projects/giveable.png",
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "OpenAI API",
      "Stripe",
      "Material UI",
    ],
    title: "Full Stack Developer",
  },
  {
    name: "Bookify.AI",
    description:
      "We built a platform that allows users to interact with PDFs, books, documents, websites, YouTube videos, and more using AI-powered chat. Designed for students, researchers, and professionals, this tool transforms the way people learn and access information by enabling seamless AI-driven conversations with various content sources.",
    url: "https://www.bookify.ai/",
    previewImage: "/images/projects/bookify.png",
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "OpenAI API",
      "Stripe",
      "Material UI",
    ],
    title: "Full Stack Developer",
  },
  {
    name: "Fastly.AI",
    description:
      "An AI-powered conversational platform inspired by ChatGPT, enhanced with custom features like creating question-answer lists and predefined focused areas for targeted AI responses. It offers users a more structured, controlled, and interactive chatbot experience.",
    url: "https://www.fastly.ai/en/",
    previewImage: "/images/projects/fastly.png",
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "OpenAI API",
      "Stripe",
      "Material UI",
    ],
    title: "Full Stack Developer",
  },
  {
    name: "FinishLine.AI",
    description:
      "FinishLine is a task management system designed for efficient team collaboration. It includes time tracking, real-time chat, and an instant meeting feature for seamless communication. With a focus on productivity, it helps teams stay organized and connected.",
    url: "https://www.finishline.ai/",
    previewImage: "/images/projects/finishline.png",
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "WebRTC",
      "Stripe",
      "Material UI",
    ],
    title: "Full Stack Developer",
  },
  {
    name: "Boltify.AI",
    description:
      "Boltify is a lead management system that automates meetings through cold calls and follow-ups from Google Maps. Designed for agencies, teams, startups, and B2B businesses, it streamlines lead generation and engagement with local businesses, making the process faster and more efficient.",
    url: "https://www.boltify.ai/",
    previewImage: "/images/projects/boltify.png",
    technologies: [
      "Next.js",
      "Laravel",
      "MySQL",
      "Google Places API",
      "Stripe",
      "Material UI",
    ],
    title: "Full Stack Developer",
  },
  {
    name: "TenFund",
    description:
      "A digital platform that connects businesses, startups, or individuals with potential investors and funding opportunities. It streamlines the process of raising capital by offering secure, transparent, and efficient tools for managing funding rounds.",
    url: "https://tenfund.org/",
    previewImage: "/images/projects/tenfund.png",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "AWS Lambda",
      "Serverless Framework",
      "PostgreSQL",
      "Banquest",
      "Material UI",
    ],
    title: "Full Stack Developer",
  },
  {
    name: "YumyHub",
    description:
      "YumyHub is a subscription-based social platform that provides exclusive access to content from your favorite creators. It enables users to engage with unique, premium content across various categories.",
    url: "https://yumyhub.com/",
    previewImage: "/images/projects/yumyhub.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.io",
      "Material UI",
      "Stripe",
      "MassPay",
      "Cosmo",
      "NETbilling",
      "Actum Processing",
      "AWS",
    ],
    title: "Full Stack Developer",
  },
  {
    name: "StockPe",
    description:
      "StockPe is a stock market learning platform that gamifies trading with real-time market data. It allows users to participate in virtual stock market competitions and improve their trading skills risk-free. I contributed to this project as a backend developer, ensuring seamless data handling, API integrations, and system performance.",
    url: "https://stockpe.app/",
    previewImage: "/images/projects/stockpe.png",
    technologies: ["Node.js", "Express.js", "MySQL", "Socket.io", "Razorpay"],
    title: "Back-end Developer",
  },
  {
    name: "Khelnet",
    description:
      "Khelnet is a sports academy management platform that helps academies streamline student and staff management, including attendance, fees, and reminders. I contributed as a backend developer, handling APIs and system optimization.",
    url: "https://www.khelnet.in/",
    previewImage: "/images/projects/khelnet.png",
    technologies: ["Node.js", "Express.js", "MySQL", "Socket.io", "Razorpay"],
    title: "Back-end Developer",
  },
  {
    name: "Diyan Papers",
    description:
      "The Diyan Papers Stock Management System is an admin panel for managing inventory, stock, and orders efficiently. It streamlines stock tracking, procurement, and distribution.",
    url: "",
    previewImage: "/images/projects/diyan_papers.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Material UI",
      "Vuexy",
      "Socket.io",
    ],
    title: "Full Stack Developer",
  },
  {
    name: "Care Homeopathy Clinic",
    description:
      "I developed a website for a homeopathy clinic to showcase their treatments and provide an easy way for users to get in touch through a contact form. Additionally, I integrated an AI chatbot that leverages the clinic's treatment data to answer users' health-related queries in real time, enhancing engagement and accessibility.",
    url: "https://www.carehomeopathyclinic.com/",
    previewImage: "/images/projects/care_homeopathy_clinic.png",
    technologies: [
      "Next.js",
      "React",
      "OpenAI",
      "Voiceflow",
      "Vercel",
      "Material UI",
      "Swiper",
      "Emailjs",
    ],
    title: "Front-end Developer",
  },
];

export const TESTIMONIALS: TestimonialDetailTypes[] = [
  {
    personName: "Pratik Kansagara",
    personAvatar: "/images/client-profile-pictures/pratik-kansagara.jpeg",
    title: "Clinic Owner",
    rating: 5,
    testimonial:
      "Vijay and his team did great job for our clinic website, I see his expertise and knowledge about implementing ideas with the latest technology, very excellent job done by you guys.",
  },
];
