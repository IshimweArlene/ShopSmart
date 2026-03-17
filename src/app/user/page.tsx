import Image from "next/image";

const User = () => {
    return (
        <div className="min-h-screen bg-gray-900 w-full">
            <div className="relative w-full bg-white min-h-screen overflow-hidden">
             <div className="relative p-4">
               <Image src={'/2.png'} alt="logo" width={80} height={70} className="absolute top-2 right-4"/>
             </div>
             
             <div className="px-8 py-8">
               <div className="text-center">
                 <h2 className="text-2xl font-bold text-gray-800 mb-4">User Profile</h2>
                 <p className="text-gray-600">User profile section is under development.</p>
               </div>
             </div>
        </div>
        </div>
    );
}
 
export default User;