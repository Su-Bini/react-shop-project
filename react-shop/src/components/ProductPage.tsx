import styles from "./ProductPage.module.css";

interface toggleThemeProps {
  toggleTheme: boolean;
  // onToggleTheme: () => void;
}

export default function ProductPage({ toggleTheme }: toggleThemeProps) {
  return (
    <div className={toggleTheme ? styles.lightTheme : styles.darkTheme}>
      {/* 내용 */}
    </div>
  );
}
