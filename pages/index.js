import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import pfp from "../src/assets/pfp.jpg";
import github from "../src/assets/github.svg";
import linkedin from "../src/assets/linkedin.svg";
import twitter from "../src/assets/twitter.svg";
import telegram from "../src/assets/telegram.svg";
import discord from "../src/assets/discord.svg";
import hero1 from "../src/assets/1.png";
import hero2 from "../src/assets/2.png";
import nextjs from "../src/assets/3.png";
import reactjs from "../src/assets/4.png";
import html from "../src/assets/5.png";
import css from "../src/assets/6.png";
import js from "../src/assets/7.png";
import node from "../src/assets/8.png";
import git from "../src/assets/9.png";
import tailwind from "../src/assets/10.png";
import bootstrap from "../src/assets/11.png";
import linux from "../src/assets/12.png";
import bash from "../src/assets/13.png";
import figma from "../src/assets/14.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kushagra Sarathe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav icon.ico" />
      </Head>

      <main className={styles.main} id="main">
        {/* <FontAwesomeIcon icon={faFaceRelieved} /> */}
        <div>
          <h1 className={styles.title}>Hey there, I&#x27;m</h1>
          <div className={styles.pfp}>
            <Image className={styles.round} src={pfp} alt="profile image" />
          </div>
          <h1 className={styles.title}>
            <span className={styles.highlight}>Kushagra Sarathe &#128075;</span>
            ,
          </h1>
        </div>
        <h1 className={`${styles.name} ${styles.typing_effect}`}>
          I&#x27;m a{" "}
          <span className={styles.highlight}>
            Front-end Developer &#128187;
          </span>
        </h1>

        <div className={styles.connect}>
          <div className={styles.socials}>
            <a
              href="https://github.com/kushagrasarathe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.icon}>
                <Image src={github} alt="profile image" />
              </div>
            </a>
            <a
              href="https://linkedin.com/in/kushagra-sarathe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.icon}>
                <Image src={linkedin} alt="profile image" />
              </div>
            </a>
            <a
              href="https://twitter.com/kushagrasarathe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.icon}>
                <Image src={twitter} alt="profile image" />
              </div>
            </a>
            <a
              href="https://discord.gg/6yRSzaz66n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.icon}>
                <Image src={discord} alt="profile image" />
              </div>
            </a>
            {/* <a
              href="https://msng.link/o/?kushagrasarathe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.icon}>
                <Image src={telegram} alt="profile image" />
              </div>
            </a> */}
          </div>
        </div>
      </main>

      <div id="about" className={styles.about}>
        <h1>About Me</h1>
        <div className={styles.about_content}>
          <div className={styles.hero2}>
            <Image src={hero2} alt="profile image" />
          </div>
          <p>
            Hi, I&#x27;m Kushagra Sarathe, I&#x27;m a Computer Science Graduate & Frontend
            Developer based in India.
          </p>
        </div>
        <h2>Tech Stack</h2>
        <div className={styles.tech}>
          <div className={styles.tech_icon}>
            <Image src={html} alt="profile image" />
          </div>
          <div className={styles.tech_icon}>
            <Image src={css} alt="profile image" />
          </div>
          <div className={styles.tech_icon}>
            <Image src={tailwind} alt="profile image" />
          </div>
          <div className={styles.tech_icon}>
            <Image src={bootstrap} alt="profile image" />
          </div>
          <div className={styles.tech_icon}>
            <Image src={js} alt="profile image" />
          </div>
          <div className={styles.tech_icon}>
            <Image src={reactjs} alt="profile image" />
          </div>
          <div className={styles.tech_icon}>
            <Image src={nextjs} alt="profile image" />
          </div>
          <div className={styles.tech_icon}>
            <Image src={node} alt="profile image" />
          </div>
          <div className={styles.tech_icon}>
            <Image src={linux} alt="profile image" />
          </div>
          <div className={styles.tech_icon}>
            <Image src={git} alt="profile image" />
          </div>
          <div className={styles.tech_icon}>
            <Image src={bash} alt="profile image" />
          </div>
          <div className={styles.tech_icon}>
            <Image src={figma} alt="profile image" />
          </div>
        </div>
      </div>

      <div>
        <h2>Projects</h2>
        
      <div className={styles.hero1}>
        <Image src={hero1} alt="profile image" />
      </div>
      </div>
    </div>
  );
}
