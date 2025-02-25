import React from "react";
import ChildImage from "./assets/whyUsSection.jpg";
import styles from "./styles/whyUsSection.module.css";

const WhyUs = () => {
  return (
    <React.Fragment>
      <div className="row col-12">
        <div className={`col-md-8 ${styles.whyUs}`}>
          <h1 className={styles.header}>Why us ?</h1>
          <p className={styles.para}>
          At STARK FUND, we believe in empowering dreamers and innovators by providing a seamless and secure crowdfunding experience. Our user-friendly interface, transparent policies, and dedicated support team ensure that every campaign gets the attention it deserves.
          <br/>
          We prioritize security and trust, implementing robust fraud prevention measures and secure payment gateways to protect both campaign creators and backers. Every contribution made on our platform is safeguarded to ensure funds reach the right hands.
          <br/>
          Our platform offers powerful features such as real-time analytics, AI-powered campaign insights, and strategic promotional tools to help you maximize your reach and funding potential. Whether you're a startup, nonprofit, or creative individual, we have the tools to help you succeed.
          <br/>
          Unlike other platforms, we offer flexible funding options, low transaction fees, and a strong community of passionate supporters. Our team continuously works to enhance the crowdfunding experience, making it more accessible and efficient.
          </p>
        </div>
        <div className="col-md-4">
          <img className={styles.image} src={ChildImage} alt="HappyKids" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default WhyUs;
