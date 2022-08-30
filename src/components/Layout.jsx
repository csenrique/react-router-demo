import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div>
         <h1>Welcom to React Router Demo</h1>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout