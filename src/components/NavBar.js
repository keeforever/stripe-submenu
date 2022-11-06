import logo from '../logo.svg'
import Menu from './Menu';
import AsideMenu from './AsideMenu';

import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from '../context';
const NavBar = () => {
  const {modalHandler} =useGlobalContext();

  return (
    <nav className='nav-container'>
      <div className="nav-center">
        <div className="logo">
          <img src={logo} alt="Stripe"/>
        </div>
        {/* desktop menu bar */}
        <Menu/>
        <button className="menu-btn" onClick={()=>{modalHandler()}} >
          <FaBars /> 
        </button>
        <button className="sign-btn">
          Sign
        </button>
      </div>
      {/* mobile menu bar */}
      <AsideMenu/>
    </nav>
  )
}

export default NavBar

