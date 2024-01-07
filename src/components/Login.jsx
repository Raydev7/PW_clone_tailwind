export default function Login() {
    return(
        <div class="flex bg-white h-screen">
      <img class="w-1/2 hidden md:block" src="https://accounts.pwskills.com/images/signin-banner.svg"></img>
      <div class="w-1 bg-gray-200"></div>
      <div class="w-full flex flex-col  items-center text-center ">
        <img class="w-40 m-2 mb-4" src="https://accounts.pwskills.com/images/PWSkills-main.png"></img>
        <div class="w-full flex flex-col items-center   ">
          <p class=" text-2xl font-bold">Get Onboard and jumpstart your career!</p>
          <p class="text-sm text-gray-500 mt-10 ">Please enter your email to login/register</p>
          <input class="w-1/2 mt-3 p-1 rounded-lg border-2 border-gray-200 text-xl font-medium " type="email" placeholder="Email" />
          <input class="w-1/2 mt-1 p-1 rounded-lg border-2 border-gray-200 text-xl font-medium " type="password" placeholder="Password" />
          <button class="w-[50%] text-xl hover:bg-blue-300  bg-blue-600 rounded-2xl mt-4 text-white h-8">Login</button>
          <p class="p-5 text-gray-700">OR</p>

          <div class="border-gray-200 hover:border-gray-400 rounded-lg p-1 border-2 flex ">
          <img className="w-6 bg-white " src="https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png"></img>
          <p class="ml-2 text-gray-500 font-semibold">Sign In with Google </p>
          </div>
        </div>
      </div>
    </div>
    )
}