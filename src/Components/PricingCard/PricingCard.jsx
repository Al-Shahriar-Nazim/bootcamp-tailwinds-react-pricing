import React from 'react';
import Feature from './Feature';

const PricingCard = ({price}) => {
    console.log(price)
    const {name,duration,description,features} = price;
    return (
        <div className='border rounded-2xl p-5  bg-violet-800 hover:bg-violet-600 flex flex-col'>
            <h3 className="text-2xl">{name}</h3>
            {/* <p>${price}</p> */}
            <p>Duration :{duration}</p>
            <p><small>{description}</small></p>
            <div className='mt-4 flex-1'>
                <h3>All keys :</h3>
                {features.map(feat =><Feature feat={feat}></Feature>)}
            </div>
            <button className='btn w-full'>Subscribe</button>
        </div>
    );
};

export default PricingCard;