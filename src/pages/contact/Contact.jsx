import React from "react";
import styles from "./contact.module.scss";
import Form from "../../components/form/Form";

const Contact = () => {
  return (
    <div className={styles.contact_con}>
      <div className={styles.header_con}>
        <h1>Kontakt os her</h1>
      </div>
      <div className={styles.map_con}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71064.98976759403!2d10.111935106038702!3d56.17817970534573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c4cb15397788b%3A0x8c4dd7d9912ea2af!2sAarhus!5e0!3m2!1sen!2sdk!4v1665069282003!5m2!1sen!2sdk"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.info_con}>
        <h2>Kontakt</h2>
        <p>
          Skulle du sidde med et spørgsmål eller to, så skriv endeligt til os og
          vil vil vende tilbage til dig hurtigst muligt!
        </p>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
