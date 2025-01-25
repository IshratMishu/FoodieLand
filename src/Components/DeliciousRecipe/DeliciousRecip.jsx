import Image from 'next/image';
import React from 'react';
import { FaClock } from 'react-icons/fa';
import { ImSpoonKnife } from 'react-icons/im';

const DeliciousRecip = ({ delicious }) => {
    const { title, image, cookTime, type } = delicious;

    return (
        <div className='rounded-3xl md:space-y-5 space-y-3 md:px-4 md:py-6 px-2 py-3'>

            <Image
                src={image}
                alt='Recipe'
                height={200}
                width={340}
                className='lg:w-80 lg:h-48 md:w-64 md:h-32 w-52 h-28 object-cover mx-auto rounded-3xl'
            ></Image>

            <h4 className='md:text-base text-sm font-semibold h-16'>{title}</h4>

            <div className='flex md:flex-row flex-col md:gap-10 gap-2 md:items-center text-sm'>
                <div className='flex items-center gap-2'>
                    <FaClock />
                    <p>{cookTime}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <ImSpoonKnife />
                    <p>{type}</p>
                </div>
            </div>
        </div>
    );
};

export default DeliciousRecip;