import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';
import professional from '../../data/professional.jpg'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { useStateContext } from '../../contexts/ContextProvider';

const Professional = () => {
  const { activeMenu, currentColor } = useStateContext();


  return (
    <div className='flex flex-col h-[106vh] overflow-y-auto -mt-16 dark:text-gray-100
    md:h-screen'>

    {/* Responsive Design for Sidebar adjustment */}
      <div className={`h-full mt-44 ml-4 mr-4
        md:mt-28
        2xl:mt-36

      ${ activeMenu
        ? '2xl:mr-[15rem] 2xl:ml-[10rem] md:ml-12 md:mr-12'
        : '2xl:mr-[20rem] 2xl:ml-[20rem] md:ml-40 md:mr-40'
      }
      `}>
    {/* ---------------------- */}

        <Link to='/Personal'>
          <div className='flex float-right -mt-12 items-center text-sm text-gray-400
              md:text-base md:text-black'>
            <p className='px-4'>
              Personal background
            </p>
            <div className='text-2xl px-2 py-1 animate-pulse rounded-full bg-stone-200 dark:text-white dark:bg-stone-700'>
              <BsArrowRight />
            </div>
          </div>
        </Link>

        <div className='flex'>

          <div className='w-[60%]
          md:w-[40%]'>
            <img src={professional} className='rounded-lg' alt='Professional Headshot of Andrew Reeson'/>
          </div>

          <div className='w-[40%]
          md:w-[60%]'>
            <div className='h-[43%] 
            sm:h-[40%] 
            md:h-auto'>

              <p className=' ml-4 mb-2 text-base -mr-[16px]
                md:ml-8 md:text-3xl md:mb-3 md:mr-auto
                2xl:text-4xl 2xl:ml-8 2xl:mb-10' 
                style={{ color: currentColor}}>
                Andrew P. Reeson
              </p>

              <div className='bg-black flex justify-center items-center w-36 -ml-4 mb-2
              2xl:-ml-8 2xl:w-[23rem] 2xl:h-16
              md:-ml-8 md:w-[16rem] md:h-10 md:mb-5'>
                <p className='text-white text-lg
                2xl:text-5xl
                md:text-3xl'>
                  PROFESSIONAL
                </p>
              </div>

              <div className='bg-black flex justify-center items-center w-[8.5rem] -ml-4 mb-6
              sm:mb-2
              2xl:-ml-8 2xl:h-16 2xl:w-[22rem]
              md:-ml-8 md:h-10 md:w-[15rem]'>
                <p className='text-white text-lg
                2xl:text-5xl
                md:text-3xl'>
                  BACKGROUND
                </p>
              </div>

              <div className='
              md:flex'>

                <div className='ml-4 mb-6
                  2xl:mt-5 2xl:mb-5
                  md:mt-3 md:mb-3 md:ml-8'>
                    <TooltipComponent content='LinkedIn' position='Top' openDelay={1000} closeDelay={1000}>
                    <a href="https://www.linkedin.com/in/andrewreeson/" target="_blank" rel="noopener noreferrer">
                        <button 
                            type='button' 
                            className='text-2xl p-[.65rem] hover:drop-shadow-xl hover:bg-light-gray text-white
                            md:text-3xl md:p-3' 
                            style={{ background: currentColor, borderRadius: '50%' }}>
                            <AiFillLinkedin />
                        </button>
                      </a>
                  </TooltipComponent>
                </div>

                <div className='ml-4 mb-6
                  2xl:mt-5 2xl:mb-5
                  md:mt-3 md:mb-3 md:ml-8'>
                    <TooltipComponent content='GitHub' position='Top' openDelay={1000} closeDelay={1000}>
                    <a href="https://github.com/areeson" target="_blank" rel="noopener noreferrer">
                        <button 
                            type='button' 
                            className='text-2xl p-[.65rem] hover:drop-shadow-xl hover:bg-light-gray text-white
                            md:text-3xl md:p-3' 
                            style={{ background: currentColor, borderRadius: '50%' }}>
                            <AiOutlineGithub />
                        </button>
                      </a>
                  </TooltipComponent>
                </div>

                <div className='ml-4
                  2xl:mt-5 2xl:mb-5
                  md:mt-3 md:mb-3 md:ml-8'>
                    <TooltipComponent content='Resume' position='Top' openDelay={1000} closeDelay={1000}>
                    <a href="/resume" target="_blank" rel="noopener noreferrer">
                        <button 
                            type='button' 
                            className='text-2xl p-[.65rem] hover:drop-shadow-xl hover:bg-light-gray text-white
                            md:text-3xl md:p-3' 
                            style={{ background: currentColor, borderRadius: '50%' }}>
                            <HiOutlineDocumentText />
                        </button>
                      </a>
                  </TooltipComponent>
                </div>

              </div>
            </div>

            <div className='mt-[15%] w-[280%] -ml-[180%] pt-1/5 pr-[10%] pl-[10%] pb-[10%]
              sm:-ml-[125%]
              lg:ml-0 lg:p-0 lg:w-auto lg:mt-0'>
              <p className='text-base ml-8 mb-4
              2xl:text-lg'>
                I consider myself to be well balanced between analytical and creative. I like to use data to not only tell a story but also to map a path moving forward. I'm all for digging into systems and analyzing the efficiencies and whether there can be improvements made. This has been especially true for my long-term hobbies in autocross and fitness/athletics. 
              </p>
              <p className='text-base ml-8 mb-4
              2xl:text-lg'>
              That said, I can put together a quality frontend design and am used to keeping the end user in mind when it comes to the interface, as well as their experience. I believe a good design doesn't just elevate the project visually but it allows for the smoothest operation by the user.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Professional