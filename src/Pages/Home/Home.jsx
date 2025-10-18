import React from 'react';
import Navbar from '../../Components/Home/Navbar/Navbar';
import Footer from '../../Components/Home/Footer/Footer';
import Banner from '../../Components/Home/Banner/Banner';
import ServicesSection from '../../Components/Home/Services-Section/ServicesSection';
import HowItWorks from '../../Components/Home/HowItWorks/HowItWorks';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <HowItWorks></HowItWorks>
      <Footer></Footer>
    </div>
  );
};

export default Home;
