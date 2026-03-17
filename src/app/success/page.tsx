'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

const Success = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/login')
    }
    return(
       <div className="min-h-screen bg-gray-900 w-full">
            <div className="relative w-full bg-gray-900 min-h-screen overflow-hidden">
                <div className="absolute w-full h-60 bg-green-400 skew-y-[10deg] origin-top-right z-0"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 py-16">
                    <div className="mb-10 mt-16">
                    <Image src={'/1.png'} alt='logo' width={90} height={100} /> 
                    </div>
                    <div className="text-center max-w-md">
                    <h1 className="text-lg text-white font-black mb-4">Account Created Successfully</h1>
                    <p className="text-sm text-white mt-4">Congratulations you are now part of the family</p>
                    </div>
                    <button className="text-white mt-12 text-sm border-2 rounded-2xl px-8 py-2 font-black border-white hover:text-blue-200" onClick={handleClick}>LOGIN</button>
                </div>     
            </div>
        </div>   
    );
}
 
export default Success;