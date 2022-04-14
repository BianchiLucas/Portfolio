import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import github from '../assets/github.png'

const Skills = () => {
    return (
        <div id='skills' className='w-full h-screen snap-center'>
            <div className='max-w-4xl w-full mx-auto my-6 p-4 flex flex-col justify-center h-full'>
                <div className='my-8'>
                    <p className='my-4 font-bold text-4xl inline border-b-4 border-celeste'>Skills</p>
                    <p className='py-4 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center mx-auto'>
                    <div className='bg-blue3/10 shadow-md shadow-bgwindow rounded-md hover:scale-110 duration-300 hover:shadow-celeste'>
                        <img className='w-20 m-auto py-4' src={html} alt="html" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='bg-blue3/10 shadow-md shadow-bgwindow rounded-md hover:scale-110 duration-300 hover:shadow-celeste'>
                        <img className='w-20 m-auto' src={css} alt="css" />
                        <p className='my-4'>CSS</p>
                    </div >
                    <div className='bg-blue3/10 shadow-md shadow-bgwindow rounded-md hover:scale-110 duration-300 hover:shadow-celeste'>
                        <img className='w-20 m-auto' src={javascript} alt="javascript" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='bg-blue3/10 shadow-md shadow-bgwindow rounded-md hover:scale-110 duration-300 hover:shadow-celeste'>
                        <img className='w-20 m-auto' src={react} alt="react" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='bg-blue3/10 shadow-md shadow-bgwindow rounded-md hover:scale-110 duration-300 hover:shadow-celeste'>
                        <img className='w-20 m-auto' src={github} alt="github" />
                        <p className='my-4'>GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills