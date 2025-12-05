import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets,dummyCars } from "../assets/data";
import CarImage from "../components/CarImage";

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();
  const [pickUpData, setPickUpData] = useState();
  const [dropoffData, setDropoffData] = useState();
  const [isAvailable, setIsAvailable] = useState();
  const currency = "$";
  const navigate = useNavigate();

  useEffect(() => {
    if (dummyCars && dummyCars.length > 0) {
      const foundCar = dummyCars.find((c) => c._id == id);
      if (foundCar) {
        setCar(foundCar);
      }
    }
  }, [id]);

  return (
    car && (
      <div className="bg-primary">
        <div className="max-padd-container px-6 pt-2 pb-16">
          {/* container */}
          <div className="flex flex-col md:flex-row gap-6 mt-16">
            {/* Info Left Side */}
            <div className="flex-[5] bg-white p-5 rounded-xl my-4">
              <p className="flexStart gap-x-2">
                <img src={assets.pin} alt="" />
                <span>{car.address}</span>
              </p>

              <div className="flex justify-between flex-col sm:flex-row sm:items-end mt-3">
                <h3>{car.title}</h3>
                <h4>
                  {currency}
                  {car.price.sale} | {car.price.rent}.00/day
                </h4>
              </div>

              <div className="flex justify-between items-start my-1">
                <h4 className="text-solid">{car.bodyType} </h4>
                <div className="flex items-baseline gap-2 text-solid relative top-1.5">
                  <h4 className="relative bottom-0.5 text-black">5.0</h4>
                  <img src={assets.star} alt="" width={18} />
                  <img src={assets.star} alt="" width={18} />
                  <img src={assets.star} alt="" width={18} />
                  <img src={assets.star} alt="" width={18} />
                  <img src={assets.star} alt="" width={18} />
                </div>
              </div>

              <div className="flex gap-x-4 mt-3">
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.transmission} alt="" width={19} />{" "}
                  {car.specs.transmission}
                </p>
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.seats} alt="" width={19} /> {car.specs.seats}
                </p>
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.fueltype} alt="" width={19} />{" "}
                  {car.specs.fueltype}
                </p>
                <p className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]">
                  <img src={assets.odometer} alt="" width={19} />{" "}
                  {car.specs.odometer}
                </p>
              </div>

              <div>
                <h4>Car Details</h4>
                <p className="mb-4">{car.description}</p>
              </div>

              <h4 className="mt-4 mb-2">Features</h4>
              <div className="flex flex-wrap gap-2">
                {car.features.map((feature, index) => (
                  <p key={index} className="p-3 py-1 rounded-lg bg-primary">
                    {feature}
                  </p>
                ))}
              </div>

              {/* Form / Check Availability */}
              <form
                onSubmit=""
                className="text-gray-500 bg-primary rounded-xl px-6 py-5 flex flex-col gap-4 max-w-4xl mx-auto ring-1 ring-slate-900/5 relative mt-10 shadow-md"
              >
                {/* Inputs Row */}
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Pick-up Date */}
                  <div className="flex flex-col w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <img src={assets.calendar} width={20} alt="" />
                      <label htmlFor="pickUpDate">Pick-up Date</label>
                    </div>
                    <input
                      type="date"
                      onChange={(e) => setPickUpData(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-solid"
                    />
                  </div>

                  {/* Drop-off Date */}
                  <div className="flex flex-col w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <img src={assets.calendar} width={20} alt="" />
                      <label htmlFor="dropOffDate">Drop-off Date</label>
                    </div>
                    <input
                      type="date"
                      onChange={(e) => setDropoffData(e.target.value)}
                      min={pickUpData}
                      id="dropOffDate"
                      disabled={!pickUpData}
                      className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-solid disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Button under inputs */}
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 bg-solid text-white px-6 py-3 rounded-lg hover:opacity-90 transition mt-2 w-full lg:w-auto"
                >
                  <img
                    src={assets.search}
                    alt=""
                    width={20}
                    className="invert"
                  />
                  <span>{isAvailable ? "Book Car" : "Check Dates"}</span>
                </button>
              </form>

              {/* className="p-6 bg-primary rounded-xl mt-10 w-full 
              max-w-md sm:max-w-lg lg:max-w-xl mx-auto shadow-md"
               Contact agency */}
              <div className="text-gray-500 bg-primary rounded-xl px-6 py-5 flex flex-col gap-4 max-w-4xl mx-auto ring-1 ring-slate-900/5 relative mt-10 shadow-md">
                <h4 className="mb-3 text-lg font-semibold">
                  For Buying Contact
                </h4>

                <div className="text-sm divide-y divide-gray-500/50 ring-1 ring-slate-900/10 rounded">
                  {/* Agency Info */}
                  <div className="flex items-start justify-between p-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h5 className="font-semibold">{car.agency.name}</h5>
                        <p className="bg-green-500/20 px-2 py-0.5 rounded-full text-xs text-green-600 border border-green-500/30">
                          Agency
                        </p>
                      </div>
                      <p className="text-gray-600">Agency Office</p>
                    </div>
                    <img
                      src={car.agency.owner.image}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>

                  {/* Contact Details */}

                  <div className="flex items-center gap-2 p-3">
                    <img src={assets.phone} alt="" width={14} />
                    <p>{car.agency.contact}</p>
                  </div>

                  <div className="flex items-center gap-2 p-3">
                    <img src={assets.mail} alt="" width={14} />
                    <p>{car.agency.email}</p>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-2 p-3">
                    <button className="flex items-center justify-center gap-2 bg-solid text-white px-4 py-2 rounded w-full sm:w-auto hover:opacity-90 transition">
                      <img src={assets.mail} alt="" width={19} />
                      Send Email
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-solid text-white px-4 py-2 rounded w-full sm:w-auto hover:opacity-90 transition">
                      <img src={assets.phone} alt="" width={19} />
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Right Side */}
            <div className="flex-[4] w-full bg-white p-4 rounded-xl my-4">
              <CarImage car={car} />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CarDetails;
