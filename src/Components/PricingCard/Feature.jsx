import React from 'react';
import { TiTickOutline } from "react-icons/ti";

const Feature = ({feat}) => {
    return (
        <div>
            <p className='flex gap-x-1 items-center'><TiTickOutline />{feat}</p>
        </div>
    );
};

export default Feature;