
import { bestProducts } from "../../constants/bestproduts";
import ProductCard from "./ProductCard";

const Slider = ({ sliderRef }) => {
  return (
    <div
      ref={sliderRef}
      className="flex w-full gap-5 mt-5 overflow-x-scroll no-scrollbar "
    >
      {bestProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


export default Slider;