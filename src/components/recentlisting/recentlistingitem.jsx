import Image from "next/image";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import Near from '../assets/near.svg'
import Link from "next/link";


function ListItem({ item }) {


  return (
    <div className="flex gap-[10px] flex-col justify-center w-[320px] p-[10px] bg-[#1C1C1C] rounded-[10px] text-[#fff]">
      <Image src={item.image} alt="" className="h-[200px] min-w-[260px] rounded-[5px] object-top object-cover" />
      <div className="flex items-center justify-between font-[700] text-[18px]">
        {item.title}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[3px]">
          <p>Last price</p>
          <div className="flex items-center gap-[5px] font-[500] text-[18px]">
            <Image src={Near} alt='Near wallet logo' width={20} />
            {item.floor}
          </div>
        </div>
        <div className="flex flex-col gap-[3px]">
          <p>Current price</p>
          <div className="flex items-center gap-[5px] font-[500] text-[18px]">
            <Image src={Near} alt='Near wallet logo' width={20} />
            {item.floor}
          </div>
        </div>
        <div className="flex flex-col gap-[3px]">
          <p>Number</p>
          <p className="font-[600]">#2312</p>
        </div>
      </div>
      <Link href={`/item/${item.id}`}>
        <div className="p-[10px] text-center font-[600] bg-brand1 rounded-[10px] hover:bg-brand4 ">
          Buy now
        </div>
      </Link>
    </div>


  );
}

export default ListItem;
