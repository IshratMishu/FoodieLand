import Image from 'next/image';
import React from 'react';
import { FaInstagram } from "react-icons/fa";


const InstagramFoodie = () => {
    return (
        <div className='md:mt-32 mt-24'>
            <h2 className='text-4xl font-semibold text-center'>Check out @foodieland on Instagram</h2>
            <p className='text-sm text-[var(--secondary)] text-center mt-5'>Join the food-loving community at @foodieland on Instagram! Discover mouthwatering recipes, <br /> cooking tips, and delicious inspiration for your next meal.</p>

            <div className='mt-16 pb-14' style={{
                background: 'linear-gradient(to bottom, #E7F9FD00, #E7F9FD)',
            }}>

                <div className='grid md:grid-cols-4 grid-cols-2 items-center justify-between gap-2'>
                    <Image src={'/assets/Post (1).png'}
                        alt='chef'
                        height={300}
                        width={250}
                        className='object-cover'></Image>
                    <Image src={'/assets/Post (2).png'}
                        alt='chef'
                        height={300}
                        width={250}
                        className='object-cover'></Image>
                    <Image src={'/assets/Post (3).png'}
                        alt='chef'
                        height={300}
                        width={250}
                        className='object-cover'></Image>
                    <Image src={'/assets/Post.png'}
                        alt='chef'
                        height={300}
                        width={250}
                        className='object-cover'></Image>
                </div>

                <button className='bg-black text-white flex items-center gap-1 px-4 py-3 rounded-xl md:mt-14 mt-5 mx-auto'> Visit Our Instagram <FaInstagram /></button>
            </div>
        </div>
    );
};

export default InstagramFoodie;