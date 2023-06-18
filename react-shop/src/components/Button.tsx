import styles from "./Button.module.css";
import { MouseEvent } from "react";

interface ButtonProps {
  style: object;
  children: string | number | React.ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ style, children, onClick }: ButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick(event);
  };

  return (
    <button className={styles.button} style={style} onClick={handleClick}>
      {children}
    </button>
  );
}
