import HomeDelivery from '@/components/HomeDelivery'
import ShopLocation from '@/components/ShopLocation'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <ShopLocation/>
      <WhyChooseUs/>
      <HomeDelivery/>
    </div>
  )
}

export default page
