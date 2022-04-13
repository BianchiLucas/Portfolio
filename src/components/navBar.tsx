import React, { useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import miniature from '../assets/miniature.png'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {setIsOpen(!isOpen)}

    return (
        <div className='relative w-full h-[80px] flex justify-between items-center px-4 mt-4 text-2xl snap-start'>
            <div className='px-4 relative'>
                <img src={miniature} alt="Logo" className='h-20 z-10' />
                <div className='h-20 w-20 ml-4 absolute top-0 left-0 rounded-full shadow-lg shadow-celeste z-0 hover:animate-pulse'></div>
            </div>

            {/*Web Menú*/}
            <ul className='hidden md:flex animate-smooth_in'>
                <li className='px-6'>Home</li>
                <li className='px-6'>About</li>
                <li className='px-6'>Skills</li>
                <li className='px-6'>Works</li>
                <li className='px-6'>Contact</li>
            </ul>

            {/*Hamburguer menú*/}
            <div className='flex md:hidden z-10 animate-smooth_in' onClick={handleOpen}>
                {isOpen ? <FaTimes className='animate-smooth_in' /> : <FaBars className='animate-smooth_in' />}
            </div>

            {/*Mobile menú*/}
            <ul className={isOpen ? 'absolute md:hidden top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-ligthBlue animate-smooth_in' : 'animate-smooth_out hidden'}>
                <li className='py-4 text-4xl'>Home</li>
                <li className='py-4 text-4xl'>About</li>
                <li className='py-4 text-4xl'>Skills</li>
                <li className='py-4 text-4xl'>Works</li>
                <li className='py-4 text-4xl'>Contact</li>
            </ul>

            {/*Social Icons*/}
        </div>
    )
}

export default NavBar