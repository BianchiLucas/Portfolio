import React from 'react'
import work1 from '../assets/clouds.jpg'
import work2 from '../assets/wallpaper.jpg'
import work3 from '../assets/terminal.png'
import work4 from '../assets/Captura.png'

const Works = () => {
    return (
        <div id='works' className='w-full md:h-screen snap-center'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-celeste'>Work</p>
                    <p className='py-4'>// Check some of my works</p>
                </div>

                {/*Container*/}
                <div className='grid sm:grid-cols-2  gap-12'>

                   { /*Item 1*/}
                    <div style={{ backgroundImage: `url(${work1})` }} className='shadow-lg shadow-bgwindow group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold -tracking-wider'>
                                Work number one
                            </span>
                            <div className='text-center pt-8'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Item 2*/}
                    <div style={{ backgroundImage: `url(${work2})` }} className='shadow-lg shadow-bgwindow group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold -tracking-wider'>
                                Work number two
                            </span>
                            <div className='text-center pt-8'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    { /*Item 1*/}
                    <div style={{ backgroundImage: `url(${work3})` }} className='shadow-lg shadow-bgwindow group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold -tracking-wider'>
                                Work number three
                            </span>
                            <div className='text-center pt-8'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    { /*Item 1*/}
                    <div style={{ backgroundImage: `url(${work4})` }} className='shadow-lg shadow-bgwindow group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold -tracking-wider'>
                                Work number four
                            </span>
                            <div className='text-center pt-8'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default Works