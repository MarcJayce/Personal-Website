import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - 125,
        y: e.clientY - 125,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor-light"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 9999,
        x: position.x,
        y: position.y,
      }}
      animate={{
        opacity: 0.3,
        scale: 1.2,
      }}
      whileHover={{
        opacity: 0.2,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 90%)",
          filter: "blur(8px)",
        }}
      />
    </motion.div>
  );
};

export default CursorLight;
