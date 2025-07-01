import { Outlet } from "react-router"
import Navbar from "./components/layouts/Navbar"
import Footer from "./components/layouts/Footer"

function App() {

  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
