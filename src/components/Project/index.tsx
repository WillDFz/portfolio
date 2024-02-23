'use client'
import { useState, useEffect } from 'react'
import JsonProjects from '@/json/projects.json'
import Image from 'next/image';
import Link from 'next/link';
import Modal from './../UI/Modal/index';
import Overlay from './../UI/Overlay/index';

const Projects = () => {

    const [openModal, setOpenModal] = useState(false)
    const [url, setUrl] = useState('')
    const [responsive, setResponsive] = useState(false)

    const handleOpenModal = (url: string, responsive: boolean) => {
        setOpenModal(true)
        setUrl(url)
        setResponsive(responsive)
    }

    useEffect(() => {
        if (openModal) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [openModal]);

    return (
        <section id='Projects'>
            <h3 className='text-gradient text-2xl text-center bg-black font-bold my-4'>Projetos</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4  p-3'>
                {JsonProjects.map((project) => (
                    <div key={project.id} className='flex flex-col items-center justify-center bg-black border border-primary rounded mb-5 p-4'>
                        <div className='text-primary text-center mb-2'>
                            {project.name}
                        </div>
                        <div className='w-full text-secondary text-xs mb-2'>
                            {project.description}
                        </div>
                        <div className='w-full text-white text-xs opacity-85 mb-2'>
                            {project.tools}
                        </div>
                        <div className='w-full flex justify-start mb-3'>
                            {project.responsive && (
                                <Image src='/svg/smartphone.svg' width={24} height={24} alt='' />
                            )}
                            <Image src='/svg/screen.svg' width={24} height={24} alt='' />
                        </div>
                        <div className='w-full' >
                            <div className='w-full flex mb-3'>
                                {project.github && (
                                    <Link href={project.github} className='w-full text-black font-bold text-sm text-center opacity-90 hover:opacity-100 bg-secondary border border-secondary rounded py-1 me-3' target="_blank">Github</Link>
                                )}
                                <button onClick={e => handleOpenModal(project.url, project.responsive)} className='w-full text-black font-bold text-sm text-center opacity-90 hover:opacity-100 bg-secondary border border-secondary rounded py-1'>Preview</button>
                            </div>
                            <Link href={project.url} className='w-full block text-black font-bold text-sm text-center opacity-90 hover:opacity-100 bg-secondary border border-secondary rounded py-1' target='_blank'>Visualizar projeto</Link>
                        </div>
                    </div>
                ))}
            </div>
            {openModal &&
                <>
                    <Modal url={url} setOpenModal={setOpenModal} responsive={responsive} />
                    <Overlay/>
                </>
            }
        </section>
    )
}

export default Projects