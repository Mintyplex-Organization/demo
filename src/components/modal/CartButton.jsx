import React from "react";
import { IoIosWallet } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import Image1 from '../../assets/images/image1.jpg'
import Image from "next/image";

function CartButton() {
  return (
    <div className="p-[20px] rounded-[10px] flex flex-col gap-[20px] w-[400px] border bg-bg-dark text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <h1 className="text-[20px]">My cart</h1>
          <p className="p-[5px_10px] m-0 rounded-[5px] bg-brand1">4</p>
        </div>
        <div className="flex gap-5">
          <h1>Clear</h1>
          <MdOutlineCancel size={25} />
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-[20px]">
          <Image src={Image1} alt="" width={100} className='rounded-[10px]' />
          <div>
            <h1 className="text-[14px] font-[700]">Bored Ape Yatch #4567</h1>
            <h2 className="text-[12px] font-[500]">Bored Ape Yatch 1</h2>
          </div>
          <div>
            <p className="text-[14px] font-[700]">23 NEAR</p>
            <span className="text-[12px] font-[500]">$34</span>
          </div>
        </div>
        <div className="flex items-center gap-[20px]">
          <Image src={Image1} alt="" width={100} className='rounded-[10px]' />
          <div>
            <h1 className="text-[14px] font-[700]">Bored Ape Yatch #4567</h1>
            <h2 className="text-[12px] font-[500]">Bored Ape Yatch 1</h2>
          </div>
          <div>
            <p className="text-[14px] font-[700]">23 NEAR</p>
            <span className="text-[12px] font-[500]">$34</span>
          </div>
        </div>
        <div className="flex items-center gap-[20px]">
          <Image src={Image1} alt="" width={100} className='rounded-[10px]' />
          <div>
            <h1 className="text-[14px] font-[700]">Bored Ape Yatch #4567</h1>
            <h2 className="text-[12px] font-[500]">Bored Ape Yatch 1</h2>
          </div>
          <div>
            <p className="text-[14px] font-[700]">23 NEAR</p>
            <span className="text-[12px] font-[500]">$34</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-start justify-between">
        <h1 className="text-[14px] font-[700]">Total Value</h1>
        <div className="flex flex-col justify-end">
          <p className="text-[14px] font-[700]">92 NEAR</p>
          <span className="text-[12px] font-[500]">$234</span>
        </div>
      </div>
      <button
        className="px-[25px] py-[10px] text-white bg-brand1 hover:drop-shadow-md rounded-[5px] flex justify-center items-center gap-2"
      >
        Connect wallet <IoIosWallet />
      </button>
    </div>
  );
}

export default CartButton;
