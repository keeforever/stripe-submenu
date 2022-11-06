import {useState,createContext,useContext} from 'react'

import { submenu } from './data'
const AppContext=createContext()

// for component
const AppProvider = ({children}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [location, setLocation] = useState()
  const [page, setPage] = useState('')
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true)


  // modal handler
  const modalHandler=()=>{
    setIsModalOpen(!isModalOpen)
  }
  // getting the top,left position
  const getMenuPosition=(e)=>{
    handleSubMenu(e)
    try {
      setLocation(e.target.getBoundingClientRect())
      // get current menu invoke
      const menuName=e.target.getAttribute('menu');
      getMenu(menuName)
    } catch (error) {
      console.log('err');
    }
  }
  // get current menu
  const getMenu=(menuName)=>{
    const menu=submenu.find(({menu})=>menuName===menu)
    setPage(menu)
  }
 
  // handle submenu
  const handleSubMenu=(e)=>{
  
    if(e.currentTarget.parentNode.classList.contains('c-in')){
      setIsSubMenuOpen(true)
    }
  }
  const onCursorOut=()=>{
    setIsSubMenuOpen(false)
  }
  

  return (
   < AppContext.Provider 
   value={
     {
       modalHandler,
       isModalOpen,
       getMenuPosition,
       location,
       page,
       handleSubMenu,
       isSubMenuOpen,
       onCursorOut
     }
   }
   >
    {children}
   </AppContext.Provider>
  )
}
const useGlobalContext=()=>{
  return useContext(AppContext)
}
export {useGlobalContext,AppContext}
export default AppProvider

