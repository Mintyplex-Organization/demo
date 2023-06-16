import React from "react";
import ListItem from "./recentlistingitem";
import { listData } from "../data/data";
import { RxDashboard } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";



function RecentListing() {


  return (
    <div className="container my-[50px] flex flex-col gap-[50px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[20px] text-[#fff]">
          <div className='p-[5px] bg-brand5 text-brand6 rounded-[10px] w-[40px] h-[40px] flex items-center justify-center'>
            <RxDashboard size='20px' />
          </div>
          <h1 className="text-[28px] font-[600]">Recent Listings</h1>
        </div>
        <Link href='/'>
          <div className="text-[#757575] hover:text-[#fff]">
            <FaArrowRight size='20px' />
          </div>
        </Link>
      </div>

      <div className="px-[10px] md:px-[0px]">
        <div className="w-full flex align-items-center">
          <div className="w-full justify-between flex gap-[20px] flex-cols-4 flex-wrap">
            {listData.map((item) => (
              <ListItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentListing;