import React from 'react';
import Logo from '../BrandLogo/Logo';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='mt-32'>
            <div className='flex md:flex-row flex-col justify-between md:mb-10 mb-8 text-center md:text-start items-center'>
                <div>
                    <Logo></Logo>
                    <p className='pt-2'>Bringing foodies together,one recipe at a time.</p>
                </div>

                <div className="flex md:flex-row flex-col lg:gap-10 md:gap-5 gap-3 mt-5 md:mt-0 underline">
                    {
                        navItems.map(nav => (<Link href={nav.path} key={nav.path}>{nav.title}</Link>))
                    }
                </div>
            </div>

            <hr />

            <div className='flex md:flex-row flex-col-reverse justify-between gap-6 items-center md:mt-10 mt-8'>
                <div></div>
                <div>
                    <h4>@2024 <span className='text-red-700'>SpaceZee</span></h4>
                </div>
                <div className="flex gap-8 items-center">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>

        </div>
    );
};


// Navigation Items
const navItems = [
    { title: "Recipes", path: "/recipes" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
    { title: "About us", path: "/about" }
]

export default Footer;