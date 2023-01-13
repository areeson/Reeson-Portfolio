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
        className="flex flex-wrap justify-center h-screen overflow-hidden h-94v -mt-16">
        <div className="bg-white m-3 mt-16 rounded-xl w-full bg-gradient-to-r from-yellow-100 to-cyan-100 dark:from-violet-900 dark:to-cyan-900 dark:text-gray-300 bg-cover bg-center bg-no-repeat flex flex-col content-center items-center h-1/2 mr-8 ml-8 ">

          <div className="flex justify-between items-center h-full">

              <div className='flex flex-col items-center'>
                <p className="text-8xl text-zinc-800 dark:text-gray-100">Reeson Portfolio</p>
                <p 
                  className="text-2xl m-5 sm:m-4 md:m-8 lg:m-12">
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

        <div className='flex -mt-12 flex-wrap justify-center gap-8 items-center w-full h-1/2'>
          {homeCardData.map((item) => (
            <div
              key={item.title} 
              className='
              bg-white 
              dark:text-gray-200 dark:bg-secondary-dark-bg 
              w-1/4 
              rounded-2xl
              h-2/3
              hover:drop-shadow-xl'
            >
            <Link to={`/${item.link}`}>
              <div className='
              w-full 
              h-1/3
              bg-gradient-to-r
              from-cyan-100 to-yellow-100  
              dark:from-cian-800 dark:to-violet-800
              dark:text-gray-300
              rounded-2xl
              flex
              items-center
              justify-center
              '>
              </div>
              <div className='w-full h-2/3 '>
                <p className='text-xl dark:text-gray-100 text-gray-800 m-6 mt-8'>
                  {item.title}
                </p>
                <p className='text-md dark:text-gray-200 text-gray-600 m-6'>
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