'use client'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import Image from 'next/image';

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='grid grid-cols-3 bg-black border-b border-primary p-3 mb-5'>
            <div>
                <Hamburger size={24} color='#F80372' toggled={isOpen} toggle={setOpen} />
            </div>
            <div className='flex items-center justify-center'>
                <div className='text-white text-2xl'>Will</div>
            </div>
        </div>
    )
}

export default Header