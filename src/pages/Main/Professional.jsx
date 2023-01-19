import React from 'react'
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { } from '../../data/dummy';
import professional from '../../data/professional.jpg'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { useStateContext } from '../../contexts/ContextProvider';

const Professional = () => {
  const { activeMenu, currentColor } = useStateContext();


  return (
    <div className='flex flex-col h-screen h-94v overflow-y-auto -mt-16 dark:text-gray-100'>

    {/* Responsive Design Work */}
      <div className={`h-full 
      2xl:mt-40 
      md:mt-32 md:mr-36 md:ml-36
      ${ activeMenu
        ? '2xl:mr-[20rem] 2xl:ml-[20rem]'
        : '2xl:mr-[30rem] 2xl:ml-[30rem]'
      }
      `}>
    {/* ---------------------- */}

        <div className='flex'>
          <div className='w-1/2'>
            <img src={professional} className='rounded-lg' alt='Professional Picture of Andrew Reeson'/>
          </div>

          <div className='w-1/2'>
            <p className='text-4xl ml-8 mb-10' style={{ color: currentColor}}>
              Andrew P. Reeson
            </p>

            <div className='-ml-8 bg-black h-16 w-[23rem] mb-5 flex justify-center items-center'>
              <p className='text-white text-5xl'>
                PROFESSIONAL
              </p>
            </div>

            <div className='-ml-8 bg-black h-16 w-[22rem] flex justify-center items-center'>
              <p className='text-white text-5xl'>
                BACKGROUND
              </p>
            </div>

            <div className='flex'>

              <div className='ml-8 mt-5 mb-5'>
                  <TooltipComponent content='LinkedIn' position='Top' openDelay={1000} closeDelay={1000}>
                  <a href="https://www.linkedin.com/in/andrewreeson/" target="_blank" rel="noopener noreferrer">
                      <button 
                          type='button' 
                          className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
                          style={{ background: currentColor, borderRadius: '50%' }}>
                          <AiFillLinkedin />
                      </button>
                    </a>
                </TooltipComponent>
              </div>

              <div className='ml-5 mt-5 mb-5'>
                  <TooltipComponent content='GitHub' position='Top' openDelay={1000} closeDelay={1000}>
                  <a href="https://github.com/areeson" target="_blank" rel="noopener noreferrer">
                      <button 
                          type='button' 
                          className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
                          style={{ background: currentColor, borderRadius: '50%' }}>
                          <AiOutlineGithub />
                      </button>
                    </a>
                </TooltipComponent>
              </div>

            </div>

            <p className='text-lg ml-8 mb-4'>
              I consider myself to be well balanced between analytical and creative. I like to use data to not only tell a story but also to map a path moving forward. I'm all for digging into systems and analyzing the efficiencies and whether there can be improvements made. This has been especially true for my long-term hobbies in autocross and fitness/athletics. 
            </p>
            <p className='text-lg ml-8'>
            That said, I can put together a quality frontend design and am used to keeping the end user in mind when it comes to the interface, as well as their experience. I believe a good design doesn't just elevate the project visually but it allows for the smoothest operation by the user.
            </p>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Professional