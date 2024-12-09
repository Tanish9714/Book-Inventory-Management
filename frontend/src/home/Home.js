import React from 'react'
import Banner from '../components/Banner'
import BestSellerBook from './BestSellerBook'
import FavBook from '../components/FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <BestSellerBook />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
      <Review/>
    </div>
    
  )
}

export default Home
