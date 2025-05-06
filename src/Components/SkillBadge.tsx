import { motion } from "framer-motion";
import styles from "../Pages/MainPage.module.css";
import { FaCode, FaReact, FaServer, FaStar } from "react-icons/fa";

interface SkillBadgeProps {
  name: string;
  category: string;
}

const SkillBadge = ({ name, category }: SkillBadgeProps) => {
  const getIcon = () => {
    switch (category) {
      case "Languages":
        return <FaCode />;
      case "Frontend":
        return <FaReact />;
      case "Backend":
        return <FaServer />;
      case "Featured":
        return <FaStar style={{ color: "#FFD700" }} />;
      default:
        return <FaCode />;
    }
  };

  const getBorderColor = () => {
    switch (category) {
      case "Languages":
        return "#FF6B6B";
      case "Frontend":
        return "#4ECDC4";
      case "Backend":
        return "#45B7D1";
      case "Featured":
        return "#FFD700";
      default:
        return "#333";
    }
  };

  return (
    <motion.div
      className={styles.skillBadge}
      whileHover={{ scale: 1.05 }}
      style={{
        background: "#1a1a1a",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        border: `1px solid ${getBorderColor()}`,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        cursor: "pointer",
      }}
    >
      {getIcon()}
      <span>{name}</span>
    </motion.div>
  );
};

export default SkillBadge;
