import { useEffect, useState } from "react";

const PizzaImageSlider = ({ images, selectedItem }) => {
  const [rotation, setRotation] = useState(0);
  const [prevIndex, setPrevIndex] = useState(selectedItem);

  useEffect(() => {
    const delta = selectedItem - prevIndex;
    const newRotation = rotation + delta * (360 / images.length); // Adjust rotation based on image count
    setRotation(newRotation);
    setPrevIndex(selectedItem);
  }, [selectedItem]);

  if (!images || images.length === 0) {
    return <div className="text-center">No Images Available!</div>;
  }

  return (
    <div className="hidden flex-1 relative  w-full overflow-hidden md:flex justify-center items-center">
      <div
        className="absolute -left-44 top-100 lg:-left-20 h-20 w-20 rounded-full flex justify-center items-center"
        style={{
          transform: `translateX(-50%) translateY(-50%) rotate(${rotation}deg)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {images.map((img, index) => {
          const angle = (360 / images.length) * index * 2;
          const isActive = index === selectedItem;

          return (
            <div
              key={img.name}
              className="absolute w-96 h-96 flex justify-center items-center "
              style={{
                transform: `rotate(${angle}deg) translateX(400px) rotate(-${angle}deg)`,
                transition: isActive ? "opacity 0.5s ease" : "none",
                opacity: isActive ? 1 : 0.5,
                zIndex: isActive ? 10 : 0,
              }}
            >
              <img
                src={img.image}
                alt={img.name}
                className={`object-contain rounded-xl w-full h-full`}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PizzaImageSlider;
