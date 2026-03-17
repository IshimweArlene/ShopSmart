'use client';
import { FaArrowLeft, FaShoppingBag } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Store = () => {
    const router = useRouter();
    
    const stores = [
        { name: "SuperMarket Plus", category: "Grocery", distance: "0.5 km", rating: "4.8" },
        { name: "Fashion Hub", category: "Clothing", distance: "1.2 km", rating: "4.6" },
        { name: "Tech World", category: "Electronics", distance: "0.8 km", rating: "4.9" },
        { name: "Book Corner", category: "Books", distance: "1.5 km", rating: "4.7" },
        { name: "Fresh Market", category: "Grocery", distance: "0.3 km", rating: "4.5" },
        { name: "Style Avenue", category: "Clothing", distance: "2.1 km", rating: "4.4" },
        { name: "Digital Store", category: "Electronics", distance: "1.8 km", rating: "4.7" },
        { name: "Health Plus Pharmacy", category: "Pharmacy", distance: "0.7 km", rating: "4.9" },
        { name: "Organic Foods", category: "Grocery", distance: "1.4 km", rating: "4.6" },
        { name: "Trendy Wear", category: "Clothing", distance: "0.9 km", rating: "4.3" },
        { name: "Mobile Zone", category: "Electronics", distance: "2.3 km", rating: "4.5" },
        { name: "Literary World", category: "Books", distance: "1.7 km", rating: "4.8" },
        { name: "Quick Mart", category: "Grocery", distance: "0.2 km", rating: "4.2" },
        { name: "Urban Fashion", category: "Clothing", distance: "1.6 km", rating: "4.7" },
        { name: "Gadget Galaxy", category: "Electronics", distance: "2.5 km", rating: "4.6" },
        { name: "Care Pharmacy", category: "Pharmacy", distance: "1.1 km", rating: "4.4" },
        { name: "Green Grocers", category: "Grocery", distance: "1.9 km", rating: "4.5" },
        { name: "Chic Boutique", category: "Clothing", distance: "0.6 km", rating: "4.8" },
        { name: "Computer Hub", category: "Electronics", distance: "1.3 km", rating: "4.7" },
        { name: "Knowledge Books", category: "Books", distance: "2.0 km", rating: "4.6" },
        { name: "Daily Needs", category: "Grocery", distance: "0.4 km", rating: "4.3" },
        { name: "Fashion Forward", category: "Clothing", distance: "2.2 km", rating: "4.5" },
        { name: "Electronics Plus", category: "Electronics", distance: "1.0 km", rating: "4.8" },
        { name: "Wellness Pharmacy", category: "Pharmacy", distance: "1.5 km", rating: "4.7" },
        { name: "Corner Store", category: "Grocery", distance: "0.1 km", rating: "4.1" },
        { name: "Designer Clothes", category: "Clothing", distance: "2.8 km", rating: "4.9" },
        { name: "Smart Electronics", category: "Electronics", distance: "1.7 km", rating: "4.4" },
        { name: "Academic Books", category: "Books", distance: "2.4 km", rating: "4.5" },
        { name: "Family Market", category: "Grocery", distance: "0.8 km", rating: "4.6" },
        { name: "Casual Wear", category: "Clothing", distance: "1.4 km", rating: "4.2" },
        { name: "Tech Solutions", category: "Electronics", distance: "2.1 km", rating: "4.7" },
        { name: "City Pharmacy", category: "Pharmacy", distance: "0.9 km", rating: "4.8" },
        { name: "Mega Mart", category: "Grocery", distance: "2.6 km", rating: "4.4" },
        { name: "Vintage Style", category: "Clothing", distance: "1.8 km", rating: "4.6" },
        { name: "Innovation Electronics", category: "Electronics", distance: "1.2 km", rating: "4.5" },
        { name: "Story Books", category: "Books", distance: "0.7 km", rating: "4.7" },
        { name: "Local Grocery", category: "Grocery", distance: "0.6 km", rating: "4.0" },
        { name: "Premium Fashion", category: "Clothing", distance: "3.0 km", rating: "4.8" },
        { name: "Future Tech", category: "Electronics", distance: "2.7 km", rating: "4.6" },
        { name: "Remedy Pharmacy", category: "Pharmacy", distance: "1.3 km", rating: "4.5" }
    ];

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="relative w-[320px] h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-white">
                {/* Header */}
                <div className="flex items-center justify-between px-4 pt-4 pb-2">
                    <div className='bg-gray-700 rounded-full p-2 cursor-pointer' onClick={() => router.back()}>
                        <FaArrowLeft size={14} color='white'/>
                    </div>
                    <p className="font-bold text-sm text-gray-800">
                        R. Itapaiuna, <span className="font-semibold">2434</span> <span className="text-green-400">▼</span>
                    </p>
                    <FaShoppingBag color='black' size={18}/>
                </div>

                {/* Search Bar */}
                <div className="px-4 mb-4">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="What store are you looking for?" 
                            className="w-full h-8 text-gray-900 rounded-2xl px-3 text-xs border-2 border-cyan-400 focus:outline-none"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-sm">
                            <FaMagnifyingGlass />
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div className="px-4 mb-4">
                    <div className="flex gap-3 overflow-x-auto text-xs scrollbar-hide">
                        {['All', 'Grocery', 'Clothing', 'Electronics', 'Books', 'Pharmacy'].map((category, index) => (
                            <div
                                key={index}
                                className={`pb-1 cursor-pointer whitespace-nowrap ${
                                    index === 0
                                        ? 'text-green-400 border-b border-green-400'
                                        : 'text-gray-600'
                                }`}
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stores List */}
                <div className="px-4 py-2 overflow-y-auto h-[420px]">
                    {stores.map((store, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <FaShoppingBag size={20} color="#666"/>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-sm text-gray-800">{store.name}</h3>
                                    <p className="text-xs text-gray-500">{store.category}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs text-gray-400">{store.distance}</span>
                                        <span className="text-xs text-yellow-500">★ {store.rating}</span>
                                    </div>
                                </div>
                                <div className="text-green-400 text-xs font-semibold">
                                    OPEN
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Store;