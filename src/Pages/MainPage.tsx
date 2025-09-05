import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./MainPage.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const MainPage = () => {
  return (
    <div className={styles.pageContainer}>
      <motion.section
        className={styles.section}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div style={{ flex: 1, padding: "20px" }}>
          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Showcasing My Journey and Projects on Web-Development
          </motion.h1>

          <motion.p
            className={styles.bio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Welcome to my portfolio, where creativity meets innovation. Explore
            my projects that reflect my passion and expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
          >
            <button className={styles.button}>
              <Link to="/projects">View</Link>
            </button>
            <button className={styles.button}>
              <Link to="/about">About Me</Link>
            </button>
          </motion.div>
        </div>
        <div
          className={styles.profileImage} 
        >
          <img
            src="/assets/Profile.jpg"
            alt="Placeholder"
          />
        </div>
      </motion.section>
    </div>
  );
};

export default MainPage;
