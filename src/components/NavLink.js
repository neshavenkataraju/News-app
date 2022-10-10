import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
function NavLink()
{
let n=
<>
  <header class="mr-0 bg-blue-900">
  <div class="container mx-0 mr-0 flex flex-wrap p-10 bg-blue-900 flex-col sm-flex-col text-base md:flex-row items-center ">
  <div>
  <h3 class="mr-40 text-white font-800">Rubic News</h3>
  </div>
    <div class="text-gray-600">
      
      <Link class="mr-5 p-2 text-white hover:bg-red-800  rounded-xl" to="/Bitcoin">Bitcoin</Link>
      <Link class="mr-5 p-2 text-white hover:bg-red-800  rounded-xl" to="/movies">Movies</Link>
      <Link class="mr-5 p-2 text-white hover:bg-red-800  rounded-xl" to="/Apple">Apple</Link>
      <Link class="mr-5 p-2 text-white hover:bg-red-800  rounded-xl" to="/business">Business</Link>
      <Link class="mr-5 p-2 text-white hover:bg-red-800  rounded-xl" to="/Nasa">Nasa</Link>
      <Link class="mr-5 p-2 text-white hover:bg-red-800  rounded-xl" to="/upsc">upsc</Link>
      <Link class="mr-5 p-2 text-white hover:bg-red-800  rounded-xl" to="/sports">Sports</Link>
      <Link class="mr-5 p-2 text-white hover:bg-red-800  rounded-xl" to="/games">Games</Link>
      <Link class="mr-5 p-2 text-white hover:bg-red-800  rounded-xl" to="/education">Education</Link>
    </div>
  </div>
</header>
</>
return n;
}
export default NavLink;