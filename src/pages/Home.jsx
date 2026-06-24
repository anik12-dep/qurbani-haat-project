import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimalCard from "../components/AnimalCard";

const Home = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => setAnimals(data.slice(0, 4))); // featured 4 items
  }, []);

  return (
    <div className="space-y-12">
      {/* ================= HERO SECTION ================= */}
      <section className="text-center bg-green-50 py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to QurbaniHat 🐄</h1>

        <p className="text-gray-600 mb-6">
          Buy healthy livestock for Qurbani easily and safely.
        </p>

        <Link
          to="/animals"
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Browse Animals
        </Link>
      </section>

      {/* ================= FEATURED ANIMALS ================= */}
      <section className="px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Featured Animals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>

      {/* ================= QURBANI TIPS ================= */}
      <section className="bg-gray-100 py-10 px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Qurbani Tips 🐐</h2>

        <ul className="max-w-2xl mx-auto space-y-3 text-gray-700">
          <li>✔ Always choose a healthy animal</li>
          <li>✔ Check age and weight before buying</li>
          <li>✔ Ensure vaccination is done</li>
          <li>✔ Avoid sick or weak animals</li>
        </ul>
      </section>

      {/* ================= TOP BREEDS ================= */}
      <section className="px-6 pb-10">
        <h2 className="text-2xl font-bold text-center mb-6">Top Breeds 🐄</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-white shadow px-4 py-2 rounded">Sahiwal</span>
          <span className="bg-white shadow px-4 py-2 rounded">Deshi Cow</span>
          <span className="bg-white shadow px-4 py-2 rounded">Boer Goat</span>
          <span className="bg-white shadow px-4 py-2 rounded">
            Black Bengal
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
