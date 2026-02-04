import React from 'react'
import { FaUserAstronaut, FaHome } from "react-icons/fa";
import { MdModelTraining ,MdLeaderboard, MdShoppingCart } from "react-icons/md";
function Header() {

    return (
        <>
            <section>
                <div className='px-6 py-4 lg:px-30 lg:py-6 lg:text-[16px] flex justify-between text-[12px] font-[600] uppercase bg-[#1c3331] text-white'>
                    <div className='flex flex-col items-center gap-1'>
                        <FaUserAstronaut className='lg:text-[25px]' />
                        <div>Profil</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <MdShoppingCart className='lg:text-[25px]' />
                        <div>Bazar</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <FaHome className='lg:text-[25px]' />
                        <div>Əsas ekran</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <MdModelTraining className='lg:text-[25px]' />
                        <div>Təcrübə</div>
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <MdLeaderboard className='lg:text-[25px]' />
                        <div>Reyting</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;
