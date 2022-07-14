import React from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
            
        <ul className={styles.navList}>
          <span className={styles.navLogo}>
          <Link href="/">
            <h2>Kushagra Sarathe</h2>
          </Link>
          </span>
          <li><Link href="/">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#tech">Tech Stack</Link></li>
          <li><Link href="#projects">Projects</Link></li>
        </ul>
      </nav>
    </div>
  );
}
