import React from 'react'
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { } from '../../data/dummy';
import personal from '../../data/personal.jpg'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { useStateContext } from '../../contexts/ContextProvider';


const Personal = () => {
  const { activeMenu, currentColor } = useStateContext();


  return (
    <div className='flex flex-col h-[106vh] overflow-y-auto -mt-16 dark:text-gray-100
    md:h-screen'>

    {/* Responsive Design for Sidebar adjustment */}
    <div className={`h-full mt-44 ml-4 mr-4
        md:mt-28
        2xl:mt-36

      ${ activeMenu
        ? '2xl:mr-[15rem] 2xl:ml-[10rem] md:ml-4 md:mr-20'
        : '2xl:mr-[20rem] 2xl:ml-[20rem] md:ml-40 md:mr-40'
      }
      `}>
    {/* ---------------------- */}

        <Link to='/Professional'>
            <div className='flex -mt-12 mb-4 items-center text-sm text-gray-400'>
              <div className='text-2xl px-2 py-1 animate-pulse rounded-full bg-stone-200 dark:text-white dark:bg-stone-700'>
                <BsArrowLeft />
              </div>
              <p className='px-4'>
                Professional background
              </p>
            </div>
          </Link>

        <div className='flex'>

          <div className='w-[40%] flex flex-col items-end z-20
          md:w-[60%]'>

            <div className='h-[43%] flex flex-col items-end
            sm:h-[40%] 
            md:h-auto'>
            <p className=' mr-4 mb-2 text-base -ml-[16px] float-right
                md:ml-8 md:text-3xl md:mb-3 md:mr-4
                2xl:text-4xl 2xl:ml-8 2xl:mb-10' 
                style={{ color: currentColor}}>
                Andrew P. Reeson
              </p>

              <div className='bg-black flex justify-center items-center w-[6.5rem] -mr-4 mb-2 z-20
              2xl:-mr-4 2xl:w-[17rem] 2xl:h-16
              md:-mr-4 md:w-[11rem] md:h-10 md:mb-5'>
                <p className='text-white text-lg
                2xl:text-5xl
                md:text-3xl'>
                  PERSONAL
                </p>
              </div>

              <div className='bg-black flex justify-center items-center w-[8.5rem] -mr-4 mb-36 z-20
              sm:mb-2
              2xl:-ml-8 2xl:h-16 2xl:w-[22rem]
              md:-ml-4 md:h-10 md:w-[15rem]'>
                <p className='text-white text-lg
                2xl:text-5xl
                md:text-3xl'>
                  BACKGROUND
                </p>
              </div>

              <div className='
              md:flex'>

                <div className='mr-4 mb-6 float-right
                    2xl:mt-5 2xl:mb-5
                    md:mt-3 md:mb-3 md:ml-8'>
                    <TooltipComponent content='Instagram' position='Top' openDelay={1000} closeDelay={1000}>
                    <a href="https://www.instagram.com/reesonstudio/" target="_blank" rel="noopener noreferrer">
                        <button 
                            type='button' 
                            className='text-2xl p-[.65rem] hover:drop-shadow-xl hover:bg-light-gray text-white
                              md:text-3xl md:p-3'
                            style={{ background: currentColor, borderRadius: '50%' }}>
                            <AiOutlineInstagram />
                        </button>
                      </a>
                  </TooltipComponent>
                </div>

                </div>
            </div>

            <div className='w-[270%] -mr-[150%] mt-[30%]
              sm:-ml-[125%]
              md:mr-4 md:w-auto md:mt-0
              lg:ml-0 lg:p-0 lg:w-auto
              2xl:mt-10%'>
              <p className='text-base ml-8 mb-4
              2xl:text-lg'>
                In my time outside of career path activities, there are a few hobbies I like to pursue. Some of my favorites are seasonal, such as snowboarding in the winter and working on my car late into summer nights. I also enjoy crafting/design, whether that is 3D printing, sticker/htv creations, photography, or woodworking.
              </p>
              <p className='text-base ml-8 mb-4
              2xl:text-lg'>
                I do my best to get new perspectives outside of my usual day to day by traveling to new locations. Over the years this has been mostly to the North East or South West parts of America, along with a trip out to New Zealand and Australia. My fiance and I are now renovating a camper to get the most out of what there is to see in North America, before making our way onto a sailboat. I'm sure there will be plenty of documentation in a separate string of blogs when the time comes. 
              </p>
            </div>
          </div>

          <div className='w-[60%] z-10
          md:w-[40%]'>
              <img src={personal} className='rounded-lg' alt='Professional Headshot of Andrew Reeson'/>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Personal