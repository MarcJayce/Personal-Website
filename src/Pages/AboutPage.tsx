import { motion } from "framer-motion";
import styles from "./MainPage.module.css";
import SkillBadge from "../Components/SkillBadge";

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
          height: "100vh",
          flexDirection: "row",
          padding: "4rem 2rem",
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
          className="skillsContainer"
          style={{
            flex: 1.2,
            backgroundColor: "#2a2a2a",
            padding: "1.5rem",
            borderRadius: "5%",
            margin: "20px",
            boxSizing: "border-box",
            boxShadow:
              "0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.25)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 style={{ color: "#00ff00", marginBottom: "1.5rem" }}>
              Software & Expertise
            </h3>
            <div style={{ marginBottom: "2rem" }}>
              <h4 style={{ color: "#ffffff", marginBottom: "1rem" }}>
                Languages
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                <SkillBadge name="CSS" category="Featured" />
                <SkillBadge name="HTML" category="Featured" />
                <SkillBadge name="JavaScript" category="Featured" />
                <SkillBadge name="PHP" category="Languages" />
                <SkillBadge name="TypeScript" category="Languages" />
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h4 style={{ color: "#ffffff", marginBottom: "1rem" }}>
                Frontend
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                <SkillBadge name="Vite" category="Featured" />
                <SkillBadge name="Webpack" category="Featured" />
                <SkillBadge name="React" category="Frontend" />
                <SkillBadge name="SASS" category="Frontend" />
                <SkillBadge name="Tailwind CSS" category="Frontend" />
                <SkillBadge name="Bootstrap CSS" category="Frontend" />
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h4 style={{ color: "#ffffff", marginBottom: "1rem" }}>
                Backend
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                <SkillBadge name="Appwrite" category="Backend" />
                <SkillBadge name="Express" category="Backend" />
                <SkillBadge name="Mysql" category="Backend" />
                <SkillBadge name="Node.js" category="Backend" />
                <SkillBadge name="Laravel" category="Backend" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
