import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import User from './components/User/User'

const All_routes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user/:id" element={<User/>} />
    </Routes>
  )
}

export default All_routes
