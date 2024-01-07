export default function Products() {
    return(
        <>
         {/* Our products starts */}

         <div class="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
         <div class="h-auto w-100 flex flex-wrap flex-col items-center text-center">
           <p class="text-indigo-800 font-bold text-3xl md:text-4xl text-center">Our Products</p>
           <div class="w-32 h-1 bg-yellow-400 mt-1 rounded-2xl mb-4"></div>

       <div class="w-[90%] flex flex-wrap justify-around mt-5 md:mt-20 ">

           <div class="w-64 rounded-xl p-2 flex flex-col items-center mb-12 hover:border-yellow-600 hover:border-2 ">
             <img class="w-24 h-24 bg-white mb-1 rounded-full " src="https://www.svgrepo.com/show/447679/laptop.svg" alt="" />
             <p class="text-2xl font-bold text-white mt-2 ">Job Portal</p>
             <p class="text-2xl font-bold text-gray-500 "> Supercharge your project development with our robust lab.</p>
           </div>
           
           <div class="w-64 rounded-xl p-2 flex flex-col items-center mb-12 hover:border-yellow-600 hover:border-2 ">
           <img class="w-24 h-24  mb-1 rounded-full " src="https://th.bing.com/th/id/OIP.dhPHi3q3nfiKmaYatZcWtgHaGZ?rs=1&pid=ImgDetMain" alt="" />
             <p class="text-2xl font-bold text-white mt-2 ">PW Skills Lab</p>
             <p class="text-2xl font-bold text-gray-500 "> Supercharge your project development with our robust lab.</p>
           </div>

           <div class="w-64 rounded-xl p-2 flex flex-col items-center mb-12 hover:border-yellow-600 hover:border-2 ">
           <img class="w-24 h-24 bg-white mb-1 rounded-full " src="https://th.bing.com/th/id/OIP.14-M2Znfu3k5eWOnxlx0YQHaHa?rs=1&pid=ImgDetMain" alt="" />
             <p class="text-2xl font-bold text-white mt-2 ">Experience Portal</p>
             <p class="text-2xl font-bold text-gray-500 ">Pw skills self-paced experience portal prioritises hands-on training with 570+ internship projects</p>
           </div>

           <div class="w-64 rounded-xl p-2 flex flex-col items-center mb-12 hover:border-yellow-600 hover:border-2 ">
           <img class="w-24 h-24  mb-1 rounded-full " src="https://th.bing.com/th/id/OIP.nrwaySDYhktre-RagXHftAHaHa?rs=1&pid=ImgDetMain" alt="" />
             <p class="text-2xl font-bold text-white mt-2 ">Affiliate</p>
             <p class="text-2xl font-bold text-gray-500 ">Explore affilate marketing oppertunities with PW skills and attain financial freedom</p>
           </div>

           <div class="w-64 rounded-xl p-2 flex flex-col items-center mb-12 hover:border-yellow-600 hover:border-2 ">
           <img class="w-24 h-   mb-1 rounded-full " src="https://th.bing.com/th/id/OIP.nxkavH45K0pWZquUcsRnswHaHa?rs=1&pid=ImgDetMain" alt="" />
             <p class="text-2xl font-bold text-white mt-2 ">Hall of fame</p>
             <p class="text-2xl font-bold text-gray-500 ">Our student Placement and 100k+ career transitions speak volumes about our courses.</p>
           </div>

         </div>

         </div>
       </div>
       {/* our products section ends here */}
       </>
    )
}