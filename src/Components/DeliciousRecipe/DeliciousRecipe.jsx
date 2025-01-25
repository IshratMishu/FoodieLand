import React from 'react';
import { deliciousRecipes } from '../../lib/deliciousRecipes';
import DeliciousRecip from './DeliciousRecip';

const DeliciousRecipe = () => {
    return (
        <div className='md:mt-32 mt-24'>
            <div className='flex md:flex-row flex-col md:text-start text-center justify-between items-center'>
                <h2 className='lg:text-4xl text-3xl font-semibold md:w-[40%] w-full'>Try this delicious recipe 
                    to make your day</h2>
                <p className='text-sm text-[var(--secondary)] md:w-[50%] w-full md:pt-0 pt-6'>Brighten your day with this irresistible recipe! Easy to make and packed with flavor, it's a treat you don't want to miss.</p>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mx-auto gap-5 mt-12'>
                {
                    deliciousRecipes.map(delicious => <DeliciousRecip delicious={delicious} key={delicious.id}></DeliciousRecip>)
                }
            </div>
        </div>
    );
};

export default DeliciousRecipe;