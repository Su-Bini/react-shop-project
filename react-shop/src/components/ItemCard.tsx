import styles from "./ItemCard.module.css";

interface Product {
  title: string;
  price: number;
  img: string;
  toggleTheme: boolean;
}

export default function ItemCard({ img, title, price, toggleTheme }: Product) {
  const titleStyle = {
    color: toggleTheme ? "#2f3d49" : "#e6e6e6",
    backgroundColor: toggleTheme ? "#e6e6e6" : "#2f3d49",
  };

  const cardContainerStyle = {
    border: toggleTheme ? "1px solid #d8d8d8" : "none",
  };
  return (
    <a>
      <div className={styles.cardContainer} style={cardContainerStyle}>
        <figure>
          <img className={styles.img} src={img} alt="상품이미지" />
        </figure>
        <figcaption className={styles.cardBody} style={titleStyle}>
          <h3>{title}</h3>
          <p>${price}</p>
        </figcaption>
      </div>
    </a>
  );
}
