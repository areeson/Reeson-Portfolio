import React from 'react'
import { Link } from 'react-router-dom';
import {  Button } from '../../components';
import { homeCardData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const Home = () => {
  const { activeMenu, setActiveMenu, currentColor } = useStateContext();

  return (
    <div className="">
      <div 
        className="flex flex-wrap justify-center h-[106vh] overflow-auto h-94v -mt-16
        md:overflow-hidden md:h-screen
        ">
        <div className="bg-white m-3 mt-36 rounded-xl w-full bg-gradient-to-r from-yellow-100 to-cyan-100 dark:from-violet-900 dark:to-cyan-900 dark:text-gray-300 bg-cover bg-center bg-no-repeat flex flex-col content-center items-center h-2/5 mr-8 ml-8 
        md:mt-16
        md:h-1/2
        ">

          <div className="flex justify-between items-center h-full">

              <div className='flex flex-col items-center text-center'>

                <p className="text-4xl text-zinc-800 dark:text-gray-100
                md:text-8xl
                ">
                Reeson Portfolio
                </p>

                <p className="text-xl m-9
                md:m-8 md:text-2xl
                2xl:m-16
                ">
                  Lace up your boots, there's some adventuring to be done.
                </p>

                <Link to="/Projects" className='hover:translate-x-1' onClick={() => setActiveMenu(( prevActiveMenu ) => ! prevActiveMenu )}>
                  <Button color='white' bgColor={currentColor} borderRadius='50px'
                    text='Projects'
                    size='lg'
                  />
                </Link>

              </div>
          </div>
        </div>

        <div className='mt-4 h-1/2 mb-5 w-4/5 
        lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:w-full lg:-mt-12 lg:gap-6 lg:mb-0
        '>
          {homeCardData.map((item) => (
            <div
              onClick={() => setActiveMenu(( prevActiveMenu ) => ! prevActiveMenu )}
              key={item.title} 
              className={`bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full mb-5 rounded-2xl h-1/3 hover:drop-shadow-xl hover:skew-x-1 skew-x-2
              lg:h-2/3 lg:mb-0

              ${item.className}

              ${ activeMenu
                ? '2xl:w-1/4 md:w-[29%]'
                : '2xl:w-1/5 md:w-1/4'
              }
            `}>

            <Link to={`/${item.link}`}>
              <div className='w-full h-1/5 bg-gradient-to-r from-cyan-100 to-yellow-100 dark:from-cyan-700 dark:to-violet-900 dark:text-gray-300 rounded-2xl flex items-center justify-center
              md:h-[15%]
              2xl:h-1/5
              '>
              
              </div>

              <div className='w-full h-4/5 
              lg:h-2/3
              '>

                <p className='text-xl dark:text-gray-100 text-gray-800 ml-6 mt-2.5 mr-6
                md:mt-2
                2xl:mt-8
                '>
                  {item.title}
                </p>

                <p className='text-md dark:text-gray-200 text-gray-600 ml-6 mt-1.5 mr-6
                md:mt-3
                2xl:mt-5
                '>
                  {item.description}
                </p>

              </div>
            </Link>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home