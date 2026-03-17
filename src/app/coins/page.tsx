'use client';
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Coins = () => {
    const router = useRouter();
    
    const currentMissions = [
        { percentage: 60, text: "Make more than 10 purchases this month." },
        { percentage: 75, text: "buy from the same store on 4 different days." },
        { percentage: 20, text: "use 4 coupons this week." }
    ];
    
    const completedMissions = [
        { percentage: 100, text: "Make more than 5 purchases this month." },
        { percentage: 100, text: "buy from the same store on 2 different days." },
        { percentage: 100, text: "use 2 coupons this week." }
    ];

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="relative w-[320px] h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                {/* Header */}
                <div className="flex items-center justify-between px-4 pt-4 pb-2">
                    <div className='bg-gray-600 rounded-full p-2 cursor-pointer' onClick={() => router.back()}>
                        <FaArrowLeft size={14} color='white'/>
                    </div>
                    <h1 className="font-bold text-base text-gray-700">MY COINS</h1>
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-300 to-green-300 rounded-full flex items-center justify-center">
                        <div className="text-white font-bold text-sm">Ci</div>
                    </div>
                </div>

                {/* Coin Balance */}
                <div className="px-4 mt-6">
                    <div className="border-2 border-cyan-300 rounded-2xl p-3 text-center bg-white">
                        <p className="text-gray-600 text-sm">
                            Currently you have <span className="text-cyan-400 font-bold text-lg">250</span> coins!
                        </p>
                    </div>
                </div>

                {/* Current Missions */}
                <div className="px-4 mt-8">
                    <h2 className="text-center text-gray-500 font-semibold text-xs mb-1">CURRENT MISSIONS</h2>
                    <div className="border-b border-gray-300 w-12 mx-auto mb-4"></div>
                    
                    <div className="space-y-4">
                        {currentMissions.map((mission, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="relative w-12 h-12">
                                    <div className="w-12 h-12 rounded-full border-3 border-cyan-300 flex items-center justify-center bg-white">
                                        <span className="text-cyan-400 font-bold text-xs">{mission.percentage}%</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-xs flex-1">{mission.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Completed Missions */}
                <div className="px-4 mt-6">
                    <h2 className="text-center text-gray-500 font-semibold text-xs mb-1">MISSIONS CLOSED</h2>
                    <div className="border-b border-gray-300 w-12 mx-auto mb-4"></div>
                    
                    <div className="space-y-4">
                        {completedMissions.map((mission, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="relative w-12 h-12">
                                    <div className="w-12 h-12 rounded-full border-3 border-gray-400 flex items-center justify-center bg-white">
                                        <span className="text-gray-500 font-bold text-xs">{mission.percentage}%</span>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-xs flex-1">{mission.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Logo */}
                <div className="flex justify-center mt-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-300 to-green-300 rounded-full flex items-center justify-center">
                        <div className="text-white font-bold text-lg">Ci</div>
                    </div>
                </div>

                {/* Footer Text */}
                <div className="text-center text-gray-400 text-[8px] mt-2 px-2">
                    <p>Powered by Green Food • Terms and Conditions • Privacy</p>
                </div>
            </div>
        </div>
    );
}
 
export default Coins;