import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  starbucks,
  tesla,
  netflixClone,
  herseyFashion,
  herseyFreelance,
  threejs,
  rasheed,
  farzin,
  olx,
  todo,
  Starbucks,
  arfaq,
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
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Node.js Developer",
    company_name: "Hersey Mens Fashion",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "October 2022 - December 2022",
    points: [
      "Developing and maintaining web applications using Node.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Hersey Freelance",
    icon: reactjs,
    iconBg: "#383E56",
    date: "January 2023 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Arfaq proved me wrong.",
    name: "Rinshad",
    // designation: "CFO",
    // company: "Acme Co",
    image: arfaq,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Arfaq does.",
    name: "Rasheed",
    // designation: "COO",
    // company: "DEF Corp",
    image: rasheed,
  },
  {
    testimonial:
      "After Arfaq optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Farzin",
    // designation: "CTO",
    // company: "456 Enterprises",
    image: farzin,
  },
];

const projects = [
  {
    name: "Hersey Freelance",
    description:
      "Developed a service and product-based freelance website using Node, Express, Mongoose, React, and Redux.Utilized my full stack development skills to create a platform that offers a seamless experience for clients to find and hire freelance professionals, as well as purchase related products.Designed the site with a focus on usability and efficiency, ensuring a smooth and efficient user experience.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "material ui",
        color: "grey-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: herseyFreelance,
    source_code_link: "https://github.com/Muhammed-Arfaq/Hersey_Freelance_Client",
  },
  {
    name: "Hersey Mens Formals",
    description:
      "Created a full-stack men's formal e-commerce website as my first project using Node, Express, and Mongoose. Utilized my knowledge of web development technologies to deliver a user-friendly platform with a focus on functionality and elegance. Designed the site to showcase a carefully curated selection of formal wear,ranging from suits to tuxedos, and provide customers with a seamless shopping experience.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "orange-text-gradient",
      },
      {
        name: "razorpay",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "orange-text-gradient",
      },
    ],
    image: herseyFashion,
    source_code_link: "https://github.com/Muhammed-Arfaq/HERSEY-MENS-FASHION",
  },
  {
    name: "Netflix Clone",
    description:
      "Developed a Netflix clone using React! It's a website that looks and works just like Netflix, with a really nice interface that's easy to use. When you go to the site, you'll see all kinds of movies and TV shows, sorted by categories like 'Popular' and 'Trending'. When you find something you want to watch, you can click on it to see more information about it, like a summary, rating, and even a trailer. If you're a fan of the original service, you'll definitely enjoy this clone.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: netflixClone,
    source_code_link: "https://github.com/Muhammed-Arfaq/netflixclone",
  },
  {
    name: "OLX Clone",
    description:
      "Developed an OLX clone that allows people to buy and sell items in an online marketplace same like the original olx. Using React for the front-end and Firebase for the back-end, provides a user-friendly interface that lets users browse, search, and create listings with ease.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: olx,
    source_code_link: "https://github.com/Muhammed-Arfaq/netflixclone",
  },
  {
    name: "ToDo List",
    description:
      "Developed a ToDo list using React! It's a website where you can keep track of all the tasks you need to do. You can easily add new tasks to the list and mark them as completed when you're done. The interface is really simple and user-friendly, so you can quickly see what tasks you have to do.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Muhammed-Arfaq/netflixclone",
  },
  {
    name: "Starbucks Clone",
    description:
      "Developed a Starbucks clone website using HTML and CSS! This website is a static website, looks and feels just like the official Starbucks website, with similar colors, fonts, and layout. This Starbucks clone was a great learning project that allowed me to practice my HTML and CSS skills.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: Starbucks,
    source_code_link: "https://github.com/Muhammed-Arfaq/netflixclone",
  },
];

export { services, technologies, experiences, testimonials, projects };
