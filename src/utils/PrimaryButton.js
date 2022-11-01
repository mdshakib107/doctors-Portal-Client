import React, { Children } from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="  btn btn-primary bg-gradient-to-l from-primary to-secondary text-white	 uppercase font-bold">{children}</button>
        </div>
    );
};

export default PrimaryButton;