import React from "react";


export default function ProductCard() {
  return (
    <div className="rounded-2xl shadow-lg bg-white overflow-hidden">
      <div className="w-full h-[180px] relative  overflow-hidden">
        <img
          src="/assets/bosch.jpg"
          alt="Product Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 ">
        <div className="text-gray-500">
          <h2 className="text-xl font-semibold mt-4">Bosch Oil Filter</h2>
          <p className="">Talesman Auto Shop</p>
          <p className=" font-medium mt-1">Average Price: N15,000 - N18,000</p>
        </div>

        <div className="flex items-center gap-1 mt-2 text-yellow-500 text-lg">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span className="text-gray-300">★</span>
          <span className="text-gray-600 text-sm ml-1">(4.0)</span>
        </div>

        <button className="w-full mt-4 bg-primary text-white py-3 rounded-lg hover:bg-dark transition">
          Check Details
        </button>
      </div>
    </div>
  );
}
