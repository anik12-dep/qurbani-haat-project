import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const AnimalDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // 🔐 Proper login redirect (FIXED)
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    fetch("/animals.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setAnimal(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-10 text-xl">Loading details...</div>;
  }

  if (!animal) {
    return <div className="text-center py-10 text-xl">Animal not found</div>;
  }

  // input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // booking submit
  const handleBooking = (e) => {
    e.preventDefault();

    toast.success("Booking successful 🎉");

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* ================= ANIMAL DETAILS ================= */}
      <div className="border rounded-xl p-4 shadow space-y-4">
        {/* ✅ FIXED IMAGE (FULL SHOW, NO CROP) */}
        <div className="flex justify-center bg-gray-100 rounded p-2">
          <img
            src={animal.image}
            alt={animal.name}
            className="max-w-full max-h-[500px] object-contain"
          />
        </div>

        <h2 className="text-2xl font-bold">{animal.name}</h2>

        <p className="text-gray-600">{animal.description}</p>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <p>🐄 Type: {animal.type}</p>
          <p>🏷 Breed: {animal.breed}</p>
          <p>⚖ Weight: {animal.weight} kg</p>
          <p>🎂 Age: {animal.age} years</p>
          <p>📍 Location: {animal.location}</p>
          <p>💰 Price: ৳ {animal.price}</p>
        </div>
      </div>

      {/* ================= BOOKING FORM ================= */}
      <div className="border rounded-xl p-6 shadow">
        <h3 className="text-xl font-bold mb-4">Booking Form 📝</h3>

        <form onSubmit={handleBooking} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnimalDetails;
