import React from 'react';


const InfoCard = ({ img, title, bgClass }) => {
    return (
        <div className={` text-white px-3 card lg:card-side bg-primary shadow-xl ${bgClass}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default InfoCard;