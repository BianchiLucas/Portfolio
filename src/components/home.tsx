import React from 'react'
import clouds from '../assets/clouds.jpg'
import wallpaper from '../assets/wallpaper.jpg'
import terminal from '../assets/terminal.png'
import captura from '../assets/Captura.png'

const Home = () => {
    return (
        <div id='home'>
            <div className='container w-full h-full grid grid-cols-auto lg:grid-cols-2 m-auto p-8 gap-14 items-center justify-center '>
                <div className='columns-1 sm:columns-2 snap-center '>

                    <img alt='foto1' src={clouds} className='rounded-lg m-3 shadow-lg shadow-bgwindow' />
                    <img alt='foto2' src={wallpaper} className='rounded-lg m-3 shadow-lg shadow-bgwindow' />
                    <img alt='foto3' src={terminal} className='rounded-lg m-3 shadow-lg shadow-bgwindow' />
                    <img alt='foto4' src={captura} className='rounded-lg m-3 shadow-lg shadow-bgwindow' />

                </div>
                <div className='h-fit bg-bgwindow/75 rounded-md border-grey2 border-2 shadow-lg shadow-grey2 hover:scale-105 duration-500 hover:shadow-celeste snap-center'>
                    <div className='hidden sm:flex w-full h-6 top-0 border-t-0 border-x-0 border-b-grey2 border-2 p-0 m-0'></div>
                    <div className='w-full h-full p-4 '>
                        <div className=' w-full tracking-widest leading-relaxed p-2 text-xs sm:text-base md:p-4 md:text-lg lg:text-lg lg:traking-[0.15em] lg:leading-loose xl:text-xl'>

                            <p >&#123;</p>
                            <p className='pl-10'>"name": </p>
                            <p className='pl-32'>"Lucas Gabriel Bianchi",</p>
                            <p className='pl-10'>"description": </p>
                            <p className='pl-32'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos ducimus asperiores error! Sapiente omnis nulla ",</p>
                            <p className='pl-10'>"academic": &#123;</p>
                            <p className='pl-32'>"secundaria": "Universidade Federal de Santa Catarina"</p>
                            <p className='pl-10'>&#125;</p>
                            <p className='pl-10'>"work": &#123;</p>
                            <p className='pl-32'> "work1": "algo",</p>
                            <p className='pl-32'>"work2": "algo pero no"</p>
                            <p className='pl-10'>&#125;</p>
                            <p className='pl-10'>"contact": &#123;</p>
                            <p className='pl-32'>"email": "algo@algo.com",</p>
                            <p className='pl-32'> "phone": "algo12312313",</p>
                            <p className='pl-32'> "github": "algo.git",</p>
                            <p className='pl-32'>"linkedin": "algo.linkedin"</p>
                            <p className='pl-10'>&#125;</p>
                            <p>&#125;</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home