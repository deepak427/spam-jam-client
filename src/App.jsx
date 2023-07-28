import { HashRouter } from "react-router-dom"
import All_routes from "./All_routes";
import Navbar from "./components/Navbar/Navbar";
import './App.css'

function App() {

  return (
    <div className="App">
    <HashRouter>
      <Navbar />
      <All_routes />
    </HashRouter>
  </div>
  )
}

export default App
