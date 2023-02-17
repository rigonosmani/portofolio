import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        viewBox="0 142 900 309"
      >
        <path
          fill="#FF0000"
          strokeLinecap="round"
          d="M0 225l75 12.7c75 12.6 225 38 375 24.1C600 248 750 195 825 168.5l75-26.5v309H0z"
        ></path>
      </svg>
      <div className="f-content">
        <svg
          style={{ height: "4rem", width: "17rem" }}
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </div>
    </footer>
  );
};

export default Footer;
