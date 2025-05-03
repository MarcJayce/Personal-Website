import { motion } from "framer-motion";
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

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}>
      <motion.section
        className={styles.section}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100vh",
          flexDirection: "row",
        }}
      >
        <div style={{ flex: 1, padding: "20px" }}>
          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Experience & Expertise
          </motion.h1>

          <motion.div
            className={styles.bio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ marginBottom: "2rem" }}
          >
            <h3 style={{ color: "#00ff00" }}>Experience</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1rem" }}>
                <strong>• Chimes Consulting</strong>
                <p>- Full-Stack Developer Intern | 2025 - Present</p>
              </li>
            </ul>
            <h3 style={{ color: "#00ff00" }}>Significant Projects</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1rem" }}>
                <strong>• Calorie & Workout Tracker Social Fitness App</strong>
                <p>
                  - Social platform that let's you track calories and workout
                </p>
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <strong>• Motion Tracking P.E Web-Game</strong>
                <p>- Proven by educators to motivate student engagement</p>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          style={{
            flex: 1,
            backgroundColor: "#2a2a2a",
            padding: "2rem",
            borderRadius: "5%",
            margin: "20px",
            boxShadow:
              "0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.25)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 style={{ color: "#00ff00", marginBottom: "1rem" }}>
              Software & Expertise
            </h3>
            <div style={{ marginBottom: "1rem" }}>
              <h4 style={{ color: "#ffffff" }}>Development</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Figma</li>
                <li>Git</li>
                <li>SQL</li>
                <li>React</li>
                <li>Laravel</li>
              </ul>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <h4 style={{ color: "#ffffff" }}>Skills</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Time Management</li>
                <li>Problem Solving</li>
                <li>Layouts</li>
                <li>Team Player</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: "#ffffff" }}>Interests</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>Design</li>
                <li>Music</li>
                <li>Sports</li>
                <li>Art</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
