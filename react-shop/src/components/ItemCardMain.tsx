import styles from "./ItemCardMain.module.css";
import ItemCard from "./ItemCard";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}
interface ItemProps {
  title: string;
  category: string[] | string;
  toggleTheme: boolean;
}
export default function ItemCardMain({
  title,
  category,
  toggleTheme,
}: ItemProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const filteredProducts = data.filter((product: Product) => {
          if (Array.isArray(category)) {
            return category.includes(product.category);
          }
          return product.category === category;
        });
        console.log(data);

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  const titleStyle = {
    color: toggleTheme ? "#24292f" : "#e6e6e6",
  };

  return (
    <div className={styles.ItemCardMainContainer}>
      <div className={styles.title} style={titleStyle}>
        {title}
      </div>
      <div className={styles.sort}>
        {products.map((product, index) => {
          if (index < 4) {
            return (
              <div key={product.id}>
                <ItemCard
                  img={product.image}
                  title={product.title}
                  price={product.price}
                  toggleTheme={toggleTheme}
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
