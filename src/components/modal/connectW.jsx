import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Near from '../../assets/images/near.svg'
import Here from '../../assets/images/here.svg'
import MyNear from '../../assets/images/mynear.svg'
import NearFi from '../../assets/images/nearfi.svg'

function ConnectWalletModal() {
    return (
        <div className="p-[20px] rounded-[10px] flex flex-col gap-[20px] w-[360px] bg-bg-dark text-white">
            <div className="flex justify-between items-center">
                <h1>Connect your wallet</h1>
                <MdOutlineCancel size={25} />
            </div>
            <hr />
            <p>You will need to create a Near Wallet to continue or connect your existing Near wallet.</p>
            <div className="flex flex-col gap-[10px]">
                <div className="flex p-[10px] border items-center gap-[20px] rounded-[10px]">
                    <img src={Near} alt='Near wallet logo' />
                    <p>Near Wallet</p>
                </div>
                <div className="flex p-[10px] border items-center gap-[20px] rounded-[10px]">
                    <img src={Here} alt='Logo' />
                    <p>Here Wallet</p>
                </div>
                <div className="flex p-[10px] border items-center gap-[20px] rounded-[10px]">
                    <img src={MyNear} alt='Logo' />
                    <p>MyNear Wallet</p>
                </div> 
                <div className="flex p-[10px] border items-center gap-[20px] rounded-[10px]">
                    <img src={NearFi} alt='Logo' />
                    <p>NearFi Wallet</p>
                </div>
            </div>
        </div>
    );
}

export default ConnectWalletModal;
