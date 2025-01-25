import Image from 'next/image';
import React from 'react';
import { ImSpoonKnife } from "react-icons/im";
import { FaClock, FaRegPlayCircle } from 'react-icons/fa';


const Banner = () => {
    return (
        <div className='md:mt-28 mt-24 bg-[var(--primary)] rounded-3xl lg:h-[640px] h-[460px] flex items-center relative'>

            {/* Banner Texts */}
            <div className='lg:px-10 px-5 w-[620px]'>
                <div className='flex gap-2 items-center bg-white rounded-3xl px-4 py-2 shadow-sm md:w-40 w-36 lg:mb-10 mb-4'>
                    <Image src={'/assets/banner1.png'} alt='Recipe' height={100} width={100} className='h-5 w-5'></Image>
                    <h6 className='md:text-base text-sm'>Hot Recipes</h6>
                </div>

                <div>
                    <h4 className='lg:text-6xl md:text-4xl text-3xl font-semibold pb-5'>Spicy delicious chicken wings</h4>
                    <p className='text-sm lg:text-base text-[var(--secondary)]'>Get ready to savor the bold flavors of our spicy, delicious chicken wings! Perfectly seasoned and irresistibly crispy, they’re a fiery treat for your taste buds.</p>
                </div>


                <div className='flex items-center gap-5 mt-5'>
                    <div className='flex items-center gap-2 bg-[#0000000D] rounded-3xl px-3 py-1'>
                        <FaClock />
                        <p>30Minutes</p>
                    </div>
                    <div className='flex items-center gap-2 bg-[#0000000D] rounded-3xl px-3 py-1'>
                        <ImSpoonKnife />
                        <p>Chicken</p>
                    </div>
                </div>


                <div className='flex md:flex-row flex-col justify-between items-center lg:mt-16 md:mt-8 lg:text-base text-sm'>
                    <div className='flex items-center gap-4 md:visible invisible'>
                        <Image src={'/assets/john.png'} alt='John' height={100} width={100} className='h-10 w-10'></Image>
                        <div>
                            <h5 className='font-bold'>John Smith</h5>
                            <p>15 March 2022</p>
                        </div>
                    </div>

                    <div>
                        <button className='bg-black text-white flex items-center gap-1 px-4 py-3 rounded-xl'> View Recipes <FaRegPlayCircle /></button>
                    </div>
                </div>
            </div>


            {/* Badge (visible for large & medium screen) */}
            <div>
                <Image src={'/assets/Badge.png'} alt='badge' height={150} width={150} className='absolute md:visible invisible lg:top-16 top-10 right-[45%] lg:h-36 h-24 lg:w-36 w-24'></Image>
            </div>


            {/* Banner image for desktop view */}
            <div>
                <Image src={'/assets/banner.png'} alt='Banner' height={640} width={660} className='lg:h-[640px] h-[460px] rounded-r-3xl w-[660px] object-cover md:visible invisible'></Image>
            </div>


            {/* Banner image for mobile view */}
            <div>
                <Image src={'/assets/bannerMob.png'} alt='Banner' height={640} width={660} className='md:hidden block h-40 w-40 absolute -top-10 -right-2 rounded-full'></Image>
            </div>
        </div>
    );
};

export default Banner;