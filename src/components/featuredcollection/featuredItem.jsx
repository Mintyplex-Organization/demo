import React from "react";
import { FaDiscord } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


function FeaturedItems({ collection }) {

  const router = useRouter()
  const id = router.query

  return (
    <div className="flex gap-[10px] flex-col justify-center p-[10px] w-[320px] border-[0.1px] border-[#757575] rounded-[10px] text-[#fff]">
      <Image src={collection.image} alt="" className="h-[200px] min-w-[260px] rounded-[5px] object-top object-cover m-0" />
      <div className="flex items-center justify-between font-[700] text-[18px]">
        {collection.title}
      </div>
      <div className="flex items-center justify-between font-[400] text-[14px]">
        {collection.content.substring(0, 55)}
      </div>
      <div className="flex items-center gap-[15px] justify-start">
        <div className="flex flex-col gap-[3px]">
          <p>Floor price</p>
          <div className="flex items-center gap-[5px] font-[500] text-[18px]">
            <FaDiscord />
            49
          </div>
        </div>
        <div className="flex flex-col gap-[3px]">
          <p>Volume</p>
          <div className="flex items-center gap-[5px] font-[500] text-[18px]">
            <FaDiscord />
            49
          </div>
        </div>
      </div>
      <Link href={`/collection/${collection.id}`}>
        <div className="p-[10px] text-center font-[600] bg-brand1  rounded-[10px] hover:bg-brand4" >
          View collection
        </div>
      </Link>
    </div>
  );
}

export default FeaturedItems;
