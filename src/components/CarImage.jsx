import React, { useEffect, useState } from 'react';

const CarImage = ({ car }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (car) {
      setImage(car.images[0]);
    }
  }, [car]);

  if (!image) return <div>No image available</div>;

  return (
    <div className="flex flex-col gap-5">
      {/* Main image */}
      <div className="bg-primary rounded-2xl overflow-hidden flexCenter w-full h-[244px] lg:h-[322px]">
        <img
          src={image}
          alt="main car"
          loading="eager"
          className="max-w-full max-h-full object-center"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-3">
        {car.images.map((item, index) => (
          <button
            key={index}
            onClick={() => setImage(item)}
            type="button"
            className={`bg-primary rounded-2xl overflow-hidden flexCenter w-full h-[111px] lg:h-[122px] transition-transform duration-500 ${
              item === image
                ? 'border-4 border-solid border-blue-500/20 scale-[1.02]'
                : 'hover:scale-[1.02]'
            }`}
          >
            <img
              src={item}
              alt={`thumb-${index}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarImage;


