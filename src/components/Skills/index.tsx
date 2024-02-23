'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Skill from '@/json/skills.json'
import Image from 'next/image';

interface Skill {
    name: string;
    image: string;
}

const Skills = () => {
    return (
        <section id='Skills' className='p-3'>
            <h3 className='text-gradient text-2xl text-center font-bold mb-5'>Ferramentas</h3>
            <Swiper
                spaceBetween={50}
                slidesPerView={2.5}
                className='lg:hidden'
            >
                {Skill.map((skill, index) => (
                    <SwiperSlide key={index} className='flex'>
                        <div className='w-full flex flex-col items-center justify-center border border-ice-blue border-opacity-50 rounded p-2'>
                            <div className='flex h-10'>
                                <Image src={skill.image} width={36} height={36} className='mb-1' alt='' />
                            </div>
                            <div className='text-white text-sm '>{skill.name}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <div className='hidden lg:flex justify-center'>
                    {Skill.map((skill, index) => (
                        <div key={index} className='flex flex-col items-center justify-center bg-black border border-ice-blue border-opacity-50 hover:border-opacity-100 hover:-translate-y-1 rounded me-10 p-3'>
                            <div className='flex h-10'>
                                <Image src={skill.image} width={64} height={64} className='mb-1' alt='' />
                            </div>
                            <div className='text-white text-sm '>{skill.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills