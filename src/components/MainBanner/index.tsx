import React from 'react'
import Introduction from '@/json/introduction.json'
import Link from 'next/link'

const MainBanner = () => {
    return (
        <section className='relative mt-24 mb-3'>
            <div className='flex justify-around lg:justify-center mb-3'>
                <div className='flex flex-col py-14 lg:me-10'>
                    <Link href="#Projects" className='bg-secondary opacity-90 hover:opacity-100 rounded font-semibold text-sm mb-2 py-1 px-3'>Projetos</Link>
                    <Link href="#Skills" className='bg-secondary opacity-90 hover:opacity-100 rounded font-semibold text-sm py-1 px-3'>Tecnologias</Link>
                </div>
                <img src='/images/avatar.png' className='w-44 h-44 lg:w-64 lg:h-64 border-4 border-primary rounded-md' alt='' />
            </div>
            <div className='text-white m-auto'>
                <h3 className='text-center'>Will Dourado</h3>
                <h3 className='text-center mb-3'>Desenvolvedor Front-End</h3>
                <div className='w-full flex justify-center mb-4'>
                    <Link href="https://www.linkedin.com/in/william-dourado-143527170/" target="_blank" rel="noopener noreferrer">
                        <img src='/svg/linkedin.svg' className='w-8 h-8 me-3' alt='' />
                    </Link>
                    <Link href="https://github.com/WillDFz" target="_blank" rel="noopener noreferrer">
                        <img src='/svg/github.svg' className='w-8 h-8' alt='' />
                    </Link>
                    
                </div>
            </div>

            <div className=''>
                <div className='w-5/6 lg:w-2/4 bg-black bg-opacity-80 border border-primary rounded-md m-auto p-3'>
                    <div className='text-xs text-primary text-center'>
                        {Introduction.text}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainBanner