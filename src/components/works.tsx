import work1 from '../assets/GreatCrusade.png'
import work2 from '../assets/Wear.png'
import work3 from '../assets/Pagura.png'
import work4 from '../assets/Code.png'
import work5 from '../assets/NextjsBlog.png'
import work6 from '../assets/JobsAPI.png'

const Works = () => {
    return (
        <div id='works' className='w-full md:h-screen snap-center'>
            <div className='max-w-screen-2xl mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-celeste'>Work</p>
                    <p className='py-4'>&gt;_  Check some of my works</p>
                </div>

                {/*Container*/}
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-20'>

                    { /*Item 1*/}
                    <div style={{ backgroundImage: `url(${work1})` }} className='shadow-lg shadow-bgwindow group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold -tracking-wider '>
                                Full responsive website using Styled Components
                            </span>
                            <div className='text-center pt-8'>
                                <a href="https://join-the-great-crusade.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/BianchiLucas/responsive-website-proyect">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    { /*Item 2*/}
                    <div style={{ backgroundImage: `url(${work5})` }} className='shadow-lg shadow-bgwindow group container rounded-md flex justify-center items-center mx-auto content-div text-center'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold -tracking-wider '>
                                Next.js Blog using GraphQL, GraphCMS and Tailwindcss
                            </span>
                            <div className='text-center pt-8'>
                                <a href="https://coffeeblog-nextjs-graphcms-tailwindcss.vercel.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/BianchiLucas/Blog-NextJs-Graphql-Tailwindcss">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*Item 3*/}
                    <div style={{ backgroundImage: `url(${work2})` }} className='shadow-lg shadow-bgwindow group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold -tracking-wider'>
                                Interactive weather web app
                            </span>
                            <div className='text-center pt-8'>
                                <a href="https://whattowear.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/BianchiLucas/weather_app-wear">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    { /*Item 4*/}
                    <div style={{ backgroundImage: `url(${work3})` }} className='shadow-lg shadow-bgwindow group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold -tracking-wider'>
                                Website in colaboration using Tailwindcss
                            </span>
                            <div className='text-center pt-8'>
                                <a href="https://pagura.com.ar/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Demo</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    { /*Item 5*/}
                    <div style={{ backgroundImage: `url(${work6})` }} className='shadow-lg shadow-bgwindow group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold -tracking-wider'>
                                API in NodeJs, Express and MongoDB
                            </span>
                            <div className='text-center pt-8'>
                                <a href="https://jobs-api-nodejs-express-deploy.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/BianchiLucas/Jobs-API-NodeJs">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    { /*Item 6*/}
                    <div style={{ backgroundImage: `url(${work4})` }} className='shadow-lg shadow-bgwindow group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold -tracking-wider'>
                                Check te code of this portfolio!
                            </span>
                            <div className='text-center pt-8'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-bgwindow font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/BianchiLucas/Portfolio">
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