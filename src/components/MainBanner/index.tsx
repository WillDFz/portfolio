import React from 'react'
import Introduction from '@/json/introduction.json'
const MainBanner = () => {
    return (
        <div className='relative'>
            <img src='/images/banner.jpg' alt='' />

            <div className='absolute bottom-5'>
                <div className='w-3/4 text-xs text-primary text-center bg-black bg-opacity-80 border border-primary rounded-md m-auto p-3'>
                    {Introduction.text}
                </div>
            </div>
        </div>
    )
}

export default MainBanner