import React from "react";
import NavBar from "../Components/navbar_notLanding";
import ScrollToTop from "../Components/scrollToTop";
import aboutUsIIITM from "../Components/assets/aboutUs.png";
import styles from "../Components/styles/aboutUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={aboutUsIIITM}
            alt="aboutUs- IIITM Block View"
          />
        </div>
        <p className={styles.content}>
          <br />
          True success is born from innovation, not just routine tasks. The world thrives on visionaries who dare to dream and take action. While recognition may be fleeting, the impact of a powerful idea lasts forever. At StarkFund, we believe that every ambitious project deserves a strong foundation and the right support to flourish.
          <br />
          <br />
          We are more than just a crowdfunding platform—we are a community driven by passion, purpose, and progress. Whether you're an entrepreneur, a creative thinker, or a change-maker, StarkFund empowers you to bring your ideas to life with the backing of a global network of supporters.
          <br />
          <br />
          Success isn't just about funding; it's about building something that lasts. With the right resources, guidance, and community, even the boldest dreams can become reality. Because at StarkFund, we don't just fund ideas—we forge the future.
          <br />
        </p>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
