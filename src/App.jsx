import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/hero/hero"
import About from "./Components/About/About"
import Services from "./Components/services/Services"
import Mywork from "./Components/mywork/mywork"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/footer/Footer"

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
