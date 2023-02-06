import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../../contexts/ContextProvider';
import { cartData } from '../../data/dummy';
import { Button } from '..';

const BUC1 = () => {
    const { currentColor, setIsClicked } = useStateContext();
  
    return (
      <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 ">
        <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-lg">Shopping Cart (UX Example)</p>
            <button 
              type='button'
              onClick={() => setIsClicked(false)}
              style={{ color: 'rgb(153, 171, 180)', borderRadius:'50%' }}
              className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
            >
              <MdOutlineCancel />
            </button> 
          </div>
          
          <div className="mt-3 mb-3">
            <div className="flex justify-between items-center">
              <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
              <p className="font-semibold">$265</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="text-gray-500 dark:text-gray-200">Total</p>
              <p className="font-semibold">$283.55</p>
            </div>
          </div>
          <div className="mt-5">
            <Button
              color="white"
              bgColor={currentColor}
              text="Place Order"
              borderRadius="10px"
              width="full"
            />
          </div>
        </div>
      </div>
    );
  };

export default BUC1