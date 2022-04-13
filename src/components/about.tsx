import React from 'react'
import { useInView } from 'react-intersection-observer'

const About = () => {

    const [ref, inView] = useInView({triggerOnce: true})


    return (
        <div id='about'  className='w-full h-screen box-border snap-center'>
            <div className='flex flex-col items-center justify-center w-full h-full my-6'>
              
                    <div ref={ref} className={`${inView ? 'animate-mR max-w-5xl w-full  grid grid-cols-2 gap-8': 'max-w-5xl w-full  grid grid-cols-2 gap-8'}`} >
                        <div className='sm:text-right pb-8 pl-4 '>
                            <p className='text-4xl font-bold inline border-b-4 border-celeste '>About</p>
                        </div>
                    </div>
                  
                <div className='max-w-5xl w-full  grid sm:grid-cols-2 gap-8 px-4'>

                    <div className={`${inView ? 'sm:text-right text-4xl font-bold animate-mR2': 'sm:text-right text-4xl font-bold'}`}>
                        <p>Hi. Im etc etc Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione</p>
                    </div>

                    <div className={`${inView ? 'animate-mL' : ''}`}>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, cumque.
                            Eum ea totam distinctio officiis, incidunt deserunt autem expedita neque.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About