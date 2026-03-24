import type { SiteContent } from "../types/content";

export const siteContent: SiteContent = {
  nav: [
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "snapshot", label: "Snapshot" },
    { id: "contact", label: "Contact" }
  ],
  hero: {
    eyebrow: "FULL-STACK ENGINEER IN VANCOUVER",
    title: ["Shipping scalable,", "user-first", "products."],
    description:
      "Full-stack engineer in Vancouver building modern web apps, cloud systems, and polished product experiences.",
    primaryActionLabel: "See My Work",
    secondaryActionLabel: "Let's Build",
    metadata: ["3+ years in software engineering", "React", "Node.js", "AWS"],
    highlights: ["Full-stack", "System-minded", "Cloud-driven"]
  },
  featuredProjects: [
    {
      id: "serverless-shoe",
      name: "Serverless Shoe Website",
      role: "Full-stack / Cloud Architecture Case Study",
      timeframe: "React storefront + 15+ AWS services",
      summary:
        "A serverless commerce experience that pairs a fast React storefront with AWS-backed ordering, promotion, reporting, and admin workflows.",
      problem:
        "The challenge was to build an online store that still felt complete and responsive for customers while removing the maintenance burden of a traditional always-on backend.",
      solution:
        "I designed the product around a React frontend and Lambda-driven backend flows, with AWS services handling cart persistence, promotions, order processing, admin controls, daily sales reporting, and operational notifications.",
      impact:
        "This is one of the strongest examples of how I work across the whole stack. It connects customer UX, internal tooling, automation, and scalable infrastructure into one coherent product system.",
      highlights: [
        "Designed order, promotion, and purchase-history flows around a serverless backend model.",
        "Included admin workflows for catalog and promo-code management.",
        "Added operational automation such as low-stock alerts and daily sales reporting."
      ],
      stack: ["React", "Node.js", "AWS"],
      links: [{ label: "Code", href: "https://github.com/hnngo/shoe-serverless" }],
      accent: "warm",
      previewImage:
        "https://hnngo-portfolio.s3.amazonaws.com/projects/severless_shoe_website/banner.png",
      detailImage:
        "https://hnngo-portfolio.s3.amazonaws.com/projects/severless_shoe_website/devices.png",
      imageAlt: "Serverless Shoe Website preview"
    },
    {
      id: "poll-generator",
      name: "Poll Generator",
      role: "Full-stack Systems Case Study",
      timeframe: "Real-time voting with Redis + PostgreSQL",
      summary:
        "A real-time poll platform built to handle fast voting traffic while keeping the application architecture explicit and operationally realistic.",
      problem:
        "The core problem was handling high-speed vote writes without pushing all traffic directly into the primary relational datastore.",
      solution:
        "I split responsibilities across PostgreSQL for durable poll data, Redis for fast vote processing, Node.js for backend logic, and a React plus Redux client for the user experience. Nginx and Vagrant were used to model a more realistic deployment setup.",
      impact:
        "The project shows how I think about architecture under load: choosing the right persistence model for each responsibility, reducing bottlenecks, and still keeping the user flow simple.",
      highlights: [
        "Separated high-throughput voting operations from durable poll storage.",
        "Built a React voting experience with real-time-feeling interaction patterns.",
        "Modeled the stack with Nginx and Vagrant to reflect a more production-like environment."
      ],
      stack: ["React", "Redux", "Node.js", "Redis", "PostgreSQL"],
      links: [
        {
          label: "Code",
          href: "https://github.com/hnngo/poll-generator-with-redis"
        }
      ],
      accent: "cool",
      previewImage:
        "https://hnngo-portfolio.s3.amazonaws.com/projects/poll_generator/banner.png",
      detailImage:
        "https://hnngo-portfolio.s3.amazonaws.com/projects/poll_generator/devices.png",
      imageAlt: "Poll Generator preview"
    },
    {
      id: "social-x",
      name: "Social X",
      role: "Full-stack Product Case Study",
      timeframe: "Auth, profiles, posting, and realtime interaction",
      summary:
        "A social platform prototype that combines authentication, profile management, posting, comments, and live user interaction into a single product flow.",
      problem:
        "The goal was to build a product that felt complete from a user perspective, with identity flows, profile editing, posting, comments, and social interaction that felt alive rather than static.",
      solution:
        "I combined React, Redux, Node.js, Express, MongoDB, Passport.js, and Socket.io to support email and Google OAuth login, posts, profile updates, comments, friend requests, and live profile-related changes.",
      impact:
        "Social X remains one of the clearest examples of my full-stack product thinking. It ties together interactive UI, backend APIs, authentication, and real-time updates in a way that feels like a usable product rather than a disconnected demo.",
      highlights: [
        "Implemented both email-based auth and Google OAuth flows.",
        "Connected posts, comments, profile updates, and friend activity through a single product experience.",
        "Used Socket.io to support live profile and interaction updates."
      ],
      stack: ["React", "Redux", "Node.js", "MongoDB", "Socket.io"],
      links: [
        { label: "Live", href: "https://sxmedia.herokuapp.com/" },
        { label: "Code", href: "https://github.com/hnngo/social-x" }
      ],
      accent: "neutral",
      previewImage:
        "https://hnngo-portfolio.s3.amazonaws.com/projects/social_x/banner.png",
      detailImage:
        "https://hnngo-portfolio.s3.amazonaws.com/projects/social_x/devices.png",
      imageAlt: "Social X preview"
    }
  ],
  archiveProjects: [
    {
      id: "shoeniverse",
      name: "Shoeniverse",
      role: "Frontend Commerce Project",
      timeframe: "React storefront + Firebase auth",
      summary:
        "A shopping experience for footwear and accessories focused on browsing flow, account entry points, and a cleaner retail presentation.",
      problem:
        "The project explored how to build a consumer storefront that felt easy to browse while still covering the core account and state-management flows.",
      solution:
        "I used React, Redux, Bootstrap, and Firebase authentication to support sign-in flows, storefront state, and a mobile-first shopping interface.",
      impact:
        "Shoeniverse helped sharpen how I structure retail UI, shopping state, and account-related interaction patterns in a frontend-heavy product.",
      highlights: [
        "Built a mobile-first shopping interface around Redux-driven state.",
        "Integrated Firebase authentication for account flows.",
        "Focused on retail presentation, product browsing, and UI clarity."
      ],
      stack: ["React", "Redux", "Firebase", "Bootstrap"],
      links: [
        { label: "Live", href: "https://shoes-shopping-website.firebaseapp.com/" }
      ],
      accent: "warm",
      previewImage:
        "https://hnngo-portfolio.s3.amazonaws.com/projects/shoeniverse/banner.png",
      detailImage:
        "https://hnngo-portfolio.s3.amazonaws.com/projects/shoeniverse/devices.png",
      imageAlt: "Shoeniverse preview"
    },
    {
      id: "dashboard-kamela",
      name: "Dashboard Kamela",
      role: "Data Visualization Project",
      timeframe: "Dashboard UI + d3.js",
      summary:
        "A stock-themed dashboard focused on translating financial-style data into a dense but readable interface.",
      problem:
        "The design challenge was making chart-heavy, data-dense screens feel navigable and visually credible without becoming cluttered.",
      solution:
        "I used React and d3.js to build multiple chart types and dashboard modules, then hosted the project on Firebase Hosting.",
      impact:
        "Kamela remains a good example of how I think about information density, data visualization, and interface composition under heavier visual load.",
      highlights: [
        "Built multiple chart types with d3.js for a dashboard-style product surface.",
        "Explored financial UI composition and scanability.",
        "Used mock company data to keep the interface grounded in realistic patterns."
      ],
      stack: ["React", "d3", "Firebase"],
      links: [
        { label: "Live", href: "https://dbkamela.firebaseapp.com/" },
        { label: "Code", href: "https://github.com/hnngo/dashboard-kamela" }
      ],
      accent: "cool",
      previewImage:
        "https://hnngo-portfolio.s3.amazonaws.com/projects/kamela/banner.png",
      detailImage:
        "https://hnngo-portfolio.s3.amazonaws.com/projects/kamela/devices.png",
      imageAlt: "Dashboard Kamela preview"
    },
    {
      id: "jobol",
      name: "JobOL",
      role: "React Native Product Project",
      timeframe: "Mobile job search experience",
      summary:
        "A mobile job-search app that combines keyword and location search with account flows in a lightweight React Native experience.",
      problem:
        "The product needed to make job discovery feel quick and mobile-friendly while still handling account management and external job data cleanly.",
      solution:
        "I built the app with Expo, React Native, Redux, Firebase, and React Native Elements to support search, authentication, and mobile-friendly job browsing flows.",
      impact:
        "JobOL rounds out the portfolio with cross-platform mobile product work and shows how I translate web-style product thinking into a smaller mobile surface.",
      highlights: [
        "Built with Expo and React Native for a cross-platform mobile workflow.",
        "Used Redux and Firebase for state and account flows.",
        "Focused on lightweight search and browsing interactions."
      ],
      stack: ["React Native", "Redux", "Firebase"],
      links: [{ label: "Code", href: "https://github.com/hnngo/jobOL-react-native" }],
      accent: "neutral",
      previewImage:
        "https://hnngo-portfolio.s3.amazonaws.com/projects/jobol/banner.png",
      detailImage:
        "https://hnngo-portfolio.s3.amazonaws.com/projects/jobol/devices.png",
      imageAlt: "JobOL preview"
    }
  ],
  about: {
    eyebrow: "ABOUT",
    title: "Full-stack engineering with product care and systems thinking.",
    paragraphs: [
      "I work comfortably across the full surface area of a product, from polished interfaces and interaction details to backend workflows, data-heavy business logic, and cloud-backed automation.",
      "My background spans React, Node.js, Redux, AWS, databases, real-time systems, and product-facing frontend work. The projects that energize me most are the ones that need strong technical foundations without sacrificing clarity, usability, or delivery speed."
    ],
    focusTitle: "Current Focus",
    focusItems: [
      "Scalable web applications",
      "Cloud architecture and automation",
      "Polished frontend systems",
      "Practical product delivery"
    ],
    meta: [
      "Based in Vancouver, Canada",
      "Interested in full-stack product engineering roles",
      "Open to opportunities in Canada and product-minded engineering teams"
    ]
  },
  experience: [
    {
      company: "Freightera Logistics Inc.",
      title: "Software Engineer",
      dates: "Apr 2021 - Present",
      location: "Vancouver, British Columbia",
      highlights: [
        "Delivered automated accounting workflows for invoices, bills, refunds, and credit memos across finance operations.",
        "Reduced manual overhead for the accounting team while improving audit reliability in operational finance flows.",
        "Built monitoring and notification systems for overdue invoices, payment failures, and suspicious fraud-related activity."
      ],
      stack: ["React", "Node.js", "Automation", "Payments"]
    },
    {
      company: "Shopee",
      title: "Frontend Developer",
      dates: "Nov 2019 - Jan 2021",
      location: "Singapore",
      highlights: [
        "Owned frontend work across login, signup, account settings, KYC, and notification-related user flows.",
        "Supported growth and onboarding experiences tied to high-traffic identity journeys.",
        "Integrated fraud-check UI into signup, login, and checkout verification flows, including SMS and WhatsApp-based verification patterns."
      ],
      stack: ["Frontend", "Authentication", "Growth", "Fraud Detection"]
    },
    {
      company: "Nanyang Technological University",
      title: "Research Engineer",
      dates: "May 2018 - Nov 2019",
      location: "Singapore",
      highlights: [
        "Researched control and controllability problems in dynamic complex networks.",
        "Worked across network flow, matching-path analysis, and failure-prevention strategies.",
        "Developed analytical rigor that still shapes how I think about systems, dependencies, and failure modes today."
      ],
      stack: ["Research", "Networks", "Systems Thinking"]
    },
    {
      company: "Fiot Co. LTD.",
      title: "Embedded Firmware Development Engineer",
      dates: "May 2017 - Oct 2017",
      location: "Ho Chi Minh City, Vietnam",
      highlights: [
        "Contributed to embedded and IoT product development in an outsourcing environment.",
        "Worked with wireless solutions including Bluetooth, WiFi, Zigbee, and custom RF integrations."
      ],
      stack: ["Embedded Systems", "IoT", "Wireless"]
    },
    {
      company: "MobiFone Testing and Maintenance Center",
      title: "Internship Research Engineer",
      dates: "Jun 2016 - Sep 2016",
      location: "Ho Chi Minh City, Vietnam",
      highlights: [
        "Studied LTE accessibility optimization and measured network accessibility performance.",
        "Participated in real-world 4G signal measurement work across a defined field area."
      ],
      stack: ["Telecom", "LTE", "Field Testing"]
    }
  ],
  snapshot: [
    {
      title: "Frontend Systems",
      description:
        "Interfaces built with strong hierarchy, responsive implementation discipline, and attention to how products actually feel to use.",
      tags: ["React", "Component systems", "Responsive UI", "Interaction detail"]
    },
    {
      title: "Backend Services",
      description:
        "Backend flows designed for maintainability, clear service boundaries, and reliable business behavior under real product constraints.",
      tags: ["Node.js", "API design", "Async workflows", "Operational logic"]
    },
    {
      title: "Cloud And Automation",
      description:
        "Cloud-backed workflows and automation patterns that reduce manual work and support scalable delivery.",
      tags: ["AWS", "Serverless", "Automation", "Deployment thinking"]
    },
    {
      title: "Product Thinking",
      description:
        "Engineering decisions shaped by user value, clarity, maintainability, and the quality of what eventually ships.",
      tags: ["UX awareness", "Prioritization", "Reliability", "Collaboration"]
    }
  ],
  contact: {
    eyebrow: "CONTACT",
    title: "Let's build something thoughtful.",
    description:
      "Open to conversations about full-stack engineering, product-focused teams, and modern web platforms in Canada or remote-first environments.",
    email: "ngohuynhnhan@gmail.com",
    links: [
      { label: "GitHub", href: "https://github.com/hnngo" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ngohuynhnhan/"
      }
    ]
  }
};
