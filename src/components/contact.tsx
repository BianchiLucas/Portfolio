import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'

{/*Queda hacer el autoscroll del boton */ }

const Contact = () => {

    const scrollToTop = () => {
        const element = document.getElementById('navbar')
        element?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div id='contact' className='w-full h-screen flex flex-col justify-center items-center p-4 snap-center' >
            <form method='POST' action="https://getform.io/f/edf8d9d9-b2bf-49fd-8c68-dd64afb91ce4" className='flex flex-col max-w-2xl w-full '>
                <div className='pb-8'>
                    <p className='text-4xl inline font-bold px-2 border-b-4 border-celeste'>Contact</p>
                    <p className='py-4'>// Submit the form below or contact me on lucasbianchi92@gmail.com</p>
                </div>
                <input className='text-bgwindow p-2 ' type="name" name="name" placeholder='Name' />
                <input className='text-bgwindow my-4 p-2' type="email" name="email" placeholder='Email' />
                <textarea className='text-bgwindow p-2' name="message" rows={10} placeholder="Message" ></textarea>
                <button className='text-white border-2 hover:bg-celeste hover:border-celeste hover:scale-110 px-5 py-3 my-8 mx-auto flex items-center'>Send</button>
            </form>
            <div className='relative h-20 bottom-0 w-full'>
                <div className='absolute -bottom-24 right-8 text-6xl text-grey opacity-80 hover:opacity-100 hover:scale-110'>
                    <button onClick={() => scrollToTop()}>
                        <FaArrowAltCircleUp />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact