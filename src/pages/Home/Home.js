import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Packages from './Packages'
import Reviews from './Reviews';
import World from './World';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Packages />
      <World />
      <Reviews />
      <Footer />
    </>
  )
}

export default Home