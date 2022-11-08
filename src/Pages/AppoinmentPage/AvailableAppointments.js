import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);



    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='px-12'>
            <h4 className='text-2xl text-secondary text-center'>Available Appointments on {format(date, 'PP')}</h4>
            <p className='py-3 text-xl text-center text-accent'>Please select a service.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                ></Service>)}
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}

        </div>
    );
};

export default AvailableAppointments;