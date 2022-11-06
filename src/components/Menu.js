import { submenu } from "../data";
import { useGlobalContext } from "../context";
import {useRef,useEffect} from 'react';

const Menu = () => {
  const {getMenuPosition,onCursorOut}=useGlobalContext()

  return (
    <div className="nav_menu-container" >
      <ul className="nav-menu c-in">
        {
          submenu.map(({menu,id})=>{
            return <li key={id}  menu={menu} id={menu} onMouseEnter={getMenuPosition} onMouseOut={onCursorOut}>{menu}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Menu