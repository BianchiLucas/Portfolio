import { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaRegAddressBook } from 'react-icons/fa'
import { navBarData } from '../data/navBarData'
import logo from '../assets/lb.png'


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => { setIsOpen(!isOpen) }

    const scrollTo = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className='relative w-full h-24 flex justify-between items-center px-4  mb-4 text-2xl snap-start'  id='navbar'>
            <div className='px-4 relative'>
                <img src={logo} alt="Logo" className='h-24 hover:scale-105'/>
                
            </div>

            {/*Web Menú*/}
            <ul className='hidden md:flex animate-smooth_in'>
                {
                    navBarData.map((item, index) => (
                        <li key={index} className='px-4 hover:underline underline-offset-4 decoration-solid decoration-celeste decoration-2 ' onClick={() => scrollTo(item.id)}>{item.text}</li>
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
                        <li key={index} className='py-4 text-4xl' onClick={() => { scrollTo(item.id); handleOpen(); }}>{item.text}</li>
                    ))
                }
            </ul>

            {/*Social Icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex items-center justify-center bg-linkedIn ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between w-full items-center ' href="https://www.linkedin.com/in/bianchilucasgabriel/">Linkedin <FaLinkedin /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex items-center justify-center bg-gitHub ml-[-110px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between w-full items-center' href="https://github.com/BianchiLucas">GitHub <FaGithub /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex items-center justify-center bg-grey2 ml-[-110px] hover:ml-[-10px] duration-300' >
                        <a className='flex justify-between w-full items-center' href="https://drive.google.com/file/d/1cvPlK7wYMxwgA2uFqa6vORaw2KTAiLAt/view?usp=sharing" download>Resume <FaRegAddressBook /></a>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default NavBar