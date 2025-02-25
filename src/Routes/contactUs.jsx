import React from "react";
import NavBar from "../Components/navbar_notLanding";
import Form from "../Components/queryForm";
import ScrollToTop from "../Components/scrollToTop";
import styles from "../Components/styles/contactUs.module.css";

const AboutUs = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <div className={styles.container}>
        <h1 className={styles.header}>CONTACT US</h1>
        <div className={styles.content}>
        True success comes because of invention, except for official duties. Following this, we are praised temporarily, and the spirit is present! There is a real need for a life of responsibility!
          <br />
          <br />
          <div className={styles.map}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.0728487182853!2d80.84824230075938!3d16.35911195614011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a360049fe7558b5%3A0x2fffafae002651dc!2s7-212%2F1%2C%20Rajesh%20Nagar%2C%20D1%20Block%2C%20Rajesh%20Nagar%2C%20Vuyyuru%2C%20Andhra%20Pradesh%20521165!5e0!3m2!1sen!2sin!4v1740224316983!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1146.1725495386397!2d80.848989465015!3d16.359109580620792!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1740223885353!5m2!1sen!2sin"
              width="600"
              height="380"
              frameBorder="0"
              aria-hidden="false"
            ></iframe>
          </div>
          <div className="row">
            <div className={`col-md-8 ${styles.contactUs}`}>
              <h1 className={styles.inheader}>Get In Touch</h1>
              <p className={styles.inpara}>
                Feel free to contact us in case of any queries
              </p>
              <div className={styles.content}>
                <Form />
              </div>
            </div>
            <div className={`col-md-4 ${styles.details}`}>
              <h1 className={styles.inheader}>Our Office</h1>
              <p className={styles.incontent}>
                <b>STARK FUND</b>
                <br /> <br />
                For any queries, reach us out at email : gpchandu2084@gmail.com
                <br />
                +91-9494583628
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
