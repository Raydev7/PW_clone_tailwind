import Products from "./Products";
import Students from "./Students";

export default function Home() {
    return(
        <>
         <header class="w-full h-auto">
          <img class="w-full hidden md:block " src="https://wpmanageninja.com/wp-content/uploads/2022/03/How-to-create-an-eLearning-site-on-WordPress.jpg"></img>
          <img class="w-full md:hidden" src="https://accounts.pwskills.com/images/signin-banner.svg"></img>
        </header>
        <Students />
        <Products />
        </>
    )
}