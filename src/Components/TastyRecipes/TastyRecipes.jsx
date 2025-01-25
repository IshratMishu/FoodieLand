'use client'
import React, { useEffect, useState } from 'react';
import { recipes } from '../../lib/tastyRecipes';
import RecipesCard from './RecipesCard';

const TastyRecipes = () => {

    return (
        <div className='md:mt-32 mt-24'>
            <h2 className='text-4xl font-semibold text-center'>Simple and tasty recipes</h2>
            <p className='text-sm text-[var(--secondary)] text-center mt-3'>Whip up delicious meals with our simple and tasty recipes. Perfect for every <br /> skill level, bringing flavor to your kitchen effortlessly!</p>

            <div className='grid lg:grid-cols-3 grid-cols-2 md:gap-6 gap-3 mx-auto mt-14'>
                {
                    recipes.map(recipe => <RecipesCard recipe={recipe} key={recipe.id}></RecipesCard>)
                }
            </div>
        </div>
    );
};

export default TastyRecipes;