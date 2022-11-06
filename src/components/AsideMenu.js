import { submenu } from "../data";
import  {FaTimes} from 'react-icons/fa';
import { useGlobalContext } from "../context";

const AsideMenu = () => {
  const {isModalOpen,modalHandler} =useGlobalContext();

  return (
    <>
    <div className={`${isModalOpen ? "modal-overlay-show":"modal-overlay-hide"}`}>
      <nav className="aside-menu">
        <div className="aside__close_btn-wrapper">
          <FaTimes onClick={()=>{modalHandler()}}/>
        </div>
        {
          submenu.map(({id,menu,menuItems,icon})=>{
            return (
              <div key={id} className="menu-wrapper">
                <h3 className="menu-title">{menu}</h3>
                <ul className="menu-lists">
                  { 
                    menuItems.map((menuItem,index)=>{
                      const {page,link}=menuItem
                        return (
                        <li key={index}>
                          <a href={link}> {icon}{page}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </nav>
    </div>
    </>
  )
}

export default AsideMenu
