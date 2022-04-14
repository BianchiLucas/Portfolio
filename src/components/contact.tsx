import React from 'react'

const Contact = () => {
    return (
        <div id='contact' className='w-full h-screen flex justify-center items-center p-4 snap-center' >
            <form method='POST' action="https://getform.io/f/edf8d9d9-b2bf-49fd-8c68-dd64afb91ce4" className='flex flex-col max-w-2xl w-full '>
                <div className='pb-8'>
                    <p className='text-4xl inline font-bold px-2 border-b-4 border-celeste'>Contact</p>
                    <p className='py-4'>// Submit the form below or contact me on algo@gmail.com</p>
                </div>
                <input className='text-bgwindow p-2 ' type="name" name="name" placeholder='Name' />
                <input className='text-bgwindow my-4 p-2' type="email" name="email" placeholder='Email' />
                <textarea className='text-bgwindow p-2' name="message" rows={10} placeholder="Message" ></textarea>
                <button className='text-white border-2 hover:bg-celeste hover:border-celeste hover:scale-110 px-5 py-3 my-8 mx-auto flex items-center'>Send</button>
            </form>
        </div>
    )
}

export default Contact