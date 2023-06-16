import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaHeart, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../assets/logo.svg";


const navigation = [
  { twitter: 'https://twitter.com/mintyplex', discord: 'https://discord.gg/g9y6WsB5Zu', linkedin: 'https://linkedin.com/company/mintyplex' },
]

function Footer() {

  return (
    <div className="pb-[10px]">
      <div className="container my-[50px]">
        <div className="flex flex-col text-white rounded-[20px] gap-[20px] items-center border border-[#757575] py-[50px]">
          <Link href="https://dynastypad.com/" className="flex items-center">
            <Image src={Logo} className="w-10 mr-3" alt="Mintyplex Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MINTYPLEX</span>
          </Link>
          <div>
            <p className="m-0 text-center text-[16px] font-[400] max-w-[300px] ">The best aggregator and go-to platform for all Core NFTs.</p>
          </div>
          <div>
            <p className="flex items-center gap-[5px]">Built with <FaHeart color="red" /> by <Link href='https://mintyplex.com' target='_blank' className="text-brand4">Mintyplex</Link></p>
          </div>
          {navigation.map((item) => (
            <div className='flex gap-4 justify-center items-center' key={item.twitter}>
              <Link href={item.twitter} target='_blank'><FaTwitter className="p-3 border border-white text-white rounded-full hover:bg-white hover:text-brand4" size={45} /></Link>
              <Link href={item.discord} target='_blank'><FaDiscord className="p-3 border border-white text-white rounded-full hover:bg-white hover:text-brand4" size={45} /></Link>
              <Link href={item.linkedin} target='_blank'><FaLinkedin className="p-3 border border-white text-white rounded-full hover:bg-white hover:text-brand4" size={45} /></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
