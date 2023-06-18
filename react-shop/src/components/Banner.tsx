import styles from "./Banner.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "./Button";

interface togglePageProps {
  // togglePage: boolean;
  onPageChange: () => void;
}

export default function Banner({ onPageChange }: togglePageProps) {
  const handlePageToggle = () => {
    onPageChange();
  };
  const items = [
    {
      img: "https://react-shop-oinochoe.vercel.app/img_shop_fashion.jpeg",
      name: "물빠진 청바지!",
      description: "이제 막 도착한 패션 청바지를 구경해 보세요.",
      category: ["men's clothing", "women's clothing"],
    },
    {
      img: "https://react-shop-oinochoe.vercel.app/img_shop_digital.jpeg",
      name: "신속한 업무처리!",
      description: "다양한 디지털 상품을 둘러보세요.",
      category: ["electronics"],
    },
    {
      img: "https://react-shop-oinochoe.vercel.app/img_shop_grocery.jpeg",
      name: "신선한 식품! ",
      description: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
      category: null,
    },
  ];
  const goLinkStyle = {
    background: "black",
    color: "white",
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        interval={3000}
        infiniteLoop
      >
        {items.map((item, index) => (
          <div className={styles.slide} key={index}>
            <img src={item.img} alt={item.name} />
            <div className={styles.title}>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <Button style={goLinkStyle} onClick={handlePageToggle}>
                바로가기
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
