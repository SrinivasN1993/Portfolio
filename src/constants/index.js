import {
  backend,
  ionic,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  docker,
  reactNative,
  dell,
  angular,
  sujit,
  subbu,
  mysql,
  java,
  aws,
  paypal,
  hubspot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Ionic Development",
    icon: ionic,
  },
  {
    title: "React Native Development",
    icon: reactNative,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
];

const metrics = [
  {
    number: 8,
    spChar: "",
    measure: "Years of Experience",
  },
  {
    number: 25,
    spChar: "+",
    measure: "Projects Delivered",
  },
  {
    number: 300000,
    spChar: "+",
    measure: "Users Impacted",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer 1",
    company_name: "HubSpot",
    location: "Remote, Cambridge, MA",
    icon: hubspot,
    iconBg: "#E6DEDD",
    date: "Apr 2024 - Present",
    points: [
      "Architected and developed a permissions system for lists using React and Zustand, allowing finer segmentation within users and teams and boosting customer efficiency CSAT by 5%.",
      "Built an auditing tool to analyze, restore, or clone a prior list version, improving customer satisfaction by 10%",
      "Developed error-handling and reporting features for an AI assistant for lists, resulting in improved user experience",
      "Improved PR cycle time by 3x and introduced 3+ measures for resilient unit and acceptance tests",
      "Mentored a team of 3 junior engineers through 1:1 sessions and code reviews",
      "Collaborated with cross-functional teams, UX designers, and product managers in a fast-paced Agile environment",
    ],
  },
  {
    title: "Software Engineer 3",
    company_name: "PayPal",
    location: "Austin, Texas",
    icon: paypal,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Jan 2024",
    points: [
      "Developed a next-generation SDK Explorer to improve merchant integration experience by 300% with React and Node.js",
      "Built a comprehensive Storybook for hosting 10+ highly reusable and testable React components for payments integration",
      "Architected and developed a code editor to expose 100+ code samples for 3x faster PayPal payments and checkout",
      "Collaborated with 3 teams, architects, product managers, and UX teams to build a brand-new module federated Developer Studio with React and Node.js to enhance user experience KPIs by 50%",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Dell Technologies",
    location: "Bengaluru, India",
    icon: dell,
    iconBg: "#E6DEDD",
    date: "May 2021 - Apr 2022",
    points: [
      "Oversaw front-end architecture, design, implementation, and customer engagement for core Supply Chain applications",
      "Architected and developed a data-intensive Angular application that automated a 7-day manual supportability process",
      "Enhanced information consistency by 50% through reactive state management with ngRx and RxJS",
      "Spearheaded 3 UI projects with E2E testing and provided accurate order availability dates to Sales teams",
      "Enforced cross-browser compatibility, 100% test coverage, and WCAG with minimum 95% accessibility scores",
    ],
  },
  {
    title: "Software Engineer 2",
    company_name: "Dell Technologies",
    location: "Bengaluru, India",
    icon: dell,
    iconBg: "#E6DEDD",
    date: "Oct 2018 - Apr 2021",
    points: [
      "Engineered an order experience platform with Angular that replaced 11 legacy order management applications",
      "Devised 10+ innovative customer-first features with TypeScript, HTML, and CSS, such as state memoization",
      "Spearheaded UI integration of Dell and EMC order systems as part of the $67 billion merger",
      "Developed personalized views and micro-frontends with a microservices architecture for Sales, Finance, and Logistics teams",
      "Delivered order information to over 50K internal users in close collaboration with backend and DevOps engineers",
    ],
  },
  {
    title: "Software Engineer 1",
    company_name: "Dell Technologies",
    location: "Bengaluru, India",
    icon: dell,
    iconBg: "#E6DEDD",
    date: "Jul 2016 - Sep 2018",
    points: [
      "Built single-page applications for a data orchestration platform with more than 40 downstream/upstream applications",
      "Devised a cross-platform mobile app with React-Native that resulted in 80% faster defect resolution during releases",
      "Built an issue resolution tool for Dell India Customer Care using Angular, increased customer satisfaction by 25%",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Srinivas is my go-to front-end developer. His work is meticulous and loved by everyone. My team's throughput became 2x faster after he joined the team.",
    name: "Sujit Sahoo",
    designation: "Solutions Architect",
    company: "Dell Technologies",
    image: sujit,
  },
  {
    testimonial:
      "Srinivas always thinks one step ahead, anticipates future asks, and builds them into future design to continuously improve the user experience",
    name: "Jacquie Helmcamp",
    designation: "Senior Consultant",
    company: "Dell Technologies",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    testimonial:
      "My teams look up to Srinivas for his technical skills and effective leadership. He is an exceptional engineer that you can bank on.",
    name: "Subramanian D.",
    designation: "Senior Manager",
    company: "Dell Technologies",
    image: subbu,
  },
];

export { services, technologies, experiences, testimonials, metrics };
