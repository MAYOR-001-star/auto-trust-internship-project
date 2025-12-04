import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

export default function MechanicCard({ name, shop, rating, services, image }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-5">
      {/* TOP SECTION */}
      <div className="flex items-start gap-3">
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-lg object-cover"
        />

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{name}</h2>
            <span className="flex items-center gap-1 text-green-600 text-sm bg-green-100 px-2 py-1 rounded-full">
              <FaCheckCircle size={14} /> Verified
            </span>
          </div>
          <p className="text-gray-500 text-sm">{shop}</p>
        </div>
      </div>

      {/* RATING */}
      <div className="flex items-center gap-1 mt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            size={18}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating}.0)</span>
      </div>

      {/* SERVICES */}
      <div className="flex flex-wrap gap-2 mt-3">
        {services.map((service, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-700 text-[0.8rem] rounded-full"
          >
            {service}
          </span>
        ))}
      </div>

      {/* BUTTON */}
      <button className="w-full mt-4 bg-primary text-white py-3 rounded-lg hover:bg-dark transition">
        View Profile
      </button>
    </div>
  );
}
