// import styles from "./Main.modeul.css";
import Banner from "./Banner";
import ItemCardMain from "./ItemCardMain";

interface toggleThemeProps {
  toggleTheme: boolean;
  onPageChange: () => void;
}

export default function Main({ toggleTheme, onPageChange }: toggleThemeProps) {
  return (
    <div className="mainContainer">
      <Banner onPageChange={onPageChange} />
      <ItemCardMain
        title="패션"
        category={["men's clothing", "women's clothing"]}
        toggleTheme={toggleTheme}
      />
      <ItemCardMain
        title="액세서리"
        category={"jewelery"}
        toggleTheme={toggleTheme}
      />
      <ItemCardMain
        title="디지털"
        category={"electronics"}
        toggleTheme={toggleTheme}
      />
    </div>
  );
}
