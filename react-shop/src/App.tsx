import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { useState } from "react";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [productPage, setProductPage] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const togglePage = () => {
    setProductPage(!productPage);
  };

  return (
    <div className={darkTheme ? "white-theme" : "dark-theme"}>
      <Nav toggleTheme={darkTheme} onToggleTheme={toggleTheme} />
      {/* <div className="mainContainer">
        <Main toggleTheme={darkTheme} />
      </div> */}
      <div className="mainContainer">
        {productPage ? (
          <ProductPage toggleTheme={darkTheme} />
        ) : (
          <Main toggleTheme={darkTheme} onPageChange={togglePage} />
        )}
      </div>
      <Footer toggleTheme={darkTheme} />
    </div>
  );
}

export default App;
