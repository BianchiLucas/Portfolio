import photo from '../assets/photo1.jpg'


const Home = () => {
    return (
        <div id='home'>
            <div className='container w-full h-full grid grid-cols-auto lg:grid-cols-2 m-auto p-8 gap-14 items-center justify-center '>
                <div className='columns-1 md:columns-auto snap-center '>

                    <img alt='foto1' src={photo} className='rounded-lg m-3 shadow-md shadow-bgwindow hover:shadow-celeste duration-300' />

                </div>
                <div className='h-fit bg-bgwindow/75 rounded-md border-grey2 border-2 shadow-md shadow-bgwindow  duration-500 hover:shadow-celeste snap-center'>
                    <div className='hidden sm:flex w-full h-6 top-0 border-t-0 border-x-0 border-b-grey2 border-2 p-0 m-0'></div>
                    <div className='w-full h-full p-4 '>
                        <div className=' w-full tracking-widest leading-relaxed p-2 text-xs font-mono sm:text-sm md:p-4 md:text-sm lg:text-sm lg:traking-[0.15em] lg:leading-loose xl:text-lg'>

                            <p >[</p>
                            <p className='pl-6'>"name": </p>
                            <p className='pl-32'>"Lucas Gabriel Bianchi",</p>
                            <p className='pl-6'>"description": </p>
                            <p className='pl-32'>"Front-end web developer apprentice; Industrial engineering student ",</p>
                            <p className='pl-6'>"academic": &#123;</p>
                            <p className='pl-32'>"University: U.T.N. Facultad Regional Santa Fe"</p>
                            <p className='pl-32'>"High school: E.E.T. 451 - electromechanical technician"</p>
                            <p className='pl-6'>&#125;</p>
                            <p className='pl-6'>"work": &#123;</p>
                            <p className='pl-32'> "Innovare Software: Front-end web development whit React.js",</p>
                            <p className='pl-32'>"Aguas Santafesinas S.A.: Plant operator, maintenance"</p>
                            <p className='pl-32'>"U.T.E. Proyección Electroluz - JCR: Plant operator, maintenance"</p>
                            <p className='pl-6'>&#125;</p>
                            <p className='pl-6'>"contact": &#123;</p>
                            <p className='pl-32'>"Linkedin: in/bianchilucasgabriel"</p>
                            <p className='pl-32'> "Github: /BianchiLucas",</p>
                            <p className='pl-32'>"Email: lucasbianchi92@gmail.com",</p>
                            <p className='pl-6'>&#125;</p>
                            <p>]</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home