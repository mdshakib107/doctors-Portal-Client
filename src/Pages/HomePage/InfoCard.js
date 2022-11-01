import React from 'react';


const InfoCard = ({ img, title, bgClass }) => {
    console.log(bgClass)
    return (
        <div className={` text-white p-2 card lg:card-side shadow-xl ${bgClass}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default InfoCard;