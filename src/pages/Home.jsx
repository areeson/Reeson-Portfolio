import React from 'react'
import {BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';


const Home = () => {
  const { currentColor } = useStateContext();
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="mt-6">
      <div className="flex flex-wrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 rounded-xl w-full p-14 bg-gradient-to-r from-violet-200 to-cyan-200 bg-no-repeat bg-cover bg-center text-center">
          <div className="flex justify-between items-center">
              <div className='flex flex-col items-center'>
                <p className="text-8xl text-zinc-800 mb-2">Reeson Portfolio</p>
                <p className="text-2xl">Lorem Ipsum blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
              </div>
          </div>
          <div className='mt-6'>
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

        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button 
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
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div  className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
              <div className='flex items-center gap-4'>
                <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                  <span><GoPrimitiveDot /></span>
                  <span>Expense</span>
                </p>
                <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                  <span><GoPrimitiveDot /></span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className='mt-10 flex gap-10 flex-wrap justify-center'>
              <div className='border-r-1 border-color m-4 pr-10'>
                <div>
                  <p>
                    <span className='text-3xl front-semibold'>$93,438</span>
                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3'>23%</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Budget</p>
                </div>
                <div className='mt-8'>
                  <p>
                    <span className='text-3xl front-semibold'>$48,438</span>
                  </p>
                  <p className='text-gray-500 mt-1'>Expense</p>
                </div>

                <div className='mt-5'>
                  <SparkLine 
                    currentColor={currentColor}
                    id='line-sparkline'
                    type='Line'
                    height='80px'
                    width='250px'
                    data={SparklineAreaData}
                    color={currentColor}
                  />
                </div>
                <div className='mt-10'>
                  <Button 
                  color='white'
                  bgColor={currentColor}
                  text='Download Report'
                  borderRadius='10px'
                />
                </div>
              </div>

              <div>
                <Stacked width='320px' height='360px' />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home