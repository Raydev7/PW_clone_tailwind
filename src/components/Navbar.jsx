import { Link } from "react-router-dom"
export default function Navbar() {
    return(
        <>
        {/* Navbar starts Here  */}
        <nav class="bg-indigo-700 text-indigo-100 w-full h-14 flex justify-between px-4  items-center">
        <img class=" w-28 rounded-xl" src="https://levelupcollege.com/wp-content/uploads/2023/01/PWSkills-logo.png"></img>
          <ul class="hidden md:flex font-semibold ">
            <li class="mx-[10px] hover:text-yellow-300 cursor-pointer"><Link to="/Home">Home</Link></li>
            <li class="mx-[10px] hover:text-yellow-300 cursor-pointer"><Link to="/Products">Products</Link></li>
            <li class="mx-[10px] hover:text-yellow-300 cursor-pointer"><Link to="/Students">Students</Link></li>
            <li class="mx-[10px] hover:text-yellow-300 cursor-pointer"><Link to="/Contact">Contact Us</Link></li>

          </ul>
          <div class="hidden md:block px-2 py-2 bg-blue-900 text-white hover:bg-blue-600
           rounded font-bold cursor-pointer"><Link to="/Login">Login/Register</Link></div>
           <div class="md:hidden">
            <a class="text-4xl" href='#'>&#8801;</a>
           </div>
        </nav>
        {/* Navbar ends here */}
        </>
    )
}