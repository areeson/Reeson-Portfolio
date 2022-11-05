import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';


const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  return (
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>

          <Header category="Page" title="Employees" />
          
          <GridComponent
            id="gridcomp"
            dataSource={employeesData}
            allowPaging
            allowSorting
            toolbar={['Search']}
            width='auto'
          >

            <ColumnsDirective>
              {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>

            <Inject services={[Page, Search, Toolbar]} />

          </GridComponent>
        </div>
      </div>
  )
}

export default Employees