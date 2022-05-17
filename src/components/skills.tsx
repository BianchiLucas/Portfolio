import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import typescript from '../assets/Typescript.png'
import nextjs from '../assets/nextjs.png'
import tailwdindcss from '../assets/tailwind.png'

const Skills = () => {
    return (
        <div id='skills' className='w-full h-screen snap-center mb-12'>
            <div className='max-w-7xl w-full mx-auto my-6 p-4 flex flex-col justify-center h-full'>
                <div className='my-8'>
                    <p className='my-4 font-bold text-4xl inline border-b-4 border-celeste'>Skills</p>
                    <p className='py-4 text-lg'>&gt;_  These are the technologies I've worked whit</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mx-auto'>
                    <div className='bg-blue3/05 shadow-md shadow-bgwindow rounded-md hover:scale-110 duration-300 hover:shadow-celeste'>
                        <img className='w-20 m-auto py-4' src={react} alt="react" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='bg-blue3/05 shadow-md shadow-bgwindow rounded-md hover:scale-110 duration-300 hover:shadow-celeste'>
                        <img className='w-20 m-auto py-4' src={nextjs} alt="nextjs" />
                        <p className='my-4'>Next.js</p>
                    </div>
                    <div className='bg-blue3/05 shadow-md shadow-bgwindow rounded-md hover:scale-110 duration-300 hover:shadow-celeste'>
                        <img className='w-20 m-auto py-4' src={javascript} alt="javascript" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='bg-blue3/05 shadow-md shadow-bgwindow rounded-md hover:scale-110 duration-300 hover:shadow-celeste'>
                        <img className='w-20 m-auto py-4' src={typescript} alt="typescript" />
                        <p className='my-4'>Typescript</p>
                    </div>
                    <div className='bg-blue3/05 shadow-md shadow-bgwindow rounded-md hover:scale-110 duration-300 hover:shadow-celeste'>
                        <img className='w-20 m-auto py-4' src={html} alt="html" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='bg-blue3/05 shadow-md shadow-bgwindow rounded-md hover:scale-110 duration-300 hover:shadow-celeste'>
                        <img className='w-20 m-auto py-4' src={css} alt="css" />
                        <p className='my-4'>CSS</p>
                    </div >
                    <div className='bg-blue3/05 shadow-md shadow-bgwindow rounded-md hover:scale-110 duration-300 hover:shadow-celeste'>
                        <img className='w-20 m-auto py-4' src={github} alt="github" />
                        <p className='my-4'>GitHub</p>
                    </div>
                    <div className='bg-blue3/05 shadow-md shadow-bgwindow rounded-md hover:scale-110 duration-300 hover:shadow-celeste'>
                        <img className='w-20 m-auto py-4' src={tailwdindcss} alt="taiwindcss" />
                        <p className='my-4'>Tailwindcss</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills