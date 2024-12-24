import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div className="hover:bg-red-700 hover:text-white bg-orange-100 rounded-md max-w-80 min-w-80">
      <img
        src={product.image}
        alt={product.name}
        className="w-full bg-contain"
      />
      <div className="mx-5 mt-3">
        <h1 className="text-xl font-semibold">{product.name}</h1>
        <div className="text-left line-clamp-2 mt-2">
          {product.ingredients.map((ingt, index) => (
            <span key={index} className="mr-2">
              {ingt},
            </span>
          ))}
        </div>
        <div className="my-5 flex justify-between items-center">
          <p className="text-xl font-bold">69$</p>
          <div className="text-xl hover:cursor-pointer hover:bg-white hover:rounded-full p-2 hover:text-2xl hover:text-red-600">
            <FiShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
