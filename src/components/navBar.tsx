import React, { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaRegAddressBook } from 'react-icons/fa'
import miniature from '../assets/miniature.png'
import { navBarData } from '../data/navBarData'


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => { setIsOpen(!isOpen) }

    const scrollTo = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='relative w-full h-[80px] flex justify-between items-center px-4 mt-4 text-2xl snap-start'>
            <div className='px-4 relative'>
                <img src={miniature} alt="Logo" className='h-20 z-10' />
                <div className='h-20 w-20 ml-4 absolute top-0 left-0 rounded-full shadow-lg shadow-celeste z-0 hover:animate-pulse'></div>
            </div>

            {/*Web Menú*/}
            <ul className='hidden md:flex animate-smooth_in'>
                {
                    navBarData.map((item, index) => (
                        <li key={index} className='px-4' onClick={() => scrollTo(item.id)}>{item.text}</li>
                    ))
                }
            </ul>

            {/*Hamburguer menú*/}
            <div className='flex md:hidden z-10 animate-smooth_in' onClick={handleOpen}>
                {isOpen ? <FaTimes className='animate-smooth_in' /> : <FaBars className='animate-smooth_in' />}
            </div>

            {/*Mobile menú*/}
            <ul className={isOpen ? 'absolute md:hidden top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-ligthBlue animate-smooth_in' : 'animate-smooth_out hidden'}>
                {
                    navBarData.map((item, index) => (
                        <li key={index} className='py-4 text-4xl' onClick={() => {scrollTo(item.id); handleOpen();}}>{item.text}</li>
                    ))
                }
            </ul>

            {/*Social Icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex items-center justify-center bg-linkedIn ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between w-full items-center ' href="">Linkedin <FaLinkedin /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex items-center justify-center bg-gitHub ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between w-full items-center' href="">GitHub <FaGithub /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex items-center justify-center bg-grey2 ml-[-110px] hover:ml-[-10px] duration-300' >
                        <a className='flex justify-between w-full items-center' href="">Resume <FaRegAddressBook /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar