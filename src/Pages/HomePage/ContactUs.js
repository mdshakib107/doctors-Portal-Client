import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../../utils/PrimaryButton';

const ContactUs = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }} className='text-center py-16 mt-20'
        >
            <h3 className=' text-xl text-primary font-bold'>Contact Us</h3>
            <h2 className='py-5 text-3xl text-white'>Stay connected with us</h2>
            <input type="email" placeholder="Email Address" className="input input-bordered w-96 mb-5" /><br />
            <input type="text" placeholder="Subject" className="input input-bordered w-96 mb-5" /><br />
            <textarea className="textarea w-96 mb-5" placeholder="Bio"></textarea>
            <PrimaryButton>Submit</PrimaryButton>
        </section>
    );
};

export default ContactUs;