import React from 'react';
import appointment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'
import PrimaryButton from '../../utils/PrimaryButton';

const HomeAppionment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='mt-28 flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-140px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h3 className=' text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='py-5 text-3xl text-white'>Make an Appointment Today</h2>
                <p className='pb-5 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton >Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default HomeAppionment;
