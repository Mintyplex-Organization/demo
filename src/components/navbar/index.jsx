import React, { useEffect, useState } from "react";
import { FaBars, FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Logo from "@/components/assets/logo.svg";
import UAuth from "@uauth/js";
import { IoIosWallet } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import PlenaIntegration from "../plena";





function Navbar() {
  // Local storage

  useEffect(() => {
    if (uauth != undefined && connectedAddress != undefined) {
      try {
        uauth.user()
          .then((user) => {
            setConnectedAddress(user.sub)
          })
          .catch((e) => {
            console.log(e);
          })
      } catch (err) {
        console.log(err)
      }
    }
  })

  // Connect wallet function

  const [connectedAddress, setConnectedAddress] = useState('');

  // UAth login function is set here

  const uauth = new UAuth({
    clientID: "775190c2-7f25-4846-baca-051fef285b6a",
    redirectUri: "https://www.demo.mintyplex.com",
    scope: "openid wallet email profile:optional social:optional"
  });

  // Logout
  const logout = async () => {
    await uauth.logout();

    console.log("Logged out with Unstoppable");

    setConnectedAddress("");
  };

  // Sign in Modal
  const login = async () => {
    try {
      const authorization = await uauth.loginWithPopup();
      const domainName = authorization.idToken.sub;
      // const walletAddress = authorization.idToken.wallet_address;

      console.log("Logged in with Unstoppable");

      setConnectedAddress(domainName);
    } catch (error) {
      console.error(error);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center w-full fixed top-0 left-0 buttom-0 bg-bg-dark/20 h-[70px] backdrop-blur-[10px] z-40">
      <div className="transition-0.35s flex flex-col lg:flex-row items-center container justify-between lg:p-[15px_10px] lg:space-x-20 relative text-white">
        <div className="w-full lg:w-fit flex items-center justify-between lg:justify-between p-[15px_10px] lg:p-0">
          <Link href="/">
            <Image src={Logo} alt="logo" className="w-10 h-10" />
          </Link>
          {/* <div className="lg:hidden block">
            {connectedAddress ? (
              <button
                onClick={logout}
                className="px-[25px] py-[10px] text-white bg-brand1 hover:drop-shadow-md rounded-full flex items-center gap-2"
              >
                {connectedAddress.length > 0 &&
                  `${connectedAddress.substring(
                    0,
                    5
                  )}...${connectedAddress.substring(12)}`}
              </button>
            ) : (
              <button
                onClick={login}
                className="px-[25px] py-[10px] text-white bg-brand1 hover:drop-shadow-md rounded-full flex items-center gap-2 hover:bg-brand4"
              >
                Connect wallet <IoIosWallet />
              </button>
            )}
          </div>
          <form className="relative w-[250px] bg-none lg:hidden">
            <button className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-cursor" type="submit"><FaSearch /></button>
            <input type="search" id="search" className="bg-bg-dark/20 border rounded-full block w-full pl-[3em] p-2.5" placeholder="Search for nft collection" required />
          </form> */}
          <div className="flex gap-[40px] items-center">
            <div className="hidden">
              <FaShoppingCart size={20} />
            </div>
            {isOpen ? (
              <FaTimes
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-brand1 text-[24px]"
              />
            ) : (
              <FaBars
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-brand1 text-[24px]"
              />
            )}
          </div>
        </div>


        <div className='hidden md:flex items-center space-x-[30px]'>
          <div>
            <Link href='/discover' className='font-[500] text-[16px]'>Discover</Link>
          </div>
          <form className="relative w-[250px] bg-none">
            <button className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-cursor" type="submit"><FaSearch /></button>
            <input type="search" id="search" className="bg-bg-dark/20 border rounded-full block w-full pl-[3em] p-2.5" placeholder="Search for nft collection" required />
          </form>
          <div>
            <Link href='/create' className='font-[500] text-[16px] '>Create</Link>
          </div>
        </div>


        <div className={`${isOpen ? 'left-0' : 'left-[-100%]'} fixed bg-bg-dark top-[100%] lg:hidden h-screen flex flex-col space-y-[30px] z-30 w-full p-[20px] transition-all`}>
          <div className="border rounded-[10px] p-4 flex flex-col gap-[20px]">
            <div className='flex flex-col space-y-[30px] items-left'>
              <div>
                <Link href='/discover' className='font-[500] text-[18px]'>Discover</Link>
              </div>
              <div>
                <Link href='/create' className='font-[500] text-[18px]'>Create</Link>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 force'>

              <ConnectButton />
              {/* <PlenaIntegration /> */}
            </div>
          </div>
        </div>

        <div className='hidden lg:flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6 force'>
          <div>
            <FaShoppingCart size={20} />
          </div>

          <ConnectButton />
          {/* <PlenaIntegration /> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

