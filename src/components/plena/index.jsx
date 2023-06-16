import React, { useState } from 'react'
import PlenaConnect from '@plenaconnect/client';
import QRCodeModal from '@plenaconnect/qrcode-modal'
import { IoIosWallet, IoMdLogOut } from 'react-icons/io';

function PlenaIntegration() {

    const [connector, setConnector] = useState(null);
    const [connected, setConnected] = useState(false);
    const [chainId, setChainId] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [address, setAddress] = useState(null);
    const [result, setResult] = useState(null);


    const connect = async () => {
        const bridge = "https://bridge.plena.finance/";
        const newConnector = new PlenaConnect({
            bridge,
            qrcodeModal: QRCodeModal,
            clientMeta: {
                description: "Connect your dApps",
                url: "https:/plena.finance",
                icons: ["https://plena.finance/files/plena-logo.png"],
                name: "Plena Connect",
            },
        });

        setConnector(newConnector);

        if (!newConnector.connected) {
            await newConnector.createSession();
        }

        subscribeToEvents(newConnector);
    };

    const subscribeToEvents = (connector) => {
        connector.on("session_update", handleSessionUpdate);
        connector.on("connect", handleConnect);
        connector.on("disconnect", handleDisconnect);

        if (connector.connected) {
            const { chainId, accounts } = connector;
            const address = accounts[0];
            setConnected(true);
            setChainId(chainId);
            setAccounts(accounts);
            setAddress(address);
            handleSessionUpdate(accounts, chainId);
            console.log(chain)
        }
    };

    const killSession = async () => {
        if (connector) {
            connector.killSession();
        }
        resetApp();
    };

    const resetApp = async () => {
        setConnector(null);
        setConnected(false);
        setChainId(null);
        setAccounts([]);
        setAddress(null);
    };

    const handleConnect = (error, payload) => {
        if (error) {
            throw error;
        }

        const { chainId, accounts } = payload.params[0];
        const address = accounts[0];
        setConnected(true);
        setChainId(chainId);
        setAccounts(accounts);
        setAddress(address);
        // this.getAccountAssets();
    };

    const handleDisconnect = (error, payload) => {
        if (error) {
            throw error;
        }

        resetApp();
    };

    const handleSessionUpdate = (error, payload) => {
        if (error) {
            throw error;
        }

        const { chainId, accounts } = payload.params[0];
        const address = accounts[0];
        setChainId(chainId);
        setAccounts(accounts);
        setAddress(address);
    };


    return (
        <div className=''>
            {address ? (
                <div className='flex items-center gap-3'>
                    <div
                        className="px-[25px] py-[10px] text-white bg-brand1 hover:drop-shadow-md rounded-[5px] flex items-center gap-2 w-full justify-center"
                    >
                        {address.length > 0 &&
                            `${address.substring(
                                0,
                                3
                            )}...${address.substring(38)}`}
                    </div>
                    <button className='px-[15px] py-[14px] text-white bg-brand1 hover:drop-shadow-md rounded-[5px] flex items-center gap-2 w-full justify-center' onClick={() => killSession()}>
                        <IoMdLogOut/>
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => connect()}
                    className="px-[25px] py-[10px] text-white bg-brand1 hover:drop-shadow-md rounded-[5px] flex items-center gap-2 w-full justify-center hover:bg-brand4"
                >
                    Connect wallet <IoIosWallet />
                </button>
            )}
        </div>
    )
}

export default PlenaIntegration