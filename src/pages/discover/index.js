import TopCollection from '@/components/Topcollection'
import PageLayout from '@/components/layout'
import React from 'react'

function DiscoverPage() {
    return (
        <PageLayout>
            <div className="container mt-[100px] mb-[80px] flex flex-col gap-[50px]">
                <div className="flex items-center justify-center gap-[20px] text-[#fff]">
                    <h1 className="md:text-[58px] text-[32px] font-[700] max-w-[750px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 custom">Trending Collection</h1>
                </div>
                <div className='flex items-center justify-between flex-wrap gap-4'>
                    <div className="flex items-center gap-[20px] text-[#fff]">
                        <div className='p-[10px] bg-brand11 text-brand3 rounded-[10px] w-auto gap-[10px] text-white flex items-center justify-center'>
                            <div className='px-[10px] py-[5px] rounded-md bg-brand3'>
                                <p>New</p>
                            </div>
                            <div className='px-[10px] py-[5px] rounded-md '>
                                <p>Trending</p>
                            </div>
                            <div className='px-[10px] py-[5px] rounded-md'>
                                <p>Featured</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px] text-[#fff]">
                        <div className='p-[10px] bg-brand11 text-brand3 rounded-[10px] w-auto gap-[10px] text-white flex items-center justify-center'>
                            <div className='px-[10px] py-[5px] rounded-md bg-brand3'>
                                <p>All</p>
                            </div>
                            <div className='px-[10px] py-[5px] rounded-md '>
                                <p>1D</p>
                            </div>
                            <div className='px-[10px] py-[5px] rounded-md'>
                                <p>2D</p>
                            </div>
                            <div className='px-[10px] py-[5px] rounded-md'>
                                <p>30D</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TopCollection />
        </PageLayout>
    )
}

export default DiscoverPage