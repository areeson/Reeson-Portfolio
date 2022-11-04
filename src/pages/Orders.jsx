import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';


const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  return (
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>

          <Header category="Page" title="Orders" />
          
          <GridComponent
            id="gridcomp"
            dataSource={ordersData}
            allowPaging
            allowSorting
            allowExcelExport
            allowPdfExport
            contextMenuItems={contextMenuItems}
            editSettings={editing}
          >

            <ColumnsDirective>
              {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>

            <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />

          </GridComponent>
        </div>
      </div>
  )
}

export default Orders