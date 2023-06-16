import React from "react";
import Image from "next/image";
import Link from "next/link";

function Items({ token }) {

  return (
    <div className="border-[1px] rounded-[10px] p-[10px] flex flex-col w-fit gap-[10px]">
      <div className="w-[140px] md:w-[200px] rounded-[10px] overflow-hidden">
        <Image src={token.image} alt="" />
      </div>
      <div className="flex justify-between text-[12px] md:text-[14px]">
        <h1>{token.title} <br /><b>#4534</b></h1>
        <p>Price: <br /> <b>{token.mint_price}</b></p>
      </div>
      <Link href='/'>
      {/* <Link href={`/token/${token.id}`}> */}
        <button className="w-full flex justify-center py-[10px] rounded-[10px] bg-brand1 hover:bg-brand2 text-[12px] md:text-[14px]">Buy now</button>
      </Link>
    </div>
  );
}

export default Items;
