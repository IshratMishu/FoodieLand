import Image from 'next/image';
import React from 'react';

const ChefSection = () => {
    return (
        <div className='md:mt-32 mt-24 flex flex-col-reverse md:flex-row justify-between items-center'>
            <div className='text-center md:text-start'>
                <h2 className='lg:text-4xl text-3xl font-semibold'>Everyone can be a <br />
                chef in their own kitchen</h2>
                <p className='text-sm text-[var(--secondary)] mt-5 max-w-[450px]'>Discover the joy of cooking and unleash your inner chef. With the right recipes and a dash of creativity, every kitchen becomes a place for culinary magic!</p>
                 <button className='bg-black text-white flex items-center gap-1 px-4 py-3 rounded-xl md:mt-10 mt-5 md:mx-0 mx-auto'> Learn More</button>
            </div>
            <div>
                 <Image src={'/assets/chef.png'}
                                alt='chef'
                                height={700}
                                width={600}
                                className='object-cover'></Image>
            </div>
        </div>
    );
};

export default ChefSection;