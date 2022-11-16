import React from 'react'
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
        className="flex flex-wrap justify-center h-screen overflow-hidden h-94v"
        >
        <div className="
          bg-white
          m-3
          rounded-xl
          w-full
          bg-gradient-to-r
          from-yellow-100 to-cyan-200  
          dark:from-violet-800 dark:to-cyan-800
          dark:text-gray-300
          bg-cover
          bg-center
          bg-no-repeat
          flex
          flex-col
          content-center
          items-center
          h-1/2
          mr-8
          ml-8
          ">
          <div className="flex justify-between items-center h-full">
              <div className='flex flex-col items-center'>
                <p className="text-8xl text-zinc-800 dark:text-gray-100">Reeson Portfolio</p>
                <p 
                  className="
                    text-2xl
                    m-5
                    md:m-11
                  ">
                  Lorem Ipsum blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
                </p>
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
              </div>
          </div>

        </div>

        <div className='flex m-3 flex-wrap justify-center gap-8 items-center w-full h-1/2 -mt-10'>
          {homeCardData.map((item) => (
            <div
              key={item.title} 
              className='
              bg-white 
              dark:text-gray-200 dark:bg-secondary-dark-bg 
              w-1/4 
              rounded-2xl
              h-1/2'
            >
              {/* <button 
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
              {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-log font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm ${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>
                {item.title}
              </p> */}
              <div className='
              w-full 
              h-1/3
              bg-gradient-to-r
              from-yellow-100 to-cyan-200  
              dark:from-violet-800 dark:to-cyan-800
              dark:text-gray-300
              rounded-2xl
              flex
              items-center
              justify-center
              '>
                <p className='text-lg text-gray-400'>
                  {item.title}
                </p>
              </div>
              <div className='w-full h-2/3 '>
                <p className='text-sm text-gray-400 m-5'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home