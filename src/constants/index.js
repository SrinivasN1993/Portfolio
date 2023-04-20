import {
  backend,
  ionic,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  reactNative,
  dell,
  cmu,
  angular,
  vue,
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
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
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
    title: "Master of Information Systems Management",
    company_name: "Carnegie Mellon University, Heinz College",
    icon: cmu,
    iconBg: "#383E56",
    date: "May 2022 - May 2023",
    points: [
      "Relevant Courses: Web Application Development, Database Management, Java Programming",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Dell Technologies",
    icon: dell,
    iconBg: "#E6DEDD",
    date: "May 2021 - Apr 2022",
    points: [
      "Functioned as the UI lead and oversaw design approval, budget decisions, accessibility, and architecture for 4 projects",
      "Architected and built 2 Angular applications with reactive state management for the Dell Digital Supply Chain",
      "Ensured UI components are scalable, performant, and 100% web content accessibility compliant",
      "Implemented CI/CD with GitLab, increased deployment frequency by 30%, and reduced deployment time by 50%",
      "Achieved 2x better performance through advanced caching, parallelization, and non-blocking processes",
      "Collaborated closely with product managers, UX designers, and cross-functional teams in an Agile environment",
    ],
  },
  {
    title: "Software Engineer 2",
    company_name: "Dell Technologies",
    icon: dell,
    iconBg: "#E6DEDD",
    date: "Oct 2018 - Apr 2021",
    points: [
      "Processed and displayed up to 5000 EMC orders on the Dell platform daily as part of the Dell-EMC merger",
      "Increased user retention by 30% by ensuring cross-browser support and extensive testing with Chrome DevTools",
      "Enforced 3x better security and seamless login through Single Sign-On, OAuth, and JWT",
      "Exposed valuable order information to over 50K internal users in close collaboration with clients and stakeholders in Ireland, Malaysia, Japan, and the United States",
      "Constructed a workflow management system for distressed orders that resulted in 35% faster deliveries",
      "Devised an intuitive user interface walkthrough feature and increased user engagement by 20%",
    ],
  },
  {
    title: "Software Engineer 1",
    company_name: "Dell Technologies",
    icon: dell,
    iconBg: "#E6DEDD",
    date: "Jul 2016 - Sep 2018",
    points: [
      "Developed single-page applications for a data orchestration tool with more than 40 downstream/upstream applications",
      "Built an issue resolution tool for Dell India Customer Care using Angular, increasing customer satisfaction by 25%",
      "Performed unit testing with Karma and Jest and achieved 100% code coverage and 80% fewer errors",
      "Initiated the adoption of Angular and React and modernized 3 complex web applications",
      "Devised a mobile app with React-Native that resulted in 80% faster incident resolution during software releases",
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
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Srinivas always thinks one step ahead, anticipates future asks, and builds them into future design to continuously improve the user experience",
    name: "Jacquie Helmcamp",
    designation: "Senior Consultant",
    company: "Dell Technologies",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "Srinivas always thinks one step ahead, anticipates future asks, and builds them into future design to continuously improve the user experience",
    name: "Joel R. Hayes",
    designation: "Senior Consultant",
    company: "Dell Technologies",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
