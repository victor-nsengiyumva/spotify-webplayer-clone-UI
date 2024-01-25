
import MainBody from "./features/login/components/main_body"
import NavBar, { BottomBar } from "./features/login/components/nav_bar"

function App() {

  return (
    <div className="flex flex-col">
    <NavBar/>
    <MainBody/>
    <BottomBar/>
    </div>
  )
}

export default App
