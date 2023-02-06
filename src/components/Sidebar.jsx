import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineBuildCircle, MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links, socialLinks }  from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();
// eslint-disable-next-line
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-main-bg dark:bg-secondary-dark-bg'>
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
          <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
            <MdOutlineBuildCircle className='text-3xl'/> <span>Andrew P. Reeson</span>
          </Link>
          <TooltipComponent content='Menu' position='BottomCenter'>
            <button type="button"
              onClick={() => setActiveMenu(( prevActiveMenu ) => ! prevActiveMenu )}
              className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10'>
          {links.map((item) => (
            <div key={item.title}> 
              <p className="text-gray-400 m-3 mt-4 uppercase">
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}

                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor: ''
                  })}
                  
                  className={({isActive}) => 
                  isActive ? activeLink : normalLink}
                  >
                    {link.icon}
                    <span className='capitalize'>
                        {link.name}
                      </span> 
                  </NavLink>
              ))}
            </div>
          ))}
        </div>

        <div className='mt-10'>
          {socialLinks.map((item) => (
            <div key={item.title}> 
              <p className="text-gray-400 m-3 mt-4 uppercase">
                {item.title}
              </p>

              <div className='flex justify-center mr-3 gap-8'>
              {item.links.map((link) => (
                
                <div>
                <TooltipComponent content={`${link.name}`} position='Top' openDelay={1000} closeDelay={1000}>
                    <a href={`${link.link}`} target="_blank" rel="noopener noreferrer">
                        <button 
                            type='button' 
                            className='text-2xl p-[.65rem] hover:drop-shadow-xl hover:bg-light-gray text-white hover:translate-x-0.5
                              md:text-3xl'
                            style={{ background: currentColor, borderRadius: '50%' }}>
                            {link.icon}
                        </button>
                      </a>
                  </TooltipComponent>
                </div>

              ))}
              </div>

            </div>
          ))}
        </div>
        
      </>)}
    </div>
  )
}

export default Sidebar