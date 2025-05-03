import styles from "./ProjectsPage.module.css";
import { motion } from "framer-motion";
interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  image?: string;
}

const ProjectsPage = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Project To-Do List",
      description:
        "A To do list app that allows users to add, edit, and delete tasks",
      url: "https://marcjayce.github.io/TO-DO/",
      image: "/src/assets/to-do.png",
    },
    {
      id: 2,
      title: "Project Calculator",
      description: "A Calculator app that performs basic arithmetic operations",
      url: "https://marcjayce.github.io/Calculator-/",
      image: "/src/assets/Calculator.png",
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
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
