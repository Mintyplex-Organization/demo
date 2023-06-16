import React, { useEffect, useState } from "react";
import { listData } from "../data/data";
import { RxDashboard } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import FeaturedItems from "./featuredItem";
import Link from "next/link";
import Image from "next/image";


function FeaturedCollection() {

  const [result, setResult] = useState()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': '31d56777-cc83-4ab9-a4c5-82c11dbc143e'
    }
  };

  fetch('https://data-api.nftgo.io/eth/v1/market/rank/collection/12h?by=volume&with_rarity=false&asc=true&offset=0&limit=25', options)
    .then(response => response.json())
    .then(response => setResult(response.collections[4]))
    .catch(err => console.error(err));

    console.log(result);

  return (
    <div className="container my-[50px] flex flex-col gap-[50px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[20px] text-[#fff]">
          <div className='p-[5px] bg-brand7 text-brand8 rounded-[10px] w-[40px] h-[40px] flex items-center justify-center'>
            <RxDashboard size='20px' />
          </div>
          <h1 className="text-[28px] font-[600]">Featured Collections</h1>
        </div>
        <Link href='/'>
          <div className="text-[#757575] hover:text-[#fff]">
            <FaArrowRight size='20px' />
          </div>
        </Link>
      </div>
      <div>
        {/* <Image src={result.logo} alt='' width={200} /> */}
        {result.description}
      </div>

      <div className="">
        <div className="px-[10px] md:px-[0px]">
          <div className="w-full flex align-items-center">
            <div className="w-full justify-between flex gap-[20px] flex-cols-4 flex-wrap ">
              {listData.map((collection) => (
                <FeaturedItems collection={collection} key={collection.id} />
              ))} 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollection;