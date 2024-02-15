import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className='border-t border-primary bg-black pt-1'>
      <div className='w-full text-white text-center p-3'>
        <div className='w-full flex justify-center mb-4'>
          <Link href="https://www.linkedin.com/in/william-dourado-143527170/" target="_blank" rel="noopener noreferrer">
            <img src='/svg/linkedin.svg' className='w-8 h-8 me-3' alt='' />
          </Link>
          <Link href="https://github.com/WillDFz" target="_blank" rel="noopener noreferrer">
            <img src='/svg/github.svg' className='w-8 h-8' alt='' />
          </Link>

        </div>
        <p>Will Dourado <span className='text-secondary'>©2024</span></p>
      </div>
    </div>
  )
}

export default Footer