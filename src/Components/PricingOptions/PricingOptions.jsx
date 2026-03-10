import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingFetch}) => {
    const pricings = use(pricingFetch)
    console.log(pricings)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto mt-4'>
{
    pricings.map(price=><PricingCard key={price.id} price={price}></PricingCard>)
}
        </div>
    );
};

export default PricingOptions;