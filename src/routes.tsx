import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import Choose from './pages/choose'
import Claim from './pages/claim'
import Home from './pages/home'
import ReLogin from './pages/re-login'
import Success from './pages/success'



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/re-login' element={<ReLogin/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/choose' element={<Choose/>}/>
            <Route path='/claim/:claim_item' element={<Claim/>}/>
            <Route path='/success' element={<Success/>}/>
        </Routes>
    </BrowserRouter>
  )
}