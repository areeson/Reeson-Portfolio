import React from 'react'
import { Link, } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from '../../contexts/ContextProvider';
import { BUC1 } from '../../components/index';

import { classesBUCardData1, classesBUCardData2, classesUNLCardData1, classesUNLCardData2, classesUNLCardData3, classesUNLCardData4, certificationCardData1, volunteeringCardData1 } from '../../data/dummy';
import { Header } from '../../components';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter" openDelay={1500} closeDelay={1500}>
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);


const Education = () => {
  const { isClicked, currentColor, handleClick } = useStateContext();

  return (
      <div className='flex flex-col h-[98vh] overflow-y-auto
      md:-mt-16 md:h-screen
      '>
      
      <NavButton title="Cart" customFunc={() => handleClick('buc1')} color={currentColor} icon={<FiShoppingCart />} />

<div className='bg-white dark:text-gray-100 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl mt-20 z-[999] 2xl:h-[20rem] lg:h-96 h-[33rem]'>

<div className='mb-5 2xl:mb-0 lg:flex'>
            <div className='lg:w-[27rem]'>
              <Header category="Classes" title="Bellevue University" />
            </div>
            <div className='lg:ml-4 lg:w-1/3'>
              <div className='text-gray-400'>Degree</div>
              <div className='font-extrabold tracking-tight text-slate-900 dark:text-gray-300 text-lg'>Bachelors of Science and Technology</div>
            </div>
            <div className='lg:ml-4 lg:w-1/3'>
              <div className='text-gray-400'>Major</div>
              <div className='font-extrabold tracking-tight text-slate-900 dark:text-gray-300 text-lg'>Software Development</div>
            </div>
            <div className='lg:ml-4 lg:w-1/3'>
              <div className='text-gray-400'>Extra</div>
              <div className='font-extrabold tracking-tight text-slate-900 dark:text-gray-300 text-lg'>Dean's List</div>
            </div>
          </div>

          <div className='rounded-2xl h-64 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-50 dark:scrollbar-thumb-purple-800 w-[102%] lg:w-full break-words z-[1001]'>

    <div className='lg:flex gap-3'>
      {classesBUCardData1.map((item) => (
        <div key={item.title} className='bg-gray-50 dark:text-gray-200 dark:bg-gray-800 w-80 rounded-2xl 2xl:h-24 lg:h-28 hover:drop-shadow-md lg:overflow-hidden overflow-visible mb-3 h-[3.25rem]'>
        <button onClick={() => handleClick(item.link)}>
        
          <div className='w-full h-[.75rem] bg-gradient-to-r from-purple-300 to-white dark:from-purple-800 dark:to-purple-800 dark:text-gray-300 rounded-2xl flex items-center justify-center' />

          <div className='w-full h-4/5 '>
            <p className='2xl:text-xl lg:text-lg dark:text-gray-100 text-gray-800 m-2'>
              {item.title}
            </p>
            <p className='text-md dark:text-gray-200 text-gray-600 m-2'>
              {item.description}
            </p>
          </div>

        </button>
      </div>
      ))}
    </div>

    <div className='lg:flex gap-3'>
      {classesBUCardData2.map((item) => (
        <div key={item.title} className='bg-gray-50 dark:text-gray-200 dark:bg-gray-800 w-80 rounded-2xl 2xl:h-24 lg:h-28 hover:drop-shadow-md lg:overflow-hidden overflow-visible mb-3 h-[3.25rem]'>
        <Link to={`/${item.link}`}>

          <div className='w-full h-[.75rem] bg-gradient-to-r from-purple-300 to-white dark:from-purple-800 dark:to-purple-800 dark:text-gray-300 rounded-2xl flex items-center justify-center' />

          <div className='w-full h-4/5 '>
            <p className='2xl:text-xl lg:text-lg dark:text-gray-100 text-gray-800 m-2'>
              {item.title}
            </p>
            <p className='text-md dark:text-gray-200 text-gray-600 m-2'>
              {item.description}
            </p>
          </div>

        </Link>
      </div>
      ))}
    </div>

  </div>
</div>


        <div className='bg-white dark:text-gray-100 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl 2xl:h-44 lg:h-48 z-[1001]'>
          <Header category="Side-Quests" title="Certifications " />

          <div className='rounded-2xl lg:h-48 h-32 overflow-x-auto scrollbar-thin scrollbar-thumb-emerald-50 dark:scrollbar-thumb-emerald-800 w-[102%] lg:w-full'>

            <div className='lg:flex gap-3'>
              {certificationCardData1.map((item) => (
                <div key={item.title} className='bg-gray-50 dark:text-gray-200 dark:bg-gray-800 w-80 rounded-2xl 2xl:h-16 lg:h-20 hover:drop-shadow-md lg:overflow-hidden overflow-visible mb-3 h-[3.25rem]'>
                <Link to={`/${item.link}`}>

                  <div className='w-full h-[.75rem] bg-gradient-to-r from-emerald-300 to-white dark:from-emerald-800 dark:to-gray-800 dark:text-gray-300 rounded-2xl flex items-center justify-center' />

                  <div className='w-full h-4/5 '>
                    <p className='2xl:text-xl lg:text-lg dark:text-gray-100 text-gray-800 m-2'>
                      {item.title}
                    </p>
                    <p className='text-md dark:text-gray-200 text-gray-600 m-2'>
                      {item.description}
                    </p>
                  </div>

                </Link>
              </div>
              ))}
            </div>
          </div>
        </div>


        <div className='bg-white dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl 2xl:h-[37rem] lg:h-[40rem] h-[54rem] z-[1001]'>

        <div className='mb-5 lg:mb-0 lg:flex'>
          <Header category="Classes" title="University of Nebraska-Lincoln" />
          <div className='2xl:ml-16 lg:ml-4 lg:w-1/3'>
            <div className='text-gray-400'>Degree</div>
            <div className='font-extrabold tracking-tight text-slate-900 dark:text-gray-300 text-lg'>Bachelors of Science in Business Administration</div>
          </div>
          <div className='2xl:ml-16 lg:ml-4 lg:w-1/3'>
            <div className='text-gray-400'>Major</div>
            <div className='font-extrabold tracking-tight text-slate-900 dark:text-gray-300 text-lg'> Marketing</div>
            <div className='font-extrabold tracking-tight text-slate-900 dark:text-gray-300 text-lg'> Management</div>
          </div>
          <div className='2xl:ml-16 lg:ml-4 lg:w-1/3'>
            <div className='text-gray-400'>Extra</div>
            <div className='font-extrabold tracking-tight text-slate-900 dark:text-gray-300 text-lg'>UNL Sales Certificate</div>
            <div className='font-extrabold tracking-tight text-slate-900 dark:text-gray-300 text-lg'>CREW Rowing Team</div>
          </div>
        </div>

          <div className='rounded-2xl 2xl:h-[28rem] lg:h-[33rem] h-[29rem] overflow-x-auto scrollbar-thin scrollbar-thumb-rose-50 dark:scrollbar-thumb-rose-800 w-[102%] lg:w-full break-words'>

            <div className='lg:flex gap-3'>
              {classesUNLCardData1.map((item) => (
                <div key={item.title} className='bg-gray-50 dark:text-gray-200 dark:bg-gray-800 w-80 rounded-2xl 2xl:h-28 lg:h-28 h-[3.25rem] hover:drop-shadow-md lg:overflow-hidden overflow-visible mb-3 '>
                <Link to={`/${item.link}`}>

                  <div className='w-full h-[.75rem] bg-gradient-to-r from-rose-600 to-white dark:from-rose-800 dark:to-rose-800 dark:text-gray-300 rounded-2xl flex items-center justify-center' />

                  <div className='w-full h-4/5 '>
                    <p className='2xl:text-xl lg:text-lg dark:text-gray-100 text-gray-800 m-2'>
                      {item.title}
                    </p>
                    <p className='text-md dark:text-gray-200 text-gray-600 m-2'>
                      {item.description}
                    </p>
                  </div>

                </Link>
              </div>
              ))}
            </div>

            <div className='lg:flex gap-3'>
              {classesUNLCardData2.map((item) => (
                <div key={item.title} className='bg-gray-50 dark:text-gray-200 dark:bg-gray-800 w-80 rounded-2xl 2xl:h-24 lg:h-28 hover:drop-shadow-md lg:overflow-hidden overflow-visible mb-3 h-[3.25rem]'>
                <Link to={`/${item.link}`}>

                  <div className='w-full h-[.75rem] bg-gradient-to-r from-rose-600 to-white dark:from-rose-800 dark:to-rose-800 dark:text-gray-300 rounded-2xl flex items-center justify-center' />

                  <div className='w-full h-4/5 '>
                    <p className='2xl:text-xl lg:text-lg dark:text-gray-100 text-gray-800 m-2'>
                      {item.title}
                    </p>
                    <p className='text-md dark:text-gray-200 text-gray-600 m-2'>
                      {item.description}
                    </p>
                  </div>

                </Link>
              </div>
              ))}
            </div>

            <div className='lg:flex gap-3'>
              {classesUNLCardData3.map((item) => (
                <div key={item.title} className='bg-gray-50 dark:text-gray-200 dark:bg-gray-800 w-80 rounded-2xl 2xl:h-24 lg:h-28 hover:drop-shadow-md lg:overflow-hidden overflow-visible mb-3 h-[3.25rem]'>
                <Link to={`/${item.link}`}>

                  <div className='w-full h-[.75rem] bg-gradient-to-r from-rose-600 to-white dark:from-rose-800 dark:to-rose-800 dark:text-gray-300 rounded-2xl flex items-center justify-center' />

                  <div className='w-full h-4/5 '>
                    <p className='2xl:text-xl lg:text-lg dark:text-gray-100 text-gray-800 m-2'>
                      {item.title}
                    </p>
                    <p className='text-md dark:text-gray-200 text-gray-600 m-2'>
                      {item.description}
                    </p>
                  </div>

                </Link>
              </div>
              ))}
            </div>

            <div className='lg:flex gap-3'>
              {classesUNLCardData4.map((item) => (
                <div key={item.title} className='bg-gray-50 dark:text-gray-200 dark:bg-gray-800 w-80 rounded-2xl 2xl:h-24 lg:h-28 hover:drop-shadow-md lg:overflow-hidden overflow-visible mb-3 h-[3.25rem]'>
                <Link to={`/${item.link}`}>

                  <div className='w-full h-[.75rem] bg-gradient-to-r from-rose-600 to-white dark:from-rose-800 dark:to-rose-800 dark:text-gray-300 rounded-2xl flex items-center justify-center' />

                  <div className='w-full h-4/5 '>
                    <p className='2xl:text-xl lg:text-lg dark:text-gray-100 text-gray-800 m-2'>
                      {item.title}
                    </p>
                    <p className='text-md dark:text-gray-200 text-gray-600 m-2'>
                      {item.description}
                    </p>
                  </div>

                </Link>
              </div>
              ))}
            </div>

          </div>
        </div>

        <div className='bg-white dark:text-gray-100 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl lg:h-44 h-60 z-[1001]'>
          <Header category="Community" title="Volunteering" />

          <div className='rounded-2xl h-48 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-50 dark:scrollbar-thumb-blue-700 w-[102%] lg:w-full break-words'>

            <div className='lg:flex gap-3'>
              {volunteeringCardData1.map((item) => (
                <div key={item.title} className='bg-gray-50 dark:text-gray-200 dark:bg-gray-800 w-80 rounded-2xl lg:h-16 hover:drop-shadow-md lg:overflow-hidden overflow-visible mb-3 h-[3.25rem]'>
                <Link to={`/${item.link}`}>

                  <div className='w-full h-[.75rem] bg-gradient-to-r from-blue-300 to-white dark:from-blue-800 dark:to-gray-800 dark:text-gray-300 rounded-2xl flex items-center justify-center' />

                  <div className='w-full h-4/5 '>
                    <p className='2xl:text-xl lg:text-lg dark:text-gray-100 text-gray-800 m-2'>
                      {item.title}
                    </p>
                    <p className='text-md dark:text-gray-200 text-gray-600 m-2'>
                      {item.description}
                    </p>
                  </div>

                </Link>
              </div>
              ))}
            </div>

          </div>
        </div>


        {isClicked.buc1 && (<BUC1 />)}
      </div>
  )
}

export default Education