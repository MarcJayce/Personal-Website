import { useState, useRef } from "react";

function Dock() {
  const [tooltip, setTooltip] = useState({
    text: "",
    x: 0,
    y: 0,
    visible: false,
  });
  const dockRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    const name = target.getAttribute("data-name");
    const rect = target.getBoundingClientRect();

    setTooltip({
      text: name || "",
      x: rect.left + rect.width / 2,
      y: rect.top - 50,
      visible: true,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltip((prev) => ({
      ...prev,
      x: e.pageX,
      visible: true,
    }));
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <>
      <div className="dock" ref={dockRef}>
        <a href="/Main">
          <img
            className="icon"
            src="/src/assets/home.svg"
            data-name="Home"
            alt="Home"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </a>
        <a href="/about">
          <img
            className="icon"
            src="/src/assets/about.svg"
            data-name="About"
            alt="About"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </a>
        <a href="/projects">
          <img
            className="icon"
            src="/src/assets/projects.svg"
            data-name="Projects"
            alt="Projects"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </a>
        <span></span>
        <a
          href="https://www.linkedin.com/in/marc-jayce-cenidoza-50333424a/"
          target="_blank"
        >
          <img
            className="icon"
            src="/src/assets/link.svg"
            data-name="Linkedin"
            alt="Linkedin"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </a>
        <a href="https://github.com/MarcJayce" target="_blank">
          <img
            className="icon"
            src="/src/assets/github.svg"
            data-name="Github"
            alt="Github"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </a>
      </div>
      {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            position: "fixed",
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: "translateX(-50%)",
            opacity: tooltip.visible ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  );
}

export default Dock;
