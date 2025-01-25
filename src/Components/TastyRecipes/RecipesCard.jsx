import Image from 'next/image';
import React from 'react';
import { FaClock } from 'react-icons/fa';
import { ImSpoonKnife } from 'react-icons/im';

const RecipesCard = ({ recipe }) => {
    const { title, image, cookTime, type, id } = recipe;

    return (
        <div className='rounded-3xl md:space-y-5 space-y-3 md:px-4 md:py-6 px-2 py-3' style={{
            background: 'linear-gradient(to bottom, #E7F9FD00, #E7F9FD)',
        }}>

            <Image
                src={image}
                alt='Recipe'
                height={260}
                width={350}
                className='md:w-[350px] md:h-64 w-64 h-32 object-cover mx-auto rounded-3xl'
            ></Image>

            <h4 className='md:text-2xl text-sm font-semibold'>{title}</h4>

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

export default RecipesCard;