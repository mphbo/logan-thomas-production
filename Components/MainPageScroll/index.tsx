import React, { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../../styles/Home.module.css";
import Heading from "../Heading";
import Section from "../Section";

function MainPageScroll() {
  const parallax = useRef<IParallax>(null);
  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <Parallax pages={3} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        offset={0}
        speed={2}
        onClick={() => scroll(2)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Heading />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={1.5}
        style={{ backgroundColor: "#31afa7" }}
      />

      <ParallaxLayer
        offset={1}
        speed={0.25}
        onClick={() => scroll(3)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Section title="Web Projects" />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1.5}
        style={{ backgroundColor: "#31afa7" }}
      />

      <ParallaxLayer
        offset={2}
        speed={0.25}
        onClick={() => scroll(3)}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Section title="Technologies" />
      </ParallaxLayer>
    </Parallax>
  );
}

export default MainPageScroll;

{
  /* <div className={styles.grid}>
        <div className={styles.grid}>
          <div className={styles.outerCard}>
            <div className={styles.card}>
              <a href="http://loganthomas.ca" className={styles.innerCard}>
                <h2>Web Projects &rarr;</h2>
                <p>Find in-depth information about my projects.</p>
              </a>
            </div>
          </div>

          <div className={styles.outerCard}>
            <div className={styles.card}>
              <a href="http://loganthomas.ca" className={styles.innerCard}>
                <h2>About &rarr;</h2>
                <p>Check out what I am all about in the about section.</p>
              </a>
            </div>
          </div>

          <div className={styles.outerCard}>
            <div className={styles.card}>
              <a
                href="https://www.canva.com/design/DAEhZ8vjuBc/EUMbAoelpyf8er338asyYw/view?utm_content=DAEhZ8vjuBc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                className={styles.innerCard}
              >
                <h2>Resume &rarr;</h2>
                <p>Link to my live resume.</p>
              </a>
            </div>
          </div>

          <div className={styles.outerCard}>
            <div className={styles.card}>
              <a href="http://loganthomas.ca" className={styles.innerCard}>
                <h2>Other &rarr;</h2>
                <p>Find other information on myself and what I do.</p>
              </a>
            </div>
          </div>
        </div> */
}
