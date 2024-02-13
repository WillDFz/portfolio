'use client'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import Image from 'next/image';

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='grid grid-cols-3 p-3'>
            <div>
                <Hamburger size={24} color='#EA5091ff' toggled={isOpen} toggle={setOpen} />
            </div>
            <div className='flex items-center justify-center'>
                <div className='text-white text-2xl'>W</div>
            </div>
        </div>
    )
}

export default Header