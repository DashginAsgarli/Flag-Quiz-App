import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { FaUserAstronaut, FaHome } from "react-icons/fa";
import { MdModelTraining, MdLeaderboard, MdShoppingCart } from "react-icons/md";

function Header() {

    return (
        <>
            <section>
                <div className='px-6 py-4 lg:px-30 lg:py-6 lg:text-[16px] flex justify-between text-[10px] font-[600] uppercase bg-[#0f172a] text-white'>
                    <NavLink to="/profil">
                        <div className='flex flex-col items-center gap-1 relative group'>
                            <FaUserAstronaut className='lg:text-[25px]' />
                            <div>Profil</div>
                        </div>
                    </NavLink>
                    <NavLink to="/shop">
                        <div className='flex flex-col items-center gap-1'>
                            <MdShoppingCart className='lg:text-[25px]' />
                            <div>Mağaza</div>
                        </div>
                    </NavLink>
                    <NavLink to="/">
                        <div className='flex flex-col items-center gap-1'>
                            <FaHome className='lg:text-[25px]' />
                            <div>Əsas ekran</div>
                        </div>
                    </NavLink>

                    <NavLink to="/experience">
                        <div className='flex flex-col items-center gap-1'>
                            <MdModelTraining className='lg:text-[25px]' />
                            <div>Təcrübə</div>
                        </div>
                    </NavLink>
                    <NavLink to="/rating">
                        <div className='flex flex-col items-center gap-1'>
                            <MdLeaderboard className='lg:text-[25px]' />
                            <div>Reyting</div>
                        </div>
                    </NavLink>
                </div>
            </section>
        </>
    )
}

export default Header;
