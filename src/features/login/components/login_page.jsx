
import MainBody from "./main_body"
import NavBar, { BottomBar } from "./nav_bar"

function Login() {

  return (
    <div className="flex flex-col">
    <NavBar/>
    <MainBody/>
    <BottomBar/>
    </div>
  )
}

export default Login
