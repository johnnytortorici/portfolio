import Head from "next/head";
import styles from "../styles/Home.module.css";
import Project from "../components/Project";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Johnny Tortorici - Web developer, number cruncher, creator.
        </title>
        <meta
          name="description"
          content="Montreal-based web developer, number cruncher and creator."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.gradient}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,32L60,69.3C120,107,240,181,360,192C480,203,600,149,720,112C840,75,960,53,1080,58.7C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className={styles.heading}>
        <div className={styles.title}>
          <h1>Johnny Tortorici</h1>
          <h2>Web developer, number cruncher, creator.</h2>
        </div>
        <p className={styles.skills}>React | Node.js | Express | MongoDB</p>
        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/in/johnnygt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/johnnytortorici"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -100 1440 320">
        <path
          fill="rgba(107,51,230, 0.2)"
          fillOpacity="1"
          d="M0,32L60,69.3C120,107,240,181,360,192C480,203,600,149,720,112C840,75,960,53,1080,58.7C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div className={styles.projects_wrapper}>
        <h3>Recent projects</h3>
        <div className={styles.projects}>
          <Project
            name="Wealthvitals"
            role="Founder - Full stack project"
            description="Financial planning application that aims to empower users to take
        better control of their finances."
            src="/images/wealthvitals.jpg"
            alt="Wealthvitals"
            href="https://github.com/johnnytortorici/wealthvitals"
          />
          <Project
            name="The Shoppies"
            role="Front-end, React project"
            description="Movie nomination demo built with React. Links to the OMDb API."
            src="/images/shoppies-responsive.jpg"
            alt="The Shoppies"
            href="https://shoppies-react.netlify.app/"
          />
        </div>
      </div>
    </>
  );
}
