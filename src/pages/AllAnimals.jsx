import React, { useEffect, useState } from "react";
import AnimalCard from "../components/AnimalCard";

const AllAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimals(data);
        setLoading(false);
      });
  }, []);

  // sorting by price
  const handleSort = (order) => {
    setSortOrder(order);

    let sortedData = [...animals];

    if (order === "low") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (order === "high") {
      sortedData.sort((a, b) => b.price - a.price);
    }

    setAnimals(sortedData);
  };

  if (loading) {
    return <div className="text-center py-10 text-xl">Loading animals...</div>;
  }

  return (
    <div className="p-6">
      {/* Sort Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => handleSort("low")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Low Price
        </button>

        <button
          onClick={() => handleSort("high")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          High Price
        </button>
      </div>

      {/* Animal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimals;
