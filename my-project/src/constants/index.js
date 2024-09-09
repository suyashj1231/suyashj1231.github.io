import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a driven computer science student and aspiring full-stack developer with a passion for creating innovative technological solutions. With expertise in ReactJS, NodeJS, and cloud technologies, I've developed a range of projects from AI-powered chatbots to embedded systems. My experience spans web development, mobile applications, and cutting-edge research in 3D printing. I aim to leverage my diverse skill set in AI, robotics, and software engineering to craft efficient, user-centric applications that tackle real-world challenges and push the boundaries of technology.`;

export const ABOUT_TEXT = `I am a dedicated computer science student with a passion for both theoretical and practical aspects of technology. My expertise spans full-stack development, AI, robotics, and cloud computing. I've developed skills in ReactJS, NodeJS, Firebase, and Android development through various projects, including website revamps, mobile applications, and embedded systems work. My project portfolio showcases my ability to apply technical knowledge to real-world problems, from NLP-based chatbots to flight data processing systems. I thrive in collaborative environments and continuously seek to expand my skills. Outside of coding, I participate in tech competitions and enjoy tackling complex challenges to create innovative solutions.`;

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
    image: project1, // placeholder for actual image reference
    description:
      "An innovative RC Rover with integrated sensors for computer vision, obstacle detection, and object manipulation. Features include PixyCam for vision, infrared sensors, and a mechanical claw, all controlled via Arduino.",
    technologies: ["Arduino", "PixyCam", "Infrared Sensors", "SolidWorks", "3D Printing"],
  },
  {
    title: "AI-Powered Chatbot",
    image: project2, // placeholder for actual image reference
    description:
      "An AI-powered chatbot developed for GDSC UCI, featuring advanced NLP techniques for context-aware responses, sentiment analysis, and knowledge base integration. Achieved 80% accuracy in understanding natural language queries.",
    technologies: ["Python", "NLTK", "Machine Learning", "NLP"],
  },
  {
    title: "Flight Data Processing Pipeline",
    image: project3, // placeholder for actual image reference
    description:
      "An advanced Flight Database System using Python and SQLite3, optimized for efficient data retrieval and manipulation. Handles 10,000+ records with 35% improved efficiency and ensures data integrity through SQL constraints and normalization.",
    technologies: ["Python", "SQLite3", "Database Optimization", "SQL"],
  },
  {
    title: "Secure Chat Messenger",
    image: project4, // placeholder for actual image reference
    description:
      "A direct messaging chat application with a robust server-client architecture, featuring real-time communication, user authentication, and encryption. Utilizes Tkinter for an intuitive GUI and multi-threading for efficient concurrent connections.",
    technologies: ["Python", "Tkinter", "Encryption", "Multi-threading"],
  },
];

export const CONTACT = {
  address: "1020 Stanford, Irvine, CA 92617 ",
  phoneNo: "+1 (949) 992-5767",
  email: "j.suyash1231@gmail.com",
  LinkedIn: "https://www.linkedin.com/in/jain-suyash/",
};
