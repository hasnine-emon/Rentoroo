import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Item from "../components/Item";
import { dummyCars } from "../assets/data";

const Listing = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    bodyType: [],
    priceRange: [],
  });
  const [selectedSort, setSelectedSort] = useState("");
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 6;
  const currency = "$";
  const [searchQuery, setSearchQuery] = useState(""); //temporary

  const [searchParams] = useSearchParams();
  const heroDestination = (searchParams.get("destination") || "")
    .toLowerCase()
    .trim();

  const sortOptions = ["Relevant", "Low to High", "High to Low"];
  const bodyType = [
    "Coupe",
    "SUV",
    "Hatchback",
    "Sadan",
    "Convertible",
    "Van",
    "Grand Tourer",
  ];

  const priceRange = [
    "0 to 20000",
    "20000 to 30000",
    "30000 to 50000",
    "50000 to 99000",
  ];
  //const toggle filter chackboxx
  const handleFilterChange = (checked, value, type) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev };
      if (checked) {
        updated[type].push(value);
      } else {
        updated[type] = updated[type].filter((v) => v !== value);
      }
      return updated;
    });
  };

  //sorting function
  const sortCars = (a, b) => {
    if (selectedSort == "Low to Hight") return a.price.sale - b.price.sale;
    if (selectedSort == "High to Low") return b.price.sale - a.price.sale;
    return 0;
  };
  //price filter
  const matchesPrice = (car) => {
    if (selectedFilters.priceRange.length === 0) return true;
    return selectedFilters.priceRange.some((range) => {
      const [max, min] = range.splite("to").map(Number);
      return car.price.sale >= min && car.price.sale <= mix;
    });
  };
  //type filter
  const matchesType = (car) => {
    if (selectedFilters.bodyType.length === 0) return true;
    return selectedFilters.bodyType.includes(car.bodyType);
  };
  //serch filter usimg headers search
  const matchesSearch = (car) => {
    if (!searchQuery) return true;
    return (
      car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.country.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  //hero destination filter

  const matchesHeroDestination = (car) => {
    if (!heroDestination) return true;
    return (car.city || "").toLowerCase().includes(heroDestination);
  };

  //filter & sort car

  const filteredCars = useMemo(() => {
    return dummyCars
      .filter(
        (c) =>
          matchesType(c) &&
          matchesPrice(c) &&
          matchesSearch(c) &&
          matchesHeroDestination(c)
      )
      .sort(sortCars);
  }, [dummyCars, selectedFilters, selectedSort, searchQuery, heroDestination]);

 

  return (
    <div className="bg-primary">
      <div className="max-padd-container !px-0 mt-18 pb-16">
        {/* container */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Filter -left Side */}
          <div className="min-w-72 bg-white p-4 pl-6 lg:pl-12 rounded-r-xl my-4">
            {/* sort by price */}
            <div className="py-6">
              <h5 className="mb-3">Sort by</h5>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="bg-primary ring-1 ring-slate-900/10 outline-none text-gray-50 text-sm font-semibold h-8 w-full rounded px-2"
              >
                {sortOptions.map((sort, index) => (
                  <option key={index} value={sort}>
                    {sort}
                  </option>
                ))}
              </select>
            </div>

            {/* Car Type */}
            <div className="p-5 mt-5 bg-primary rounded-xl">
              <h5 className="mb-4">Car Type </h5>
              {bodyType.map((type) => (
                <label
                  key={type}
                  className="flex gap-2 text-sm font-semibold text-gray-50 mb-1"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.bodyType.includes(type)}
                    onChange={(e) =>
                      handleFilterChange(e.target.checked, type, "bodyType")
                    }
                  />
                  {type}
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div className="p-5 mt-5 bg-primary rounded-xl">
              <h5 className="mb-4">Price Range </h5>
              {priceRange.map((price) => (
                <label
                  key={price}
                  className="flex gap-2 text-sm font-semibold text-gray-50 mb-1"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters.priceRange.includes(price)}
                    onChange={(e) =>
                      handleFilterChange(e.target.checked, type, "PriceRange")
                    }
                  />
                  {currency}
                  {price}{" "}
                </label>
              ))}
            </div>
          </div>

          {/* Filter car -right Side */}

          <div className="max-sm:px-10 sm:pr-10 bg-white p-4 rounded-l-xl my-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredCars.length > 0 ? (
                filteredCars.map((car) => <Item key={car} car={car} />)
              ) : (
                <p className="capitalize">No cars to show.</p>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;

