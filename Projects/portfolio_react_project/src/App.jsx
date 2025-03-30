import { useState } from 'react'
import { Navbar, Header, About, Skills, Projects, Contact } from './components'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App