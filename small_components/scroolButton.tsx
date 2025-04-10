import React from "react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const styles: { button: React.CSSProperties } = {
    button: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      padding: "20px 25px",
      fontSize: "16px",

      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      zIndex: 1000,
    },
  };

  return (
    <button
      onClick={scrollToTop}
      className="illaramAccent"
      style={styles.button}
    >
      ⬆
    </button>
  );
};

export default ScrollToTopButton;
