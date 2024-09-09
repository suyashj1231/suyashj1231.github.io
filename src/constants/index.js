
import project1rover from "../assets/projects/project-1-rover.jpg";
import project2garden from "../assets/projects/project-2-garden.png";
import project3airport from "../assets/projects/project-3-airport.jpg";
import project4login from "../assets/projects/project-4-login.png";

export const HERO_CONTENT = `Hi there! Welcome to my digital playground.
I'm Suyash, an AI and Machine Learning enthusiast on a mission to change the world, one algorithm at a time. Passionate about leveraging technology to tackle UN Sustainable Development Goals, I'm here to turn complex puzzles into innovative solutions that make a difference. Ready to explore the future of tech with me?`;

export const ABOUT_TEXT = `Dedicated computer science student with a focus on AI and Machine Learning. My tech journey is fueled by a passion for creating innovative solutions that address real-world challenges, particularly those aligned with UN Sustainable Development Goals.
My expertise spans AI, robotics, and cloud computing, with hands-on experience in ReactJS, NodeJS, Firebase, and Android development. From AI-powered chatbots to embedded systems, I'm always pushing the boundaries of what technology can achieve.
When I'm not coding, you'll find me solving puzzles, playing pickleball, or cycling – because a sharp mind needs an active body! I thrive in collaborative environments and love participating in tech competitions to stay at the cutting edge of innovation.
My goal? To develop accessible, intelligent technologies that benefit everyone and tackle global issues. Let's create a more inclusive and sustainable future through the power of tech!`;

export const ABOUT_EDUCATION = "2022- Present: University of California, Irvine";

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Tech Director",
    company: "Engineering Student Council (ESC)",
    description: `Revamped the website using ReactJS, leveraging Google Cloud Functions and Firestore. Automated various functions, reducing event integration time from 1-2 days to 5-10 minutes. Designed and developed a high-performance corporate website using ReactJS for the front end and NodeJS with Express for the back end.`,
    technologies: ["ReactJS", "NodeJS", "Firestore", "Google Cloud"],
    type: "Club",
  },
  {
    year: "Feb 2024 - Present",
    role: "Software Developer",
    company: "Google Developer Student Club",
    description: `Collaborated to develop a mobile application for the GDSC Solution Challenge, facilitating community issue reporting. Implemented server-side functionality using Firebase, enabling seamless data sharing with local authorities and real-time updates, resulting in a 40% reduction in issue resolution time.`,
    technologies: ["Android Studio", "Figma", "Firebase", "C++"],
    type: "Club",
  },
  {
    year: "April 2021 - June 2021",
    role: "Software Engineering Intern",
    company: "Indian Institute of Information Technology, Design and Manufacturing",
    description: `Gained proficiency in embedded system design through rigorous coursework and hands-on lab sessions. Contributed to a cutting-edge research project funded by SERB and DST, focused on developing an innovative computer numerical positioning system for 3D Printing/Additive Manufacturing.`,
    technologies: ["C++", "SolidWorks", "Microcontrollers", "Embedded Systems"],
    type: "Internship",
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  //   type: "Oranisation",
  // },
];

export const PROJECTS = [
  {
    title: "RC Rover Development Project",
    image: project1rover,
    description:
      "An innovative RC Rover with integrated sensors for computer vision, obstacle detection, and object manipulation. Features include PixyCam for vision, infrared sensors, and a mechanical claw, all controlled via Arduino.",
    technologies: ["Arduino", "PixyCam", "Infrared Sensors", "SolidWorks", "3D Printing"],
  },
  {
    title: "AI-Powered Chatbot",
    image: project2garden,
    description:
      "An AI-powered chatbot developed for GDSC UCI, featuring advanced NLP techniques for context-aware responses, sentiment analysis, and knowledge base integration. Achieved 80% accuracy in understanding natural language queries.",
    technologies: ["Python", "NLTK", "Machine Learning", "NLP"],
  },
  {
    title: "Flight Data Processing Pipeline",
    image: project3airport,
    description:
      "An advanced Flight Database System using Python and SQLite3, optimized for efficient data retrieval and manipulation. Handles 10,000+ records with 35% improved efficiency and ensures data integrity through SQL constraints and normalization.",
    technologies: ["Python", "SQLite3", "Database Optimization", "SQL", "Tkinter"],
  },
  {
    title: "Secure Chat Messenger",
    image: project4login, 
    description:
      "A direct messaging chat application with a robust server-client architecture, featuring real-time communication, user authentication, and encryption. Utilizes Tkinter for an intuitive GUI and multi-threading for efficient concurrent connections.",
    technologies: ["Python", "Tkinter", "Encryption", "Multi-threading"],
  },
];


// export const COMPETITION = [
//   {
//     title: "SEA X SEP Pitching Competion",
//     image: project1rover,
//     description:
//       "An innovative RC Rover with integrated sensors for computer vision, obstacle detection, and object manipulation. Features include PixyCam for vision, infrared sensors, and a mechanical claw, all controlled via Arduino.",
//     technologies: ["Arduino", "PixyCam", "Infrared Sensors", "SolidWorks", "3D Printing"],
//   },
//   {
//     title: "lXI Case Study Competition",
//     image: project2garden,
//     description:
//       "An AI-powered chatbot developed for GDSC UCI, featuring advanced NLP techniques for context-aware responses, sentiment analysis, and knowledge base integration. Achieved 80% accuracy in understanding natural language queries.",
//     technologies: ["Python", "NLTK", "Machine Learning", "NLP"],
//   },
//   {
//     title: "Flight Data Processing Pipeline",
//     image: project3airport,
//     description:
//       "An advanced Flight Database System using Python and SQLite3, optimized for efficient data retrieval and manipulation. Handles 10,000+ records with 35% improved efficiency and ensures data integrity through SQL constraints and normalization.",
//     technologies: ["Python", "SQLite3", "Database Optimization", "SQL", "Tkinter"],
//   },
//   {
//     title: "Secure Chat Messenger",
//     image: project4login, 
//     description:
//       "A direct messaging chat application with a robust server-client architecture, featuring real-time communication, user authentication, and encryption. Utilizes Tkinter for an intuitive GUI and multi-threading for efficient concurrent connections.",
//     technologies: ["Python", "Tkinter", "Encryption", "Multi-threading"],
//   },
// ];


export const CONTACT = {
  address: "1020 Stanford, Irvine, CA 92617 ",
  phoneNo: "+1 (949) 992-5767",
  email: "j.suyash1231@gmail.com",
  LinkedIn: "https://www.linkedin.com/in/jain-suyash/",
  Github:"https://github.com/suyashj1231",
  instagram:"https://www.instagram.com/suyyashjainn/",
};
