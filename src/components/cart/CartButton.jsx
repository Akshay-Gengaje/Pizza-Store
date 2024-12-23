const CartButton = () => {
  return (
    <div className="relative">
      <img src="/cart.png" alt="cart" className="h-8" />
      <span className="absolute -top-4 -right-3 bg-yellow-400 text-black w-6 h-6 text-sm rounded-full flex items-center justify-center">
        2
      </span>
    </div>
  );
};

export default CartButton;
