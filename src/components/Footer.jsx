import React from "react";
import styles from "../../styles/Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Built by
      <a
        href="https://twitter.com/kushagrasarathe"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" @kushagrasarathe"}
      </a>
      🧑🏻‍💻
    </footer>
  );
}
