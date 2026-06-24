import React from "react";
import { Link } from "react-router-dom";

const AnimalCard = ({ animal }) => {
  const { id, name, price, image, category } = animal;

  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg">
      <img src={image} alt={name} className="h-48 w-full object-cover" />

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">Category: {category}</p>
        <p className="text-green-600 font-semibold">৳ {price}</p>

        <Link
          to={`/details/${id}`}
          className="inline-block mt-2 bg-blue-500 text-white px-3 py-1 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AnimalCard;
