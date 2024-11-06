import React from 'react'
import { useCartContext } from '../Context/CartContext'

const GridCard = ({val}) => {
  const {addToCart} = useCartContext()
  const handelSubmit = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    addToCart(val.id, 1)
  }

  return (
    <div className=' h-[33vh] w-[40vw]  shadow-xl flex border border-gray-300'>
            <div className="h-full w-[60%]">
                <img src={val.food_img_url} alt="" className='w-full h-full' />
            </div>
            <div className="desc py-2 text-center h-full w-2/5 flex flex-col items-center gap-4">
                <p className='text-gray-400 font-header font-semibold my-1'>{val.food_type_type}</p>
                <h2 className='text-2xl font-semibold font-funky'>{val.food_name}</h2>
                <h3 className='text-xl text-yellow-800 font-bold font-header'>₹ {val.food_price}</h3>
                <button className='rounded-full my-2 px-4 py-2 bg-transparent border transition-all duration-200 border-yellow-900 hover:bg-yellow-800 hover:text-white hover:font-semibold font-header font-semibold' onClick={handelSubmit}>Add To Cart</button>
            </div>

        </div>
  )
}

export default GridCard