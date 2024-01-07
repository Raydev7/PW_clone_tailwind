export default function Footer() {
    return(
        <>
        <footer class="w-full bg-gray-800 px-4 text-white pt-8 
        flex flex-col md:flex-row flex-wrap justify-between md:px-12 ">
           <div class="mt-4">
            <img class="bg-white w-40 rounded-xl" src="https://levelupcollege.com/wp-content/uploads/2023/01/PWSkills-logo.png"></img>
            <p class="my-4 mt-6 mb-6">Email us: support@pwskills.com</p>
            <img class="w-32 mb-6" src="https://cdn-icons-png.flaticon.com/512/5759/5759691.png"></img>
           </div>
           <div class="mt-4">
            <h2>PW Skills</h2>
            <div class="w-32 h-1 bg-yellow-400 rounded-xl "></div>
            <div>
              <p>About us</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
            </div>
           </div>
           <div class="mt-4">
            <h2>Products</h2>
            <div class="w-32 h-1 bg-yellow-400 rounded-xl "></div>
            <div>
              <p>PW Skills Lab</p>
              <p>Job Portal</p>
              <p>Experience Portal</p>
              <p>Become an affiliate</p>
              <p>Hall of fame</p>
            </div>
           </div>
           <div class="mt-4">
            <h2>Links</h2>
            <div class="w-32 h-1 bg-yellow-400 rounded-xl "></div>
            <div>
              <p>Discord Channel</p>
              <p>PW Youtube</p>
              <p>Courses</p>
              </div>
           </div>
        </footer>
        </>
    )
    }