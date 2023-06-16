/* eslint-disable jsx-a11y/anchor-is-valid */
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import core1 from "../assets/core1.jpg"
import core2 from "../assets/core2.png"
import core3 from "../assets/core3.png"
import core4 from "../assets/core4.png"
import core5 from "../assets/core5.jpg"
import core6 from "../assets/core6.png"
import core from "../assets/corelogo.png"
import image4 from "../assets/image4.webp"
import { HiLightningBolt } from 'react-icons/hi'
import Link from 'next/link';
import Image from 'next/image';

const TopCollection = () => {

    const [data, setData] = useState(null)

    // const url = 'https://api-v2-mainnet.paras.id/collection-stats?'

    // useEffect(() => {
    //     axios.get(url).then((response) => {
    //         setData(response.data)
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }, [])

    // console.log(data)

    // if (!data) return null

    // -------------------------
    //Search function

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (

        <div className="container my-[50px] flex flex-col gap-[50px]">
            <div className="flex items-center gap-[20px] text-[#fff]">
                <div className='p-[5px] bg-brand2 text-brand3 rounded-[10px] w-[40px] h-[40px] flex  items-center justify-center'>
                    <HiLightningBolt size='20px' />
                </div>
                <h1 className="text-[28px] font-[600]">Trending Collection</h1>
                {/* <input type="search" name="search" placeholder='search' id="" onChange={inputHandler} /> */}
            </div>
            <div className='scrollbar-hide border rounded-[20px] text-white'>
                <table className="text-sm font-[grotesk] text-left w-full">
                    <thead className="text-sm font-bold bg-blue-100 border-b">
                        <tr>
                            <th scope="col" className="px-5 py-5">
                                No.
                            </th>
                            <th scope="col" className="px-5 py-5">
                                Collections
                            </th>
                            <th scope="col" className="px-5 py-5 md:inline-block hidden">
                                Volume
                            </th>
                            <th scope="col" className="px-5 py-5 md:inline-block hidden">
                                Total Supply
                            </th>
                            <th scope="col" className="px-5 py-5">
                                Floor Price
                            </th>
                        </tr>
                    </thead>
                    {/* <tbody className="font-[grotesk]" input={inputText}> */}
                    <tbody className="font-[grotesk]">
                        <tr className="border-b">
                            <th scope="row" className="px-5 py-5 font-medium">1.</th>
                            <td className="px-5 py-5">
                                <Link href='/collection/1'>
                                    <div className="flex items-center gap-2 w-fit m-0">
                                        <Image src={core1} className="rounded md:rounded-lg w-7 md:w-32 lg:w-10" alt="" />
                                        <p>Miidas on Core...</p>
                                    </div>
                                </Link>
                            </td>
                            <td className="px-5 py-7 md:inline-block hidden">
                                <div className='flex gap-2 items-center'>
                                    96
                                    <Image src={core} className="w-[15px]" alt="" />
                                </div>
                            </td>
                            <td className="px-5 py-5 md:inline-block hidden">11447</td>
                            <td className="px-5 py-7">
                                <div className='flex gap-2 items-center'>
                                    0.5
                                    <Image src={core} className="w-[15px]" alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-5 py-5 font-medium">2.</th>
                            <td className="px-5 py-5">
                                <Link href='/collection/1'>
                                    <div className="flex items-center gap-2 w-fit m-0">
                                        <Image src={core3} className="rounded md:rounded-lg w-7 md:w-32 lg:w-10" alt="" />
                                        <p>Blessing NFTs</p>
                                    </div>
                                </Link>
                            </td>
                            <td className="px-5 py-7 md:inline-block hidden">
                                <div className='flex gap-2 items-center'>
                                    41.8
                                    <Image src={core} className="w-[15px]" alt="" />
                                </div>
                            </td>
                            <td className="px-5 py-5 md:inline-block hidden">730</td>
                            <td className="px-5 py-7">
                                <div className='flex gap-2 items-center'>
                                    0.5
                                    <Image src={core} className="w-[15px]" alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-5 py-5 font-medium">3.</th>
                            <td className="px-5 py-5">
                                <Link href='/collection/1'>
                                    <div className="flex items-center gap-2 w-fit m-0">
                                        <Image src={core4} className="rounded md:rounded-lg w-7 md:w-32 lg:w-10" alt="" />
                                        <p>Core Space Man</p>
                                    </div>
                                </Link>
                            </td>
                            <td className="px-5 py-7 md:inline-block hidden">
                                <div className='flex gap-2 items-center'>
                                    4.9
                                    <Image src={core} className="w-[15px]" alt="" />
                                </div>
                            </td>
                            <td className="px-5 py-5 md:inline-block hidden">10</td>
                            <td className="px-5 py-7">
                                <div className='flex gap-2 items-center'>
                                    0.7
                                    <Image src={core} className="w-[15px]" alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-5 py-5 font-medium">4.</th>
                            <td className="px-5 py-5">
                                <Link href='/collection/1'>
                                    <div className="flex items-center gap-2 w-fit m-0">
                                        <Image src={core2} className="rounded md:rounded-lg w-7 md:w-32 lg:w-10" alt="" />
                                        <p>Corepepe</p>
                                    </div>
                                </Link>
                            </td>
                            <td className="px-5 py-7 md:inline-block hidden">
                                <div className='flex gap-2 items-center'>
                                    0.5
                                    <Image src={core} className="w-[15px]" alt="" />
                                </div>
                            </td>
                            <td className="px-5 py-5 md:inline-block hidden">15</td>
                            <td className="px-5 py-7">
                                <div className='flex gap-2 items-center'>
                                    0.5
                                    <Image src={core} className="w-[15px]" alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-5 py-5 font-medium">5.</th>
                            <td className="px-5 py-5">
                                <Link href='/collection/1'>
                                    <div className="flex items-center gap-2 w-fit m-0">
                                        <Image src={core5} className="rounded md:rounded-lg w-7 md:w-32 lg:w-10" alt="" />
                                        <p>Pamiat Merkuria - Azur Lane</p>
                                    </div>
                                </Link>
                            </td>
                            <td className="px-5 py-7 md:inline-block hidden">
                                <div className='flex gap-2 items-center'>
                                    2.1
                                    <Image src={core} className="w-[15px]" alt="" />
                                </div>
                            </td>
                            <td className="px-5 py-5 md:inline-block hidden">14</td>
                            <td className="px-5 py-7">
                                <div className='flex gap-2 items-center'>
                                    0.15
                                    <Image src={core} className="w-[15px]" alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr className="">
                            <th scope="row" className="px-5 py-5 font-medium">6.</th>
                            <td className="px-5 py-5">
                                <Link href='/collection/1'>
                                    <div className="flex items-center gap-2 w-fit m-0">
                                        <Image src={core6} className="rounded md:rounded-lg w-7 md:w-32 lg:w-10" alt="" />
                                        <p>Blockvatar</p>
                                    </div>
                                </Link>
                            </td>
                            <td className="px-5 py-7 md:inline-block hidden">
                                <div className='flex gap-2 items-center'>
                                    0
                                    <Image src={core} className="w-[15px]" alt="" />
                                </div>
                            </td>
                            <td className="px-5 py-5 md:inline-block hidden">110</td>
                            <td className="px-5 py-7">
                                <div className='flex gap-2 items-center'>
                                    0.3
                                    <Image src={core} className="w-[15px]" alt="" />
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className='flex self-center'>
                <Link href='/discover'>
                    <div className='mybtn'>
                        <p >View more collection</p>
                    </div>
                </Link>
            </div>
        </div>


    );
}

export default TopCollection;
