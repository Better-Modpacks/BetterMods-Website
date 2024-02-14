import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./pages/Error"
import ModpacksPage from "./pages/ModpacksPage"


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modpacks" element={<ModpacksPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App