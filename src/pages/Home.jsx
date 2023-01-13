import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { homeCardData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';


const Home = () => {
  const { currentColor } = useStateContext();
  const editing = { allowDeleting: true, allowEditing: true };

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

              <div className='flex flex-col items-center'>
                <p className="text-4xl text-zinc-800 dark:text-gray-100
                md:text-8xl
                ">
                Reeson Portfolio
                </p>
                <p className="text-xl m-5 sm:m-4 md:m-8 lg:m-12
                md:text-2xl
                ">
                  From a few Google searches to a new degree and career pursuit.
                </p>
                <Link to="/Projects">
                <Button
                  color='white'
                  bgColor={currentColor}
                  text='Projects'
                  borderRadius='50px'
                  paddingLeft='35px'
                  paddingRight='35px'
                  paddingTop='20px'
                  paddingBottom='20px'
                  fontSize='25px'
                />
                </Link>
              </div>
              
          </div>

        </div>

        <div className='mt-4 h-1/2 mb-5 w-4/5
        md:flex md:flex-wrap md:justify-center md:items-center md:w-full md:-mt-12 md:gap-8 md:mb-0
        '>
          {homeCardData.map((item) => (
            <div
              key={item.title} 
              className='
              bg-white 
              dark:text-gray-200 dark:bg-secondary-dark-bg 
              w-full
              mb-5
              rounded-2xl
              h-1/3
              md:h-2/3
              hover:drop-shadow-xl
              md:w-[17%]
              md:mb-0
              '
            >
            <Link to={`/${item.link}`}>
              <div className='
              w-full 
              h-1/5
              md:h-1/3
              bg-gradient-to-r
              from-cyan-100 to-yellow-100  
              dark:from-cyan-700 dark:to-violet-900
              dark:text-gray-300
              rounded-2xl
              flex
              items-center
              justify-center
              '>
              </div>
              <div className='w-full h-4/5 
              md:h-2/3
              '>
                <p className='text-xl dark:text-gray-100 text-gray-800 ml-6 mt-2.5
                md:mt-8 md:ml-6 md:mr-6
                '>
                  {item.title}
                </p>
                <p className='text-md dark:text-gray-200 text-gray-600 ml-6 mt-1.5
                md:ml-6 md:mt-3 md:mr-6
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