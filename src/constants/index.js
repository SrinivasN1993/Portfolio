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
  cmu,
  angular,
  sujit,
  subbu,
  mysql,
  java,
  aws,
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
    number: 6,
    spChar: "",
    measure: "Years of Experience",
  },
  {
    number: 20,
    spChar: "+",
    measure: "Projects Delivered",
  },
  {
    number: 200000,
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
  // {
  //   title: "Master of Information Systems Management",
  //   company_name: "Carnegie Mellon University, Heinz College",
  //   location: "Pittsburgh, United States",
  //   icon: cmu,
  //   iconBg: "#383E56",
  //   date: "May 2022 - May 2023",
  //   points: [
  //     "Relevant Courses: Web Application Development, Database Management, Java Programming, Engineering Data-Intensive Scalable Systems",
  //   ],
  // },
  {
    title: "Senior Software Engineer",
    company_name: "Dell Technologies",
    location: "Bengaluru, India",
    icon: dell,
    iconBg: "#E6DEDD",
    date: "May 2021 - Apr 2022",
    points: [
      "Oversaw front-end architecture, design, implementation, and customer engagement",
      "Architected and developed a data-intensive Angular application that automated a 7-day manual process",
      "Enhanced information consistency by 50% through reactive state management with ngRx and RxJS",
      "Spearheaded 3 UI projects with E2E testing and provided accurate order availability dates to Sales teams",
      "Built 3+ advanced features such as big data caching, lazy-loading, and HTTP interceptors",
      "Enforced cross-browser compatibility, 100% test coverage, and WCAG with >95% accessibility scores ",
      "Mentored a team of 6 junior engineers and testers through 1:1 sessions and code reviews",
      "Collaborated with cross-functional teams, UX designers, and product managers in a fast-paced Agile environment",
      "Achieved a 24-48 hour turnaround time for critical business requests",
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
      "Engineered an order experience platform with Angular that replaced 11 legacy applications",
      "Devised 10+ innovative customer-first features with TypeScript, HTML, and CSS, such as state memoization",
      "Spearheaded UI integration of Dell and EMC order systems as part of the $67 billion merger",
      "Enforced 3x better security and seamless login through Single Sign-On, OAuth, and JWT",
      "Established personalized views and micro-frontends for Sales, Finance, and Logistics teams",
      "Delivered order information to over 50K internal users in close collaboration with backend and DevOps engineers",
      "Built a real-time notification framework with web sockets that reduced server overhead by 80%",
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
      "Developed single-page applications for a data orchestration tool with more than 40 downstream/upstream applications",
      "Devised a cross-platform mobile app with React-Native that resulted in 80% faster defect resolution during releases",
      "Built an issue resolution tool for Dell India Customer Care using Angular, increased customer satisfaction by 25%",
      "Performed unit testing with Karma and Jest and achieved 100% code coverage and 80% fewer errors",
      "Initiated the adoption of Angular and React and modernized 3 complex web applications",
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
