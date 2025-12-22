import React from "react";
import { Button } from "../Button/Button.tsx";
import * as styles from "./ErrorPopup.css.ts";

interface Props {
  message: string;
  onClose: () => void;
}

const ErrorPopup: React.FC<Props> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <p>{message}</p>
          <Button text="Close" onClick={onClose}/>
      </div>
    </div>
  );
};

export default ErrorPopup;