import { InfiniteMovingCardsDemo } from '@/components/InfiniteMovingCardsDemo'
import ReservationSection from '@/components/ReservationSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <ReservationSection/>
      <WhyChooseUs/>
      <InfiniteMovingCardsDemo/>
    </div>
  )
}

export default page
