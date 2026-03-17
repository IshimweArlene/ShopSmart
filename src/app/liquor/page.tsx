'use client';
import { FaMagnifyingGlass } from "react-icons/fa6";
import TopBar from "../components/topBar";

const Liquor = () => {
    return (
        <div className="min-h-screen bg-gray-900 w-full">
          <div className="relative w-full bg-white min-h-screen overflow-hidden">
            <TopBar />
            
            <div className="flex justify-center mt-8">
              <div className="relative">
                <input type="text" placeholder="What liquor do you want today?" className="w-96 h-12 text-gray-900 rounded-2xl px-4 text-sm border-2 border-cyan-400 focus:outline-none"/>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-lg">
                  <FaMagnifyingGlass/>
                </div>
              </div>
            </div>
            
            <div className="px-8 py-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Liquor Store Coming Soon</h2>
                <p className="text-gray-600">This section is under development.</p>
              </div>
            </div>
          </div>
        </div>
    );
}
 
export default Liquor;