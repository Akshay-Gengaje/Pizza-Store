import ImageSelector from "./ImageSelector";

const PizzaNameSlider = ({ selectedItem, setSelectedItem, images }) => {
  if (!images || images.length === 0) {
    return <div className="text-center">No Pizzas Available!</div>;
  }

  return (
    <div className="flex-1 my-auto md:h-[80vh] flex items-center">
      <div className="mx-5 lg:mx-20 space-y-6">
        <p className="text-orange-400 text-2xl font-bold font-playwrite">
          Best pizza brand in the world!
        </p>
        <p className="text-4xl lg:text-7xl font-bold text-left text- font-raleway">
          The teastiest and best pizza in the world!
        </p>
        <ImageSelector
          images={images}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <div className="flex">
          <div className="border-2 hover:border-orange-400 p-0.5 rounded-3xl transition-colors 1s">
            <button className="bg-orange-400 py-3 px-5 rounded-3xl text-white font-semibold">
              <span className="drop-shadow">Order Now</span>
            </button>
          </div>
          <div className="ml-5 border-2 hover:border-red-600 p-0.5 rounded-3xl transition-colors 1s">
            <button className=" bg-red-600 py-3 px-5 rounded-3xl text-white font-semibold ">
              <span className="drop-shadow">View Menu</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaNameSlider;
