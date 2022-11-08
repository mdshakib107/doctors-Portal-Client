import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppointments from './AvailableAppointments';

const AppoinmentPage = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div >
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default AppoinmentPage;