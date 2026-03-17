'use client';
import Image from 'next/image';
import { FaUser, FaLock, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/signup')
  }
  const onClick = () => {
    router.push('/passwordReset')
  }
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="relative w-[320px] h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute w-full h-60 bg-green-400 skew-y-[10deg] origin-top-right z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-12">
          <div className="mb-10 mt-16">
            <Image src={'/1.png'} alt='logo' width={90} height={100} /> 
          </div>
          <div className="w-full mb-4">
            <label className="flex items-center gap-2 text-white">
              <FaUser />
              <input type="text" placeholder="USERNAME" className="w-full bg-transparent border-b border-gray-500 placeholder-white text-white text-sm text-center px-2 py-2 outline-none"/>
            </label>
          </div>

          <div className="w-full mb-6">
            <label className="flex items-center gap-2 text-white">
              <FaLock />
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-full bg-transparent border-b border-gray-500 placeholder-white text-white text-sm text-center px-2 py-2 outline-none"
              />
            </label>
          </div>

          <button className="w-full bg-white text-black py-2 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 h-10">
            LOGIN
            <FaArrowRight />
          </button>

          <p className="text-sm text-white mt-4 cursor-pointer"onClick={onClick}>forgot your password ?</p>
          <button className="text-white mt-12 text-sm border-3 rounded-2xl px-8 py-1 font-black border-white hover:text-blue-200" onClick={handleClick}>SIGN UP</button>
        </div>
      </div>
    </div>
  );
}
