import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import DentalCare from './DentalCare';
import HomeAppionment from './HomeAppionment';
import Info from './Info';
import Services from './ServicesComponent/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className="">
            <div className='px-12'>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <DentalCare></DentalCare>
            </div>
            <HomeAppionment></HomeAppionment>
            <div className="px-12">
                <Testimonials></Testimonials>
            </div>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;