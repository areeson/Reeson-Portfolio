import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter, } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {

  return (
    <div className='flex gap-10 flex-wrap justify-center'>
      <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>

        <Header category="Page" title="Customers" />
        
        <GridComponent
          id="gridcomp"
          dataSource={customersData}
          allowPaging
          allowSorting
          toolbar={['Delete']}
          editSettings={{ allowDeleting: true, allowEditing: true }}
          width='auto'
        >

          <ColumnsDirective>
            {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>

          <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />

        </GridComponent>
      </div>
    </div>
)
}

export default Customers