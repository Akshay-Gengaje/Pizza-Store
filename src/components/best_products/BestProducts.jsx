import { useRef } from "react";
import Slider from "./Slider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const BestProducts = () => {
  const sliderRef = useRef(null);

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="mx-10 lg:mx-24 mb-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-raleway font-semibold">
          <span className="font-bold text-red-500 drop-shadow-xl">Best</span>{" "}
          Products
        </h1>
        <div className="flex gap-5">
          <button
            onClick={handleScrollLeft}
            className="bg-orange-400 text-xl text-white p-2 rounded-full hover:bg-orange-500"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleScrollRight}
            className="bg-orange-400 text-xl text-white p-2 rounded-full hover:bg-orange-500"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <Slider sliderRef={sliderRef} />
    </div>
  );
};

export default BestProducts;
