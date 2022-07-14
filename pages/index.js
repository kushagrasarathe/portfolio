import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import pfp from "../src/assets/portrait.jpg";
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
    
      <br id="about" />

{/* 
      <div className={styles.separator}>
        <div className={styles.line}></div>
        <h1>About Me</h1>
        <div className={styles.line}></div>
      </div>   */}



      <h1 className={styles.center}>About Me</h1>
      <div className={styles.about}>
          <div className={styles.hero2}>
            <Image src={hero2} alt="profile image" />
          </div>
        {/* <h1>About Me</h1> */}
        {/* <div className={styles.about_content}> */}
          <p>
            Hi, I&#x27;m Kushagra Sarathe, I&#x27;m a Computer Science Graduate
            & Frontend Developer based in India. I had been doing bug-bounty
            hunting for past 2 years and had been reporting security flaws to
            different companies.
            <br />
            <br />
            Few months back I found my interst in development and since then
            I&#x27;ve been focusing on sharpening my frontend development skills
            by participating in different hackathons and building both solo and
            team projects.
          </p>
          <p></p>
        {/* </div> */}
      </div>

      {/* <br />
      <br />
      <br />
      <br /> */}

      {/* <div id="tech" className={styles.separator}>
        <div className={styles.line}></div>
        <h1>Tech Stack</h1>
        <div className={styles.line}></div>
        </div>
        <br />
        <br />
      <br /> */}

<br id="tech" />

      <h1 className={styles.center}>Tech Stack</h1>
      <div className={styles.center}>
        <div className={styles.tech}>
          <div className={styles.tech_icon}>
            <Image src={html} alt="profile image" />
            <span>HTML</span>

          </div>
          <div className={styles.tech_icon}>
            <Image src={css} alt="profile image" />
            <span>CSS</span>

          </div>
          <div className={styles.tech_icon}>
            <Image src={tailwind} alt="profile image" />
            <span>Tailwind</span>

          </div>
          <div className={styles.tech_icon}>
            <Image src={bootstrap} alt="profile image" />
            <span>Bootstrap</span>

          </div>
          <div className={styles.tech_icon}>
            <Image src={js} alt="profile image" />
            <span>JavaScript</span>

          </div>
          <div className={styles.tech_icon}>
            <Image src={reactjs} alt="profile image" />
            <span>ReactJS</span>

          </div>
          <div className={styles.tech_icon}>
            <Image src={nextjs} alt="profile image" />
            <span>NextJS</span>

          </div>
          <div className={styles.tech_icon}>
            <Image src={node} alt="profile image" />
            <span>NodeJS</span>

          </div>
          <div className={styles.tech_icon}>
            <Image src={linux} alt="profile image" />
            <span>Linux</span>

          </div>
          <div className={styles.tech_icon}>
            <Image src={git} alt="profile image" />
            <span>Git</span>
          </div>
          <div className={styles.tech_icon}>
            <Image src={bash} alt="profile image" />
            <span>Bash</span>

          </div>
          <div className={styles.tech_icon}>
            <Image src={figma} alt="profile image" />
            <span>Figma</span>

          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
 

      {/* <div>
        <h2>Projects</h2>

        <div className={styles.hero1}>
          <Image src={hero1} alt="profile image" />
        </div>
      </div> */}
    </div>
  );

}