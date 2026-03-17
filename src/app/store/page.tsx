'use client';
import { FaArrowLeft, FaShoppingBag } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Store = () => {
    const router = useRouter();
    
    const stores = [
        { 
            name: "ArtWalk", 
            category: "Art Supplies", 
            rating: "4.5", 
            address: "Rua do Carmo 1 loja 408 • 1.2 KM • São Roque São Paulo • SP",
            tag: "Free Shipping",
            verified: true
        },
        { 
            name: "Renner", 
            category: "Fashion", 
            rating: "4.2", 
            address: "Av. Giovanni Gronchi 5930 • Loja 321 • Vila Andrade São Paulo • SP",
            tag: "Free Shipping",
            verified: true
        },
        { 
            name: "Symbol Store", 
            category: "Electronics", 
            rating: "4.6", 
            address: "R. Adolfo Pinto 523 • Barra Mansa Rio Paulo • SP",
            tag: "Free Shipping",
            verified: true
        },
        { 
            name: "Louis Vuitton", 
            category: "Luxury", 
            rating: "5.0", 
            address: "Av. Vereador na Cidade 10506 • Moumbi São Paulo • SP",
            tag: "Free Shipping",
            verified: true
        },
        { 
            name: "Nike Store", 
            category: "Sports", 
            rating: "4.7", 
            address: "Shopping Center Norte • Loja 145 • Santana São Paulo • SP",
            tag: "Free Shipping",
            verified: true
        },
        { 
            name: "Apple Store", 
            category: "Electronics", 
            rating: "4.8", 
            address: "Shopping Iguatemi • Piso L2 • Faria Lima São Paulo • SP",
            tag: "Free Shipping",
            verified: true
        },
        { 
            name: "Zara", 
            category: "Fashion", 
            rating: "4.4", 
            address: "Rua Oscar Freire 901 • Jardins São Paulo • SP",
            tag: "Free Shipping",
            verified: true
        },
        { 
            name: "Livraria Cultura", 
            category: "Books", 
            rating: "4.6", 
            address: "Av. Paulista 2073 • Conjunto Nacional São Paulo • SP",
            tag: "Free Shipping",
            verified: true
        }
    ];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="relative w-[320px] h-[600px] rounded-3xl overflow-hidden bg-white">
                {/* Header */}
                <div className="flex items-center justify-between px-4 pt-4 pb-2">
                    <div className='bg-gray-600 rounded-full p-2 cursor-pointer' onClick={() => router.back()}>
                        <FaArrowLeft size={14} color='white'/>
                    </div>
                    <p className="font-bold text-sm text-gray-800">
                        R. Itapaiuna, <span className="font-semibold">2434</span> <span className="text-green-400">▼</span>
                    </p>
                    <FaShoppingBag color='black' size={18}/>
                </div>

                {/* Search Bar */}
                <div className="px-4 mb-4 mt-4">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="What your pet needs ?" 
                            className="w-full h-10 text-gray-900 rounded-2xl px-4 text-sm border-2 border-cyan-300 focus:outline-none bg-white"
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FaMagnifyingGlass size={16}/>
                        </div>
                    </div>
                </div>

                {/* Stores List */}
                <div className="px-4 py-2 overflow-y-auto h-[480px]">
                    {stores.map((store, index) => (
                        <div key={index} className="bg-white border-b border-gray-200 p-4 mb-4">
                            {/* Store Image Placeholder */}
                            <div className="flex items-start gap-3">
                                <div className="w-20 h-20 bg-gray-100 rounded-lg relative overflow-hidden shadow-md">
                                    {/* Tag */}
                                    <div className="absolute top-1 left-1 bg-gray-700 text-white text-[8px] px-1 py-0.5 rounded z-10">
                                        {store.tag}
                                    </div>
                                    {/* Placeholder for store logo - you'll add images here */}
                                    <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold text-sm">
                                        {store.name.substring(0, 2)}
                                    </div>
                                </div>
                                
                                {/* Store Info */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold text-base text-gray-800">{store.name}</h3>
                                        {store.verified && (
                                            <div className="w-4 h-4 bg-cyan-400 rounded-full flex items-center justify-center">
                                                <span className="text-white text-xs">✓</span>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Rating */}
                                    <div className="flex items-center gap-1 mb-2">
                                        <span className="text-yellow-400 text-sm">★</span>
                                        <span className="text-sm font-medium text-gray-700">{store.rating}</span>
                                    </div>
                                    
                                    {/* Address */}
                                    <p className="text-xs text-gray-500 leading-tight">
                                        {store.address}
                                    </p>
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