import React from 'react';

const LInk = ({link}) => {
    return (
        <div>
            <div className='flex'>
                <li className='mr-8'><a href={link.href}>{link.page}</a></li>
            </div>
        </div>
    );
};

export default LInk;