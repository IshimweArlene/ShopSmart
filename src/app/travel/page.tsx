'use client';
import { useRouter } from "next/navigation";

const Travel = () => {
    const router = useRouter();
    
    const travelOffers = [
        { 
            airline: "LATAM", 
            discount: "15%", 
            type: "domestic travel",
            color: "bg-purple-700",
            textColor: "text-white",
            active: true
        },
        { 
            airline: "LATAM", 
            discount: "35%", 
            type: "domestic travel",
            color: "bg-purple-700",
            textColor: "text-white",
            active: false
        },
        { 
            airline: "Azul", 
            discount: "5%", 
            type: "international travel",
            color: "bg-white",
            textColor: "text-blue-600",
            active: true,
            border: true
        },
        { 
            airline: "Azul", 
            discount: "55%", 
            type: "international travel",
            color: "bg-white",
            textColor: "text-blue-600",
            active: false,
            border: true
        },
        { 
            airline: "GOL", 
            discount: "5%", 
            type: "international travel",
            color: "bg-white",
            textColor: "text-orange-500",
            active: true,
            border: true
        }
    ];

    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="relative w-[320px] h-[600px] rounded-3xl overflow-hidden bg-gray-100">
                {/* Header with Logo */}
                <div className="flex justify-center pt-8 pb-6">
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-300 to-green-300 rounded-full flex items-center justify-center">
                            <div className="text-white font-bold text-sm">Ci</div>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-700">TRAVEL</h1>
                    </div>
                </div>

                {/* Travel Offers */}
                <div className="px-4 py-2 overflow-y-auto h-[450px]">
                    {travelOffers.map((offer, index) => (
                        <div key={index} className={`rounded-2xl p-4 mb-4 flex items-center justify-between ${offer.border ? 'border-2 border-gray-200 bg-white' : offer.color}`}>
                            {/* Left side - Airline logo area */}
                            <div className="flex items-center gap-4">
                                <div className={`w-16 h-12 ${offer.color} rounded-lg flex items-center justify-center ${offer.border ? 'border border-gray-200' : ''}`}>
                                    <span className={`font-bold text-lg ${offer.textColor}`}>
                                        {offer.airline}
                                    </span>
                                </div>
                                
                                {/* Offer details */}
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className={`w-2 h-2 rounded-full ${offer.active ? 'bg-cyan-400' : 'bg-gray-400'}`}></div>
                                        <span className={`font-bold text-lg ${offer.color === 'bg-purple-700' ? 'text-white' : 'text-gray-700'}`}>
                                            {offer.discount} Discount on {offer.type}
                                        </span>
                                    </div>
                                    <p className={`text-xs ${offer.color === 'bg-purple-700' ? 'text-gray-200' : 'text-gray-500'}`}>
                                        Valid until December 2024
                                    </p>
                                </div>
                            </div>
                            
                            {/* Right side - Redeem button */}
                            <button className={`px-4 py-2 rounded-full text-xs font-semibold ${
                                offer.active 
                                    ? 'bg-cyan-400 text-white' 
                                    : 'bg-gray-300 text-gray-600'
                            }`}>
                                REDEEM
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom Logo */}
                <div className="flex justify-center mt-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-300 to-green-300 rounded-full flex items-center justify-center">
                        <div className="text-white font-bold text-lg">Ci</div>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="text-center text-gray-400 text-[8px] px-4">
                    <p>TRAVEL TERMS AND CONDITIONS • REDEEM POLICY • PRIVACY</p>
                </div>
            </div>
        </div>
    );
}
 
export default Travel;