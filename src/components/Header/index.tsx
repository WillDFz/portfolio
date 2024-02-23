'use client'

const Header = () => {
    return (
        <header className='w-full fixed top-0 bg-black shadow-sm shadow-ice-blue z-20 pt-1'>
            <div className='flex items-center justify-center'>
                <img src='/svg/logo.svg' className='h-16' alt='logo'/>
            </div>
        </header>
    )
}

export default Header