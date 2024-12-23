const ImageSelector = ({ images, selectedItem, setSelectedItem }) => {
  return (
    <div className="w-fit">
      <div className="flex gap-2 mt-4">
        {images?.map((img, index) => (
          <button
            key={img.name}
            onClick={() => setSelectedItem(index)}
            className={`rounded border p-1 hover:shadow-md focus:outline-none ${
              selectedItem === index ? "shadow-2xl" : ""
            }`}
          >
            <img
              src={img.image}
              alt={img.name}
              className="w-24 rounded"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      <div className={"h-1 w-full mt-0.5"}>
        <div
          className={`h-1 bg-gray-400 shadow-lg rounded-sm`}
          style={{
            width: `${100 / images.length}%`,
            transform: `translateX(${100 * selectedItem}%)`,
            transition: "transform 1s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ImageSelector;
