'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import Logo from '../BrandLogo/Logo';


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex justify-between items-center font-medium fixed left-0 top-0 mx-auto w-full md:px-10 px-4 text-xl border-b md:py-6 py-4 bg-white z-50">

            {/* Logo */}
            <div>
                <Logo></Logo>
            </div>


            {/* Hamburger Menu */}
            <div onClick={() => setOpen(!open)} className="lg:hidden z-50 text-2xl">
                {
                    open ? <IoMdClose /> : <TfiMenuAlt />
                }
            </div>


            {/* NavLinks */}
            <div className="hidden lg:flex gap-10 items-center">
                {
                    navItems.map(nav => (<Link href={nav.path} key={nav.path}>{nav.title}</Link>))
                }
            </div>


            {/* SocialIcons */}
            <SocialIcons className="hidden lg:flex gap-8 items-center" />



            {/* mobile view */}
            <div className={`lg:hidden fixed bg-white md:top-24 top-20 overflow-y-auto w-full h-full bottom-0 py-4 md:pl-10 pl-6 space-y-7 duration-300 ${open ? 'right-0' : '-right-full'}`}>
                <div className='flex flex-col space-y-4'>
                    {
                        navItems.map(nav => (<Link href={nav.path} key={nav.path}>{nav.title}</Link>))
                    }
                </div>

                <SocialIcons className="flex gap-6 items-center" />
            </div>
        </div>
    );
};


// SocialIcons Component
const SocialIcons = ({ className }) => (
    <div className={className}>
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
    </div>
);

// Navigation Items
const navItems = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Recipes",
        path: "/recipes"
    },
    {
        title: "Blog",
        path: "/blog"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "About us",
        path: "/about"
    }
]

export default Navbar;














