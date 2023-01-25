import React from 'react'
import { Link, } from 'react-router-dom';

import { projectsBUCardData, projectsPersonalCardData, projectsE36CardData} from '../../data/dummy';
import { Header } from '../../components';


const Projects = () => {

  return (
      <div className='flex flex-col h-full h-94v overflow-y-auto
      md:-mt-16 md:h-screen
      '>

        <div className='bg-white dark:text-gray-100 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl mt-20 z-[1001]'>
          <Header category="Projects" title="Bellevue University" />

          <div className='rounded-2xl flex h-52 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-50 hover:scrollbar-thumb-purple-100 dark:scrollbar-thumb-gray-700'>
            <div className='flex gap-5'>
              {projectsBUCardData.map((item) => (
                <div key={item.title} className='bg-gray-50 dark:text-gray-200 dark:bg-gray-800 w-80 rounded-2xl h-5/6 hover:drop-shadow-md overflow-y-hidden'>
                <Link to={`/${item.link}`}>

                  <div className='w-full h-1/5 bg-gradient-to-r from-purple-300 to-white dark:from-purple-800 dark:to-gray-800 dark:text-gray-300 rounded-2xl flex items-center justify-center' />

                  <div className='w-full h-4/5 '>
                    <p className='text-xl dark:text-gray-100 text-gray-800 m-2'>
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



        <div className='bg-white dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl h-2/5'>
          <Header category="Projects" title="Personal" />

          <div className='rounded-2xl flex h-52 overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-100 hover:scrollbar-thumb-yellow-100 dark:scrollbar-thumb-gray-700 break-words z-[1001]'>
            <div className='flex gap-5'>
              {projectsPersonalCardData.map((item) => (
                <div key={item.title} className='bg-gray-50 dark:text-gray-200 dark:bg-gray-800 w-80 rounded-2xl h-5/6 hover:drop-shadow-md overflow-y-hidden'>
                <Link to={`/${item.link}`}>

                  <div className='w-full h-1/5 bg-gradient-to-r from-yellow-200 to-white dark:from-yellow-800 dark:to-gray-800 dark:text-gray-300 rounded-2xl flex items-center justify-center' />

                  <div className='w-full h-4/5 '>
                    <p className='text-xl dark:text-gray-100 text-gray-800 m-2'>
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



        <div className='bg-white dark:text-gray-100 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl h-2/5'>
          <Header category="Projects" title="E36 " />

          <div className='rounded-2xl flex h-52 overflow-x-auto scrollbar-thin scrollbar-thumb-sky-50 hover:scrollbar-thumb-sky-100 dark:scrollbar-thumb-gray-700 break-words z-[1001]'>
            <div className='flex gap-5'>
              {projectsE36CardData.map((item) => (
                <div key={item.title} className='bg-gray-50 dark:text-gray-100 dark:bg-gray-800 w-80 rounded-2xl h-5/6 hover:drop-shadow-md overflow-y-hidden'>
                <Link to={`/${item.link}`}>

                  <div className='w-full h-1/5 bg-gradient-to-r from-sky-400 to-white dark:from-sky-800 dark:to-gray-800 dark:text-gray-300 rounded-2xl flex items-center justify-center' />

                  <div className='w-full h-4/5 '>
                    <p className='text-xl dark:text-gray-100 text-gray-800 m-2'>
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
      </div>
  )
}

export default Projects