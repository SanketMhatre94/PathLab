// import React from "react";
// function Navbar(){
//     return(
//         <div className=" flex justify-between bg-slate-700 box-border ">
//                 <ol className =' background-color: rgb(51 65 85) text-white flex items-center justify-between flex-wrap p-6 flex space-x-12'>
//                     <li className='font-sans text-lg '>DVM5</li>
//                     <li><a href="#responsive-header">Home</a></li>
//                     <li>Feature</li>
//                     <li>About</li>
//                     <li>Contacts</li>
//                 </ol>
//                 <ol className="flex justify-between bg-slate-700  p-6 flex space-x-8">
//                     <li className='border-dashed border-2 border rounded flex space-x-4 p-2'>Get Started</li>
//                     <li><button type="button" class=" text-black bg-teal-200 p-3 border rounded hover:text-white">Read More</button></li>
//                 </ol>
//         </div>
//     )
// }
// export default Navbar;








import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './login';

const Navbar = () => { 
  const navigate = useNavigate()
  return (
    <nav className="w-[93.1rem] ml-[1rem] mr-[1rem] mt-[1rem] bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-lg font-semibold">𝓟𝓪𝓽𝓱𝓪𝓵𝓸𝓰𝔂𝓛𝓪𝓫</a>
        <div className="flex space-x-8">
          
          {/* <a href="#" className="text-white hover:text-gray-200">Home</a> */}
          <Link to='/' className='text-white hover:text-gray-200'>Home</Link>
          {/* <a href="#" className="text-white hover:text-gray-200">Test</a> */}
          <Link to='/test' className='text-white hover:text-gray-200'>Test</Link>
          {/* <a href="#" className="text-white hover:text-gray-200">Contact</a> */}
         <Link to="/contact" className=' text-white hover:text-gray-200'>Contact</Link>
          {/* <a href="#" className="text-white hover:text-gray-200">Help</a> */}
          <Link to="/help" className='text-white hover:text-gray-200 ' >Help</Link>
        </div>
        <div className="space-x-4">
        <button onClick={()=>navigate("/signup")} className="bg-gradient-to-r from-blue-00 to-teal-500 text-white px-4 py-2 rounded"  >Sign Up</button>
        <button onClick={()=>navigate("/login")} className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded" >Login</button> 
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
