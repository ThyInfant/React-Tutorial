import React from "react";

function Footer() {
  return (
    <footer
      style={{
        margin: "5px",
        position: "absolute",
        bottom: "0",
        width: "97%",
        height: "60px" /* Height of the footer */,
        background: "navy",
        color: "white",
        textAlign: "center",
        lineHeight: "60px" /* Vertically center the text */,
      }}
    >
      <p style={{ margin: 0 }}>&copy; 2025 City Lovers</p>
    </footer>
  );
}

export default Footer;
