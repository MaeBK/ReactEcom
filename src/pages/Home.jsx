import React from 'react';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import PopUp from '../components/PopUp';

const Home = () => {
  return (
    <div>
        <PopUp/>
        <Navbar/>
        <Carousel/>
        <Categories/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home