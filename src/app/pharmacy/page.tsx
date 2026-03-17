'use client';

import { FaMagnifyingGlass } from "react-icons/fa6";
import MealCard from "../components/mealCard";
import TopBar from "../components/topBar";
import { pharmacy } from '../meals/pharmacy';

const Pharmacy = () => {
  return (
    <div className="min-h-screen bg-gray-900 w-full">
      <div className="relative w-full bg-white min-h-screen overflow-hidden">
        <TopBar />
        
        <div className="flex justify-center mt-8">
          <div className="relative">
            <input type="text" placeholder="What pharmacy items do you need today?" className="w-96 h-12 text-gray-900 rounded-2xl px-4 text-sm border-2 border-cyan-400 focus:outline-none"/>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-lg">
              <FaMagnifyingGlass/>
            </div>
          </div>
        </div>
        
        <div className="px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pharmacy.map((item, index) => (
              <MealCard
                key={index}
                name={item.name}
                rating={item.rating}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;