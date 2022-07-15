import React, { useState } from "react";
// import Navbar from "./Navbar";
import styles from "../../styles/Layout.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <>
      {/* <Navbar /> */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/">
            <a className={styles.navlogo}>Kushagra Sarathe</a>
          </Link>
          <ul
            className={
              isActive === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href="/">
                <a className={styles.navlink}>Home</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="#about">
                <a className={styles.navlink}>About Me</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="#tech">
                <a className={styles.navlink}>Tech</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="#tech">
                <a className={styles.navlink}>PoW</a>
              </Link>
            </li>
          </ul>
          <button
            onClick={handleClick}
            className={
              isActive === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>

      {children}

      <div className={styles.container}>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}