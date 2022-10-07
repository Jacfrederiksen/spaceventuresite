import React from "react";
import styles from "./popup.module.scss";

const Popup = ( props ) => {

  return (
    <div className={styles.popup_bg_overlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <div className={styles.title}>{props.title}</div>

          <button
            onClick={() => props.setMessage(false)}
            className={styles.close}
          >
            &times;
          </button>
        </div>

        <div className={styles.body}>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
