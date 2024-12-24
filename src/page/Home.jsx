import { useState } from "react";
import PizzaImageSlider from "../components/pizza_slider/PizzaImageSlider";
import PizzaNameSlider from "../components/pizza_slider/PizzaNameSlider";
import BestProducts from "../components/best_products/BestProducts";

const images = [
  { name: "Chicken Fanboy", image: "/pizzas/chicken-fanboy.jpg" },
  { name: "Mushroom Flex", image: "/pizzas/mushroom_flex.jpg" },
  { name: "Cheese Pizza", image: "/pizzas/cheese_pizza.jpg" },
];

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <>
      <div className="w-full flex flex-col md:flex-row h-screen">
        <PizzaImageSlider images={images} selectedItem={selectedItem} />
        <PizzaNameSlider
          images={images}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
      <BestProducts />
    </>
  );
};

export default Home;
