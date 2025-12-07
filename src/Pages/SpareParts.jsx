import { FaChevronDown } from "react-icons/fa";
import SparePartsCards from "../components/SparePartsCard";

const SpareParts = () => {
  return (
    <div className="px-6 py-8">
      {/* Page Title */}
      <h1 className="text-[36px] font-bold mb-3">Spare Parts</h1>
      <h2 className="text-[22px] font-semibold mb-3">Trending Parts</h2>

      {/* Trending Parts */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="min-w-[150px] rounded-xl shadow p-2 bg-white"
          >
            <div className="w-full  relative rounded-lg overflow-hidden">
              <img
                src="/assets/brakepads.jpg"
                alt="Brake Pads"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center mt-2 font-semibold text-[18px]">
              Brake Pads
            </p>
          </div>
        ))}
      </div>
      <div className="w-full  flex justify-between items-center  overflow-x-auto scrollbar-hide gap-3 my-4 py-4">
        {/* LEFT FILTER BUTTONS */}
        <div className="flex gap-3 min-w-max">
          {/* Category */}
          <div className="relative">
            <select
              className="appearance-none p-3 rounded-xl text-sm bg-white shadow-lg border-none cursor-pointer w-40
                 hover:bg-dark hover:text-white transition"
            >
              <option value="">Category</option>
              <option>Brakes</option>
              <option>Engine Parts</option>
              <option>Electricals</option>
              <option>Suspension</option>
            </select>

            <FaChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Brand */}
          <div className="relative">
            <select
              className="appearance-none p-3 rounded-xl text-sm bg-white shadow-lg border-none cursor-pointer w-40
                 hover:bg-dark hover:text-white transition"
            >
              <option value="">Brand</option>
              <option>Bosch</option>
              <option>NGK</option>
              <option>Denso</option>
            </select>

            <FaChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Price Range */}
          <div className="relative">
            <select
              className="appearance-none p-3 rounded-xl text-sm bg-white shadow-lg border-none cursor-pointer w-40
                 hover:bg-dark hover:text-white transition"
            >
              <option value="">Price Range</option>
              <option>₦0 - ₦10,000</option>
              <option>₦10,000 - ₦50,000</option>
            </select>

            <FaChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Vehicle */}
          <div className="relative">
            <select
              className="appearance-none p-3 rounded-xl text-sm bg-white shadow-lg border-none cursor-pointer w-40
                 hover:bg-dark hover:text-white transition"
            >
              <option value="">Vehicle</option>
              <option>Toyota</option>
              <option>Honda</option>
              <option>Lexus</option>
              <option>Hyundai</option>
            </select>

            <FaChevronDown
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* RIGHT SEARCH BAR */}
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className=" h-10 rounded-2xl px-2 w-xl bg-[#ECECF0] outline-0"
          />
        </div>
      </div>

      {/* Result Count + Sort */}
      <div className="flex items-center justify-between mt-10 mb-4">
        <p className="text-gray-500">Showing 1-8 of 64 results</p>
        <select className="border border-gray-500 rounded-lg px-2 py-2 text-gray-500">
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <SparePartsCards />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <button className="text-gray-500">&lt;</button>
        <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">
          1
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded-lg">2</button>
        <button className="px-3 py-1 bg-gray-200 rounded-lg">3</button>
        <span className="text-gray-600">...</span>
        <button className="px-3 py-1 bg-gray-200 rounded-lg">8</button>
        <button className="text-gray-500">&gt;</button>
      </div>
    </div>
  );
};

export default SpareParts;
