import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
const Party = () => {
  return (
    <div className='py-12'>
      <div className='flex flex-col justify-center items-center gap-3'>
        <h2 className='text-xl'>You Bring the Party, We Bring the Food</h2>
        <p className='text-center'>Skip basic and bring excitement to your next event with Chubby's Jamaican Catering. Our full service-menu can be customized for any event, available for pickup and delivery. </p>
        <Link href="/menu">
        <button className="bg-[#F14321] text-xl text-white px-4 py-3 rounded-xl transform transition-transform hover:translate-y-[-4px]">
  Order Now
</button>
</Link>

      </div>
    </div>
  )
}

export default Party
