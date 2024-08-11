import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a versatile and results-driven Software Engineer with a specialization in Java full-stack application development. With two years of hands-on experience in creating high-performance applications, I have consistently demonstrated strong problem-solving abilities and excellent communication skills. My expertise lies in navigating complex project environments while driving innovation and excellence in software development. I am committed to delivering top-quality solutions and continuously enhancing my skills to stay at the forefront of technological advancements.`;

export const ABOUT_TEXT = `I am a dedicated full-stack developer with a passion for creating robust and scalable web applications, currently seeking new opportunities. With extensive experience in front-end technologies like React and HTML/CSS, and back-end technologies including Java, Spring Boot, and MySQL, I excel in delivering high-performance solutions. Known for my problem-solving skills, attention to detail, and ability to collaborate effectively within teams, I aim to drive business growth and innovation through my technical and interpersonal abilities. I am eager to leverage my skills and experience to contribute to a dynamic and forward-thinking organization.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Software Developer Intern",
    company: "Vertafore Inc. - East lansing, USA",
    description: `Modernized a SOAP-based web service into a REST-based microservice. Using Java and Spring Boot, I improved application response time and implemented Apache Kafka for real-time communication among microservices. I also managed databases to ensure high uptime and consistency and utilized Postman to test REST APIs, ensuring excellent coverage and early bug detection.`,
    technologies: ["Java", "SpringBoot", "Oracle", "Kafka", "Microservices"],
  },
  {
    year: "January 2023 - May 2024",
    role: "Associate Software Engineer",
    company: "UNT - Denton, USA",
    description: `Enhanced the library website's user engagement and search response by improving Java server-side functionality and optimizing both server-side and client-side scripting. I integrated JDBC with Oracle Database to boost book searching efficiency and overall server-side operations. By implementing full-stack development principles, I significantly improved website usability and performance.`,
    technologies: ["Java", "Spring", "HTML/CSS", "JavaScript", "Oracle"],
  },
  {
    year: "August 2021 -  December 2022",
    role: "Software Engineer",
    company: "Larsen & Toubro Infotech - Chennai, India",
    description: `Developed server-side Java applications using Spring, significantly improving transaction throughput and system efficiency with Java Enterprise Edition and Hibernate ORM. I optimized Oracle Database SQL queries, reducing data retrieval time. Utilizing Maven and IntelliJ IDEA, I streamlined software delivery, enhancing debugging and ensuring high uptime. I employed Agile processes with JIRA, Git, and Jenkins, achieving excellent on-time delivery rates.`,
    technologies: ["Java", "Spring", "Oracle", "Hibernate"],
  },
  {
    year: "April 2021 - July 2021",
    role: "Project Intern",
    company: "BDL - Hyderabad, India",
    description: `Developed an application for precision dimension calculation and material selection using Python, enhancing operational accuracy. I also architected a dynamic web page with Python and Flask, integrated MySQL for data handling, and crafted the front-end with HTML/CSS. This project achieved high functionality and improved user interaction, verified through rigorous testing with PyTest.`,
    technologies: ["Python", "Flask", "HTML/CSS", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "PDF Accessibility Evaluation",
    image: project1,
    description:
      "An application to evaluate PDF accessibility using Python and machine learning, developing a Flask-based application on AWS EC2 that achieved high accuracy and uptime.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
  },
  {
    title: "Cricket Tournament Management Application",
    image: project2,
    description:
      "A cricket tournament management system using Java, Spring Boot, and MySQL, optimizing user interaction and reducing post-deployment bugs with JUnit and Maven.",
    technologies: ["Java", "Spring", "MySQL", "HTML", "CSS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
  },
  {
    title: "Interactive Pharmacy Management System",
    image: project4,
    description:
      "A C#/ .NET-based pharmacy management site with ReactJS, managing a large Oracle database and deploying on Azure for improved scalability and efficiency.",
    technologies: ["HTML", "CSS", "C#", ".NET", "MySQL"],
  },
];

export const CONTACT = {
  address: "1408 Teasley Ln, Denton Tx ",
  phoneNo: "+1 940-843-0062",
  email: "bushireddyscr@gmail.com",
};
