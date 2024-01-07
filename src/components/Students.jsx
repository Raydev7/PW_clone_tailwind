export default function Students() {
    return(
        <>
        {/* Our Stduents section starts */}
        <div class="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10 ">
          <div class="w-full h-auto flex flex-wrap flex-col items center">
            <p class="text-indigo-800 font-bold text-3xl md:text-4xl text-center">"Pure Hardwork, No Shortcuts!"</p>
            <div class="w-full h-auto flex justify-center">
            <div class="w-36 h-1 mt-1 rounded-2xl bg-yellow-400"></div>
            </div>

            <div class="w-full flex flex-wrap justify-evenly mt-12 md:mt-20 ">

              <div class="w-46 flex flex-col items-center mb-12 ">
                <img  class="w-24 h-24 rounded-full bg-white" src="https://www.svgrepo.com/show/94674/books-stack-of-three.svg"></img>
                <p class="text-3xl font-bold text-white mt-2">600+</p>
                <p className="text-3xl font-bold text-gray-500">Different Courses</p>
              </div>
              <div class="w-46 flex flex-col items-center mb-12 ">
                <img  class="w-24 h-24 rounded-full" src="https://static.vecteezy.com/system/resources/previews/000/350/111/original/vector-male-student-icon.jpg"></img>
                <p class="text-3xl font-bold text-white mt-2">700,000+</p>
                <p className="text-3xl font-bold text-gray-500">Students Enrolled</p>
              </div>
              <div class="w-46 flex flex-col items-center mb-12 ">
                <img  class="w-24 h-24 rounded-full" src="https://static.vecteezy.com/system/resources/previews/000/574/730/large_2x/credit-card-icon-vector.jpg"></img>
                <p class="text-3xl font-bold text-white mt-2">10,000+</p>
                <p className="text-3xl font-bold text-gray-500">Succesfull Transaction</p>
              </div>
            </div>
            
          </div>
        </div>
        {/* Our Stduents section ends */}
       <div class="flex justify-center">
        <div class="w-[90%] opacity-5 bg-white h-1"></div>
        </div>
        </>
    )
}