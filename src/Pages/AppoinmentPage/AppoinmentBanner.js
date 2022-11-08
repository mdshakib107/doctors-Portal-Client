import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'

const AppoinmentBanner = ({ date, setDate }) => {

    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className=''>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='chair ' />
                    <div className='lg:mr-10'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppoinmentBanner;