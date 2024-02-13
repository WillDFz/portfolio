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
            <h3 className='text-secondary text-xl text-center my-4'>Ferramentas</h3>
            <Swiper
                spaceBetween={50}
                slidesPerView={3.75}
               
            >
                {Skill.map((skill, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col items-center justify-center'>
                            <Image src={skill.image} width={36} height={36} className='mb-1' alt='' />
                            <div className='text-white text-sm'>{skill.name}</div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default Skills