import { useGlobalContext } from "../context";
import { useEffect,useState,useRef} from "react";

  // need to filter data

const FloatMenu = () => {
  const {location,page,isSubMenuOpen,handleSubMenu,onCursorOut}=useGlobalContext()
  const [menuStyle, setMenuStyle] = useState(false)
 

  const floatRef=useRef(null)

  const setPosition=()=>{
    const topFloat=location.top
    const menuWidth=location.width
    const floatWidth=floatRef.current.getBoundingClientRect().width
    const midForMenu=(location.left)-(floatWidth/2)+(menuWidth/2)
    const pos={
      top:`${topFloat+40}px`,
      left:`${midForMenu}px`
    }
    return pos
  }
  useEffect(()=>{ 
    if(location===undefined){
      return ;
    }

    if(!isSubMenuOpen){
      const time=setTimeout(()=>{
        floatRef.current.style.visibility="hidden"
        floatRef.current.style.zIndex="-1"
      },1000)
     return ()=>{
       clearTimeout(time)
     }

    }else{
      setMenuStyle(setPosition())
      floatRef.current.style.visibility="visible"
      floatRef.current.style.zIndex="0"
    }

  },[page,isSubMenuOpen])


  // 
  if(location===undefined){
    return <></>;
  }

  const {menu,icon,menuItems}=page
  return (
    // <div className="float__menu-container">
      <div className= "float__submenu c-in" ref={floatRef}  onMouseOut={onCursorOut} style={menuStyle ? menuStyle : null}>
          <h3  onMouseOver={handleSubMenu}>{menu}</h3>
          <ul className="float__menu">
          {
            menuItems.map(({page,link},index)=>{
              return (
              <li key={index} className="c-in"><a href={link} onMouseOver={handleSubMenu}>{icon}{page}</a></li>
              )
            })
          }
          </ul>
      </div>
    // </div>
  )
}

export default FloatMenu
