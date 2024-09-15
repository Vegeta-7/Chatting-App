import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

const Product = ({ text, quantity, image, total, price }) => {
  return (
    <div className='flex justify-end border-2 border-black mt-3 w-full p-2 px-4 rounded-full gap-4'>        
        <img src={image} alt="product" className='h-14 w-14 rounded-full'/>
        <div className='flex justify-between w-full'>
            <div className='flex flex-col items-start justify-center'>
                <p className='text-red-600 font-bold'>{text}</p>
                <p className='text-red-600 text-sm'>{price}</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center gap-3 mr-2'>
                    <p className='text-red-600 font-bold'><FaMinus/></p>
                    <p className='text-red-600 text-sm'>{quantity}</p>
                    <p className='text-red-600 font-bold'><FaPlus/></p>
                </div>
                <p className='text-red-600 text-sm'>{total}</p>
            </div>
        </div>
    </div>
  )
}

export default Product