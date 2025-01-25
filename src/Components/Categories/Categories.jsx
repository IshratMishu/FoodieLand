import Image from 'next/image';
import React from 'react';

const Categories = () => {
    return (
        <div className='md:mt-32 mt-24'>
            <div className='flex justify-between items-center'>
                <h2 className='md:text-3xl text-xl font-semibold'>Categories</h2>
                <button className='bg-[var(--primary)] rounded-2xl font-semibold px-4 py-2 text-sm md:text-base'>View All Categories</button>
            </div>

            {/* Category Items */}
            <div className='grid md:grid-cols-6 grid-cols-3 justify-between mt-14'>
                <Image
                    src={'/assets/breakfast.png'}
                    alt='category'
                    height={210}
                    width={200}
                    className='object-cover lg:h-44 lg:w-36 md:h-32 md:w-28 h-28 w-24 mx-auto'></Image>

                <Image
                    src={'/assets/vegan.png'}
                    alt='category'
                    height={210}
                    width={200}
                    className='object-cover lg:h-44 lg:w-36 md:h-32 md:w-28 h-28 w-24 mx-auto'></Image>

                <Image
                    src={'/assets/meat.png'}
                    alt='category'
                    height={210}
                    width={200}
                    className='object-cover lg:h-44 lg:w-36 md:h-32 md:w-28 h-28 w-24 mx-auto'></Image>

                <Image
                    src={'/assets/dessert.png'}
                    alt='category'
                    height={210}
                    width={200}
                    className='object-cover lg:h-44 lg:w-36 md:h-32 md:w-28 h-28 w-24 mx-auto'></Image>

                <Image
                    src={'/assets/lunch.png'}
                    alt='category'
                    height={210}
                    width={200}
                    className='object-cover lg:h-44 lg:w-36 md:h-32 md:w-28 h-28 w-24 mx-auto'></Image>

                <Image
                    src={'/assets/choco.png'}
                    alt='category'
                    height={210}
                    width={200}
                    className='object-cover lg:h-44 lg:w-36 md:h-32 md:w-28 h-28 w-24 mx-auto'></Image>
            </div>
        </div>
    );
};

export default Categories;