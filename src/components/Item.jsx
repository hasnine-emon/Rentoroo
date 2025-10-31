import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/data";

const Item = ({ car = {} }) => {
  const navigate = useNavigate();
  const currency = "$";
  const colors = ["#f5f5f5", "#f0f9fd", "#fcf6ed"];

  // safe id extraction and color choice
  const idStr = String(car?._id ?? car?.id ?? "0");
  const last4 = idStr.slice(-4);
  const idx = isNaN(parseInt(last4, 16))
    ? 0
    : parseInt(last4, 16) % colors.length;
  const bgColor = colors[idx];

  // safe fields with fallbacks
  const title = car?.title ?? "Untitled";
  const bodyType = car?.bodyType ?? "Unknown";
  const salePrice = car?.price?.sale ?? 0;
  const rentPrice = car?.price?.rent ?? 0;
  const imageUrl =
    (Array.isArray(car?.images) && car.images[0]) ||
    car?.image?.[0] ||
    assets.placeholder; // ensure you have placeholder in assets
  const specs = car?.specs ?? car?.spacs ?? {}; // tolerate both keys
  const transmission = specs.transmission ?? "—";
  const seats = specs.seats ?? "—";
  const fueltype = specs.fueltype ?? "—";
  const odometer = car?.odometer ?? "—";
  const description = car?.description ?? "";

  // helper to format price nicely
  const fmt = (n) => (typeof n === "number" ? n.toLocaleString() : String(n));

  return (
    <div
      onClick={() => {
        navigate("/listing/" + idStr);
        scrollTo(0, 0);
      }}
      className="p-4 rounded-lg cursor-pointer h-full flex flex-col justify-between"
      style={{ backgroundColor: bgColor }}
    >
      <h4 className="text-lg font-semibold">{title}</h4>

      <div className="mt-2">
        <h5 className="text-sm text-gray-600">{bodyType}</h5>
        <div className="mt-1 text-base font-medium">
          {currency}
          {fmt(salePrice)} &nbsp;|&nbsp; {currency}
          {fmt(rentPrice)}
          <span className="text-xs"> /day</span>
        </div>
      </div>

      {/* image */}
      <div className="relative py-4 flex justify-center">
        <img
          src={imageUrl}
          alt={title + " image"}
          className="w-full max-w-[250px] h-[160px] object-contain object-center rounded-xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* info */}
      <div className="mt-2 text-sm">
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="flex items-center gap-2">
            <img src={assets.transmission} alt="transmission" width={19} />
            <span>{transmission}</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={assets.seats} alt="seats" width={23} />
            <span>{seats}</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={assets.fueltype} alt="fuel type" width={19} />
            <span>{fueltype}</span>
          </div>

          <div className="flex items-center gap-2">
            <img src={assets.odometer} alt="odometer" width={19} />
            <span>{odometer}</span>
          </div>
        </div>

        <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default Item;
