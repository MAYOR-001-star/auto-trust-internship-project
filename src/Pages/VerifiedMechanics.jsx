import React from "react";
import { BiChevronDown, BiWrench } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

import {
  FaMapMarkerAlt,
  FaCar,
  FaTools,
  FaStar,
  FaList,
  FaMap,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { IoIosList } from "react-icons/io";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import MechanicCard from "../components/MechanicCard";

const mechanics = [
  {
    name: "John Doe",
    shop: "Precision Auto Works",
    rating: 5,
    services: ["Brakes", "European Cars", "Diagnostics"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sarah Johnson",
    shop: "Elite Auto Care",
    rating: 4,
    services: ["Engine Repair", "Suspension", "Tuning"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Michael Smith",
    shop: "Prime Auto Garage",
    rating: 5,
    services: ["AC Repair", "Electricals", "Tires"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Daniel Williams",
    shop: "AutoFix Pro Garage",
    rating: 4,
    services: ["Oil Change", "Battery Replacement", "Inspection"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Emma Brown",
    shop: "TopGear Auto Center",
    rating: 5,
    services: ["Brake Repair", "Diagnostics", "Transmission"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Chris Taylor",
    shop: "Urban Auto Repair Hub",
    rating: 4,
    services: ["Engine Tune-Up", "Hybrid Cars", "Cooling System"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Laura Martinez",
    shop: "Speedy Mechanics",
    rating: 5,
    services: ["Suspension", "Wheel Alignment", "Oil Change"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Robert Wilson",
    shop: "Metro AutoWorks",
    rating: 3,
    services: ["Tires", "Mufflers", "Exhaust"],
    image: "https://via.placeholder.com/150",
  },
  // {
  //   name: "Jessica Lee",
  //   shop: "ProCare Auto",
  //   rating: 5,
  //   services: ["Electricals", "Diagnostics", "Battery"],
  //   image: "https://via.placeholder.com/150",
  // },
  // {
  //   name: "David Kim",
  //   shop: "Master Mechanics Garage",
  //   rating: 4,
  //   services: ["AC Repair", "Engine Repair", "Radiator"],
  //   image: "https://via.placeholder.com/150",
  // },
  // {
  //   name: "Anthony Clark",
  //   shop: "Highland Auto Service",
  //   rating: 5,
  //   services: ["Tuning", "Performance Upgrade", "Transmission"],
  //   image: "https://via.placeholder.com/150",
  // },
  // {
  //   name: "Rebecca Adams",
  //   shop: "AutoPro Elite",
  //   rating: 4,
  //   services: ["Oil Change", "Brakes", "Hybrid Cars"],
  //   image: "https://via.placeholder.com/150",
  // },
];

//

const mechanicsMap = [
  { name: "John Doe", lat: 6.5244, lng: 3.3792 }, // Lagos
  { name: "Sarah Johnson", lat: 6.435, lng: 3.421 }, // nearby location
  { name: "Mike Lee", lat: 6.510, lng: 3.360 },
];

const VerifiedMechanics = () => {
  return (
    <section className="p-4">
      <h1 className="text-2xl font-semibold mt-4 mb-2">
        Find Verified Mechanics
      </h1>
      <p className="text-base font-medium">
        Search our trusted network of certified professionals.
      </p>

      <div className="w-full p-4 flex justify-between items-center  overflow-x-auto scrollbar-hide gap-3 my-4">
        {/* LEFT FILTER BUTTONS */}
        <div className="flex gap-3 min-w-max">
          {/* Location */}
          <button className="flex items-center gap-2 p-3 rounded-xl text-sm bg-white hover:bg-dark hover:text-white group transition shadow-lg">
            <FaMapMarkerAlt
              size={16}
              className="text-primary group-hover:text-white transition"
            />
            Location
            <FaChevronDown
              size={14}
              className="group-hover:text-white transition"
            />
          </button>

          {/* Vehicle Type */}
          <button className="flex items-center gap-2 p-3 rounded-xl text-sm bg-white hover:bg-dark hover:text-white group transition shadow-lg">
            <FaCar
              size={16}
              className="text-primary group-hover:text-white transition"
            />
            Vehicle Type
            <FaChevronDown
              size={14}
              className="group-hover:text-white transition"
            />
          </button>

          {/* Service */}
          <button className="flex items-center gap-2 p-3 rounded-xl text-sm bg-white hover:bg-dark hover:text-white group transition shadow-lg">
            <FaTools
              size={16}
              className="text-primary group-hover:text-white transition"
            />
            Service
            <FaChevronDown
              size={14}
              className="group-hover:text-white transition"
            />
          </button>

          {/* Ratings */}
          <button className="flex items-center gap-2 p-3 rounded-xl text-sm bg-white hover:bg-dark hover:text-white group transition shadow-lg">
            <FaStar
              size={16}
              className="text-primary group-hover:text-white transition"
            />
            Ratings
            <FaChevronDown
              size={14}
              className="group-hover:text-white transition"
            />
          </button>
        </div>

        {/* RIGHT VIEW TOGGLE BUTTONS */}
        <div className="flex gap-2 min-w-max">
          <button className="flex items-center gap-2 p-3 rounded-xl text-sm bg-white hover:bg-dark hover:text-white group transition shadow-lg">
            <FaList
              size={16}
              className="text-primary group-hover:text-white transition"
            />
            List View
          </button>

          <button className="flex items-center gap-2 p-3 rounded-xl text-sm bg-white hover:bg-dark hover:text-white group transition shadow-lg">
            <FaMap
              size={16}
              className="text-primary group-hover:text-white transition"
            />
            Map View
          </button>
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mechanics.map((mechanic, index) => (
          <MechanicCard
            key={index}
            name={mechanic.name}
            shop={mechanic.shop}
            rating={mechanic.rating}
            services={mechanic.services}
            image={mechanic.image}
          />
        ))}
      </div>

      {/*  */}
      <button className=" mt-10 mb-5 mx-auto flex items-center gap-2 px-8 py-3 rounded-xl text-sm bg-white hover:bg-dark hover:text-white group transition shadow-lg">
        Load More
        <FaChevronDown
          size={14}
          className="group-hover:text-white transition"
        />
      </button>
    </section>
  );
};

export default VerifiedMechanics;
