'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

const Confirm = () => {
    const router = useRouter();
    const handleClick = () => {
     router.push('/login')
    }

    return (
        <div className="min-h-screen bg-gray-900 w-full">
            <div className="relative w-full bg-gray-900 min-h-screen overflow-hidden">
                <div className="absolute w-full h-60 bg-green-400 skew-y-[10deg] origin-top-right z-0"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 py-16">
                    <div className="mb-10 mt-16">
                    <Image src={'/1.png'} alt='logo' width={90} height={100} /> 
                    </div>
                    <div className="text-center max-w-md">
                    <h1 className="text-lg text-white font-black mb-4">EMAIL SENT!</h1>
                    <p className="text-sm text-white mb-2">Password reset instructions have been sent to</p>
                    <p className="text-sm text-white mt-4">If you can't find it in your inbox check spam, junk, and more.</p>
                    <p className="text-sm text-white mt-12">Did not work? Doubts?</p>
                    <p className="text-sm text-blue-400 mt-2 cursor-pointer">Click here</p>
                    </div>
                    <button className="text-white mt-8 text-sm border-2 rounded-2xl px-8 py-2 font-black border-white hover:text-blue-200" onClick={handleClick}>LOGIN</button>
                </div>     
            </div>
        </div>
    );
}
 
export default Confirm;