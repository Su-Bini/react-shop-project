import styles from "./Footer.module.css";
import cardVisa from "../assets/cardList/cardVisa.svg";
import cardMaster from "../assets/cardList/cardMaster.svg";
import cardAmex from "../assets/cardList/cardAmex.svg";
import cardPaypal from "../assets/cardList/cardPaypal.svg";
import cardDiners from "../assets/cardList/cardDiners.svg";
import cardDiscover from "../assets/cardList/cardDiscover.svg";

import facebookWhite from "../assets/snsList/facebookWhite.svg";
import instagramWhite from "../assets/snsList/instagramWhite.svg";
import githubWhite from "../assets/snsList/githubWhite.svg";

import facebookBlack from "../assets/snsList/facebookBlack.svg";
import instagramBlack from "../assets/snsList/instagramBlack.svg";
import githubBlack from "../assets/snsList/githubBlack.svg";

interface FooterProps {
  toggleTheme: boolean;
}

export default function Footer({ toggleTheme }: FooterProps) {
  const cardSvg = [
    cardVisa,
    cardMaster,
    cardAmex,
    cardPaypal,
    cardDiners,
    cardDiscover,
  ];

  const titleStyle = {
    color: toggleTheme ? "#2f3d49" : "#e6e6e6",
  };

  const footerContainerStyle = {
    backgroundColor: toggleTheme ? "#dcdcdd" : "#1d252b",
  };
  return (
    <div className={styles.footerContainer} style={footerContainerStyle}>
      <a href="https://zero-base.co.kr/">
        <p style={titleStyle}>제로베이스</p>
      </a>
      <div className={styles.cardList}>
        {cardSvg.map((card, index) => (
          <img key={index} src={card} alt="카드" className={styles.cardIcon} />
        ))}
      </div>
      <div className={styles.cardList}>
        <img
          src={toggleTheme ? facebookBlack : facebookWhite}
          alt="SNS"
          className={styles.cardIcon}
        />
        <img
          src={toggleTheme ? instagramBlack : instagramWhite}
          alt="SNS"
          className={styles.cardIcon}
        />
        <img
          src={toggleTheme ? githubBlack : githubWhite}
          alt="SNS"
          className={styles.cardIcon}
        />
      </div>
      <p style={titleStyle}>Copyright © 2022 Zero Base</p>
    </div>
  );
}
