import styles from "./ProjectsPage.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  technologies?: string[];
  features?: string[];
  url: string;
  image?: string;
}

interface ModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modalContent}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>{project.title}</h2>
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className={styles.modalImage}
          />
        )}
        <p className={styles.modalDescription}>
          {project.detailedDescription || project.description}
        </p>

        {project.technologies && (
          <div className={styles.modalSection}>
            <h3>Technologies Used</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        )}

        {project.features && (
          <div className={styles.modalSection}>
            <h3>Key Features</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <motion.a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.modalButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Open Project
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Kamala Website",
      description: "Website for a Local Thai Restaurant",
      detailedDescription:
        "Collaborated with the restaurant owner to ensure the website matched their branding and customer needs. The website showcases the restaurant's menu, offers a reservation system, and provides information about the restaurant's history and cuisine.",
      technologies: ["Javascript", "Bootstrap CSS", "HTML"],
      features: [
        "Showcase Kamala Cafe",
        "Animated buttons and Menu",
        "Front-End Design",
        "Responsive design for mobile and desktop",
      ],
      url: "https://marcjayce.github.io/Kamala-Website-Project/index.html",
      image: "/assets/Kamala.png",
    },
    {
      id: 2,
      title: "Project Calculator",
      description: "A Calculator app that performs basic arithmetic operations",
      detailedDescription:
        "A modern calculator application that provides basic arithmetic operations with a clean and intuitive interface. The calculator supports keyboard input and maintains calculation history.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Basic arithmetic operations",
        "Keyboard support",
        "Calculation history",
        "Responsive design",
      ],
      url: "https://marcjayce.github.io/Calculator-/",
      image: "/assets/Calculator.png",
    },
    {
      id: 3,
      title: "Project To-Do List",
      description:
        "A To do list app that allows users to add, edit, and delete tasks",
      detailedDescription:
        "A comprehensive task management application that helps users organize their daily activities. The app provides an intuitive interface for managing tasks with real-time updates.",
      technologies: ["Object-Oriented JS", "Webpack", "Local Storage"],
      features: [
        "Create, edit, and delete tasks",
        "Mark tasks as complete",
        "Persistent storage using browser's local storage",
        "Responsive design for mobile and desktop",
      ],
      url: "https://marcjayce.github.io/TO-DO/",
      image: "/assets/to-do.png",
    },
    {
      id: 4,
      title: "FitForge Fitness App",
      description: "Social platform that let's you track calories and workout",
      detailedDescription:
        "A social platform for tracking calories and workouts while staying motivated through community support. Users can log meals, exercises, and share progress with others on their fitness journey.",
      technologies: [
        "React",
        "NodeJS",
        "Mysql",
        "Vite",
        "AWS Rds",
        "AWS Amplify",
      ],
      features: [
        "Log Meals and Exercises",
        "Scan Barcodes and Meals",
        "Store Calories and Workouts in a Database",
        "Responsive design for mobile and desktop",
      ],
      url: "https://github.com/MarcJayce/UpliftFitness",
      image: "/assets/FitForge.png",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <motion.div
        className={styles.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className={styles.name}
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          My Projects
        </motion.h1>

        <div className={styles.projectsContainer}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              {project.image && (
                <div className={styles.imageContainer}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                </div>
              )}
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <motion.button
                  className={styles.projectLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(project)}
                >
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={true}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
