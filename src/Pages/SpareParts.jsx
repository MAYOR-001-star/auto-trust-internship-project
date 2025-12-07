import SparePartsCards from "../components/SparePartsCard";

const SpareParts = () => {
  return (
    <div className="px-6 py-8">
      {/* Page Title */}
      <h1 className="text-[36px] font-bold mb-2">Spare Parts</h1>
      <h2 className="text-[22px] font-semibold mb-6">Trending Parts</h2>

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
            <p className="text-center mt-2 font-semibold text-[18px]">Brake Pads</p>
          </div>
        ))}
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
 <SparePartsCards  />
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
