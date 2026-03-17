 'use client'
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Reset = () => {
    const router = useRouter();
    const handleClick = () => {
      router.push('/login')
    }
    const onClick = () =>{
      router.push('/confirm')
    }
    return (
      <div className="min-h-screen bg-gray-900 w-full">
        <div className="relative w-full bg-gray-900 min-h-screen overflow-hidden">
         <div className="absolute w-full h-60 bg-green-400 skew-y-[10deg] origin-top-right z-0"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 py-16">
              <div className="mb-10 mt-16">
                <Image src={'/1.png'} alt='logo' width={90} height={100} /> 
              </div>
              <div className="w-full max-w-md mb-8">
                <label className="flex items-center gap-2 text-white">
                    <FaUser />
                    <input type="text" placeholder="USERNAME" className="w-full bg-transparent border-b border-gray-500 placeholder-white text-white text-sm text-center px-2 py-2 outline-none"/>
                </label>
              </div>
              <button className="text-white text-sm border-2 rounded-2xl px-8 py-2 font-black border-white hover:text-blue-200 mb-4" onClick={onClick}> SEND</button>
              <button className="text-white text-sm hover:text-blue-200" onClick={handleClick}>Login</button>
            </div>     
        </div>
      </div>
    );
}
 
export default Reset;