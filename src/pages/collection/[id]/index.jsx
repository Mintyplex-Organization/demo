import ActivitiesList from '@/components/Activities/activitieslist';
import { listData } from '@/components/data/data';
import ItemsList from '@/components/items/ItemsList';
import PageLayout from '@/components/layout';
import core from "@/components/assets/corelogo.png"
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa';

export default function CollectionID() {

    const router = useRouter()
    const { id } = router.query
    const [collection, setCollection] = useState(null);

    useEffect(() => {
        let collection = listData.find((collection) => collection.id === parseInt(id));

        if (collection) {
            setCollection(collection);
        }
    }, [id]);

    return (
        <PageLayout>
            {
                collection ? (
                    <div>
                        <div className='container my-[80px] text-white'>
                            <div className='relative'>
                                <Image src={collection.bg} alt="" className='relative w-full h-[280px] object-cover object-center rounded-[10px]' />
                                <div className='absolute bottom-0 right-0 m-[20px] flex gap-[10px]'>
                                    <FaTwitter size={45} className='p-[15px] bg-bg-dark rounded-full' />
                                    <FaDiscord size={45} className='p-[15px] bg-bg-dark rounded-full' />
                                    <FaTelegram size={45} className='p-[15px] bg-bg-dark rounded-full' />
                                </div>
                            </div>
                            <div className='grid justify-items-center mt-[-100px]'>
                                <Image src={collection.image} alt="" className='rounded-full w-[200px] border-[10px] border-bg-dark z-10' />
                            </div>
                            <div className='grid justify-items-center gap-[20px] mt-[20px]'>
                                <h1 className='text-[32px] font-[600]'>{collection.title}</h1>
                                <p className='max-w-[700px] text-center'>{collection.content}</p>
                                <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
                                    <div className='flex flex-col items-center justify-items-center border-[2px] p-[10px_30px] rounded-[10px]'>
                                        <h1 className='font-[500] text-[20px]'>{collection.total_supply}</h1>
                                        <p className='font-[300] text-[16px]'>Supply</p>
                                    </div>
                                    <div className='flex flex-col items-center justify-items-center border-[2px] p-[10px_30px] rounded-[10px]'>
                                        <div className='flex gap-2 items-center'>
                                            <h1 className='font-[500] text-[20px]'>{collection.floor}</h1>
                                            <Image src={core} className="w-[20px] h-[20px]" alt="" />
                                        </div>
                                        <p className='font-[300] text-[16px]'>Floor Price</p>
                                    </div>
                                    <div className='flex flex-col items-center justify-items-center border-[2px] p-[10px_30px] rounded-[10px]'>
                                        <h1 className='font-[500] text-[20px]'>{collection.listed}</h1>
                                        <p className='font-[300] text-[16px]'>Listed</p>
                                    </div>
                                    <div className='flex flex-col items-center justify-items-center border-[2px] p-[10px_30px] rounded-[10px]'>
                                        <div className='flex gap-2 items-center'>
                                            <h1 className='font-[500] text-[20px]'>234 </h1>
                                            <Image src={core} className="w-[20px] h-[20px]" alt="" />
                                        </div>
                                        <p className='font-[300] text-[16px]'>Trading Vol.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-4 mt-[30px]'>
                                <button className='rounded-[10px] p-[20px] bg-brand1 flex items-center justify-center'>
                                    Items
                                </button>
                                <button className='rounded-[10px] p-[20px] border flex items-center justify-center'>
                                    Activities
                                </button>
                            </div>
                            <div className='mt-[30px]'>
                                <ItemsList />
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </PageLayout>
    )
}
