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
        <div className='p-3'>
            <h3 className='text-gradient text-2xl text-center font-bold mb-5'>Ferramentas</h3>
            <Swiper
                spaceBetween={50}
                slidesPerView={3.75}
            >
                {Skill.map((skill, index) => (
                    <SwiperSlide key={index} className='flex'>
                        <div className='flex flex-col items-center justify-center'>
                            <div className='flex h-10'>
                                <Image src={skill.image} width={36} height={36} className='mb-1' alt='' />
                            </div>
                            <div className='text-white text-sm '>{skill.name}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Skills