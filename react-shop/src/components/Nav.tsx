import styles from "./Nav.module.css";
import Button from "./Button";
import moonSvg from "../assets/moon.svg";
import sunSvg from "../assets/sun.svg";
import cartWhiteSvg from "../assets/cartWhite.svg";
import cartBlackSvg from "../assets/cartBlack.svg";

interface toggleThemeProps {
  toggleTheme: boolean;
  onToggleTheme: () => void;
}
export default function Nav({ toggleTheme, onToggleTheme }: toggleThemeProps) {
  const buttonStyle = {
    fontSize: "18px",
    color: toggleTheme ? "black" : "white",
    background: "transparent",
  };

  const navStyle = {
    backgroundColor: toggleTheme ? "white" : "#24292f",
  };
  const logoStyle = {
    color: toggleTheme ? "black" : "white",
  };

  const inputStyle = {
    backgroundColor: toggleTheme ? "#D8D8D8" : "#585858",
  };
  const cartStyle = {
    padding: "5px 16px",
  };
  const handleButtonClick = () => {
    onToggleTheme();
  };

  return (
    <div className={styles.navContainer} style={navStyle}>
      <div className={styles.logo} style={logoStyle}>
        React Shop
      </div>
      <div className={styles.hoverable}>
        <Button style={buttonStyle} onClick={onToggleTheme}>
          패션
        </Button>
      </div>
      <div className={styles.hoverable}>
        <Button style={buttonStyle} onClick={onToggleTheme}>
          액세서리
        </Button>
      </div>
      <div className={styles.hoverable}>
        <Button style={buttonStyle} onClick={onToggleTheme}>
          디지털
        </Button>
      </div>
      <div className={styles.space}></div>
      <Button style={buttonStyle} onClick={handleButtonClick}>
        <img src={toggleTheme ? moonSvg : sunSvg} alt="moon" />
      </Button>
      <input
        type="text"
        placeholder="검색"
        className={styles.input}
        style={inputStyle}
      />
      <div>
        <img
          src={toggleTheme ? cartBlackSvg : cartWhiteSvg}
          alt="장바구니"
          style={cartStyle}
        />
      </div>
    </div>
  );
}
