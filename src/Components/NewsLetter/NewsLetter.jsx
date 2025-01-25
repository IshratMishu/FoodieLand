import Image from 'next/image';
import React from 'react';

const NewsLetter = () => {
    return (
        <div className='md:mt-32 mt-24 bg-[var(--primary)] rounded-3xl flex justify-between items-center md:h-[440px] h-96 relative'>
            {/* Left Image */}
            <Image src={'/assets/salad (1).png'}
                alt='salad'
                height={400}
                width={400}
                className='lg:h-96 md:h-72 lg:w-96 md:w-72 h-32 w-32 object-cover absolute bottom-0 left-0 rounded-s-3xl'></Image>


            {/* Middle Content */}
            <div className='text-center md:space-y-6 space-y-4 md:w-[500px] w-full mx-auto'>
                <h4 className='lg:text-4xl md:text-3xl text-xl font-semibold'>Deliciousness to your inbox</h4>
                <p className='text-sm text-[var(--secondary)] px-2'>Subscribe to our newsletter and get the latest recipes, cooking tips, and food inspirations delivered straight to your inbox. Join the Foodieland community and savor the flavors!</p>

                <div className='relative'>
                    <input type="email"
                        placeholder='Your email address...'
                        className='h-12 px-4 py-2 bg-white rounded-3xl md:w-96 w-72' />

                    <button className='h-9 px-4 py-2 bg-black text-white text-sm rounded-3xl absolute lg:right-10 md:right-16 right-3 top-1.5'>Subscribe</button>
                </div>
            </div>


            {/* Right Image */}
            <Image src={'/assets/salad (2).png'}
                alt='salad'
                height={400}
                width={400}
                className='lg:h-52 lg:w-72 md:h-44 md:w-56 h-28 w-28 object-cover absolute bottom-0 right-0 rounded-r-3xl'></Image>
        </div>
    );
};

export default NewsLetter;



