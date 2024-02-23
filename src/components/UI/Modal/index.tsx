import { useState } from 'react'
import Iframe from 'react-iframe'
import Image from 'next/image';

interface ModalProps {
    url: string
    responsive: boolean
    setOpenModal: (value: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ url, responsive, setOpenModal }) => {

    const [activeTab, setActiveTab] = useState<'mobile' | 'desktop'>('desktop');

    return (
        <div className='w-full h-full left-0 top-0 fixed flex justify-center items-center z-30 py-5'> 
            <div className='h-full relative border border-ice-blue rounded bg-black'>
                <div className='absolute right-2 top-2 flex justify-end px-2 pt-2'>
                    <button onClick={e => setOpenModal(false)}>
                        <Image src='/svg/times.svg' width={24} height={24} alt='' />
                    </button>
                </div>
                <div className='h-full flex'>
                    <div className='w-full p-5'>
                        <div className='flex justify-center mb-2'>
                            <button
                                className={`tab-btn text-secondary border border-secondary rounded opacity-70 ${activeTab === 'mobile' ? 'active' : ''} me-10 px-2 py-1`}
                                onClick={() => setActiveTab('mobile')} disabled={!responsive}
                            >
                                Mobile
                            </button>
                            <button
                                className={`tab-btn text-secondary border border-secondary rounded opacity-70 ${activeTab === 'desktop' ? 'active' : ''} px-2 py-1`}
                                onClick={() => setActiveTab('desktop')} 
                            >
                                Desktop
                            </button>
                        </div>
                        <div className='h-full flex justify-center'>
                            {activeTab === 'mobile' && (
                                <Iframe
                                    url={url}
                                    width="375px"
                                    height="95%"
                                    className='border-2 border-secondary rounded p-2'
                                />
                            )}
                            {activeTab === 'desktop' && (
                                <Iframe
                                    url={url}
                                    width="1300px"
                                    height="90%"
                                    className='border-2 border-secondary rounded p-2'
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal