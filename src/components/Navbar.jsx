import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
    console.log(active)
  };

  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <span className={styles.navLogo}>
            <Link href="/">
              <h2>Kushagra Sarathe</h2>
            </Link>
          </span>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#tech">Tech Stack</Link>
          </li>
          <li>
            <Link href="#projects">PoW</Link>
          </li>
        </ul>
        <button
          onClick={ handleClick }
          className={styles.hamBtn}
        >
          {active ? "☰" : "✖"}
        </button>
      </nav>
    </div>
  );
}
