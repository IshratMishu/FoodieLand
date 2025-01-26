import Image from 'next/image';
import React from 'react';
import { MdMarkEmailUnread } from "react-icons/md";
import { FaFacebook, FaInstagramSquare, FaPhoneAlt, FaTwitterSquare } from "react-icons/fa";


const page = () => {
    return (
        <div className='md:mt-28 mt-24 lg:px-20 px-0'>
            <h1 className='text-4xl font-bold'>About Foodieland</h1>
            <h4 className='text-2xl font-semibold mt-6'>Clean, Safe, and Prepared to Serve You</h4>
            <p className='text-lg'>The diner is open from 6 am to 10 pm --and free parking is available behind our location.</p>

            <div className='mt-20 flex md:flex-row flex-col items-center justify-between'>
                <Image
                    src={'/assets/say-cheesei_1656085479.webp'}
                    alt='about'
                    height={300}
                    width={300}
                    className='lg:w-96 lg:h-96 w-72 h-72 rounded-full object-cover'></Image>

                <div className='md:w-[50%] w-full'>
                    <h3 className='text-2xl font-semibold pb-5'>Superior service, personalized attention</h3>

                    <p>We're proud to offer the highest quality, freshest diner food on The Main Line. From our family to yours, we put lots of love and careful attention in each item. We hope you enjoy our work as much as we enjoy bringing it to you.</p>

                    <p className='pt-6'>A local favorite since 1971, Foodieland’s offers an extensive menu with everything imaginable at a diner, including salads, soups, soft drinks, desserts, breakfast foods, eggs, pancakes, waffles, hot and cold sandwiches, burgers, wraps, seafood, steak, plus Italian and Greek specialties.</p>

                    <p className='pt-6'>All baking is done on the premises, and credit cards are accepted. We also offer a full bar menu.</p>
                    <p className='pt-6'>It's our honor to serve you. Welcome and enjoy!</p>
                </div>
            </div>

            <div className='text-center bg-[var(--primary)] mt-28 p-16'>
                <h2 className='text-3xl font-semibold'>"Even though I live on The Main Line, with so many restaurants and food choices, I still want the best diner near me."</h2>
                <p className='font-medium pt-6'>Drew D., Wayne, PA</p>
            </div>

            <div className='flex md:flex-row flex-col md:gap-28 gap-10 mt-20'>
                <div>
                    <h3 className='text-3xl font-semibold'>A brief history</h3>
                    <p className='pt-6'>In 1998, proprietor Foodieland's son, Tom, sold the original diner to brothers, Nick and Dennis Dellaportas, who remodeled it making it 60 feet larger and doubled capacity. The two brothers and their families worked with the contractors who shipped the new restaurant in nine pieces to downtown Wayne, PA, from New Rochelle, New York.</p>

                    <p className='pt-6'>Today, you can expect an amazing bakery on premises, breakfast served all day, alcoholic beverages delivered to your table, family-sized portions of great food with fresh ingredients, and the type of friendly servers you would expect--having earned the distinction of Best of The Main Line. It's still a family affair, with the Dellaportas family as owner-operators.</p>
                </div>
                <Image
                    src={'/assets/e.png'}
                    alt='about'
                    height={400}
                    width={350}
                    className='rounded-3xl object-cover'></Image>
            </div>


            <div className='flex justify-center mt-20 relative'>
                <div className='md:visible invisible w-80 h-80 border-4 border-[var(--primary)]'>

                </div>
                <div className='w-80 h-80 bg-[var(--primary)] space-y-4 px-10 py-20 md:absolute left-1/2 top-5'>
                    <p className='flex items-center gap-2 text-lg font-semibold'><MdMarkEmailUnread /> foodieland@gmail.com</p>
                    <p className='flex items-center gap-2 text-lg font-semibold'><FaPhoneAlt /> +911234 5678</p>

                    <div className='flex gap-5 items-center text-xl mt-10 justify-center'>
                        <FaFacebook />
                        <FaTwitterSquare />
                        <FaInstagramSquare />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;