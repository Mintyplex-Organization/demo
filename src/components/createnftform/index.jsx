import React, { Fragment, useEffect, useState } from 'react'
import { FaArrowLeft, FaDiscord } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import Taggs from '../attributeTags';
import { useAccount, useContractWrite, useNetwork, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import { getMarketAddress } from '../../../hooks/selectChain';
import contract from '../../../contracts-connector/evm/addresses.json'
import useDebounce from '../../../hooks/useDebounce';
import { UploadImages } from '@/Utils';
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link';
import Image from 'next/image';



export default function CreateNftForm() {

	const [selectedValue, setSelectedValue] = useState('Sending_to_wallet');
	const [name, setName] = React.useState('')
	const [img, setImg] = React.useState('')
	const [uri, seturi] = useState('')
	const [selectedImage, setSelectedImage] = useState(null);
	const [isLoading, setIsLoading] = useState(false)
	const [number, setNumber] = useState(0)


	function getImg(event) {
		const fileImg = event.target.files[0];

		let URL = window.URL.createObjectURL(fileImg);

	}

	function handleDecrease() {
		if (number > 0) {
			setNumber(number - 1)
		} else {
			setNumber(0)
		}
	}

	function handleIncrease() {
		setNumber(number + 1)
	}

	const handleSelectChange = (e) => {
		setSelectedValue(e.target.value);
	};


	const { address, isConnected } = useAccount()
	const { chain } = useNetwork();

	const dbUri = useDebounce(uri, 10)

	const { config } = usePrepareContractWrite({
		address: getMarketAddress(chain),
		abi: contract.marketAbi,
		functionName: 'createPersonalToken',
		args: [dbUri, 200],
		enabled: Boolean(dbUri)
	})

	const { data: MintTx, write: MintDapp, error: errr } = useContractWrite(config)

	const { data: waittx } = useWaitForTransaction({
		hash: MintTx?.hash,
	})

	const handleMint = async (e) => {
		setIsLoading(true)
		e.preventDefault()

		if (name == '' || Object.keys(img).length < 1) {
			alert('Please fill all compulsory fields')
			return
		}

		const data = await UploadImages(img, name, "image")

		if (!data) {
			alert('Error... Please Try Again Later')
			return
		}

		if (isConnected) {
			seturi(data[2].toString())
			setTimeout(() => {
				MintDapp?.()
			}, 2000);
		} else {
			alert('Not Connected')
		}
	}
	const handleImageChange = (e) => {
		const file = e.target.files
		const fileImg = e.target.files[0]
		
		setSelectedImage(URL.createObjectURL(fileImg));
		console.log(file)
		if (!file[0].type.includes('image')) {
			alert('only svg, jpeg or jpg or image is required')
			return
		}
		setImg(file)
	}

	const handleNameChange = (e) => {
		const text = e.target.value
		console.log(text)
		setName(text)
	}

	return (
		<div className='container'>
			<Link href='/'>
				<div className='flex gap-3 mt-[120px] items-center pointer-cursor'>
					<div className='p-2 border border-white rounded-lg text-white'>
						<FaArrowLeft />
					</div>
					<div className='text-white'>
						<p>Create NFT</p>
					</div>
				</div>
			</Link>
			<div className='w-full bg-bg-dark p-5 mt-[80px] rounded-2xl'>
				<div className="col-span-full flex flex-col md:flex-row gap-[50px] items-center">
					<div className='sm:w-[100%] md:w-[40%]'>
						<label htmlFor="" className="block text-sm font-medium leading-6 text-white">
							NFT Image
						</label>
						<div className="mt-2 h-[300px] flex justify-center rounded-lg border border-white px-6 py-10">
							<div className="text-center justify-center flex flex-col items-center">
								<div className="mt-4 flex text-sm leading-6 text-white">
									<label
										htmlFor="file-upload"
										className="relative cursor-pointer rounded-md font-semibold text-white hover:text-indigo-500 p-[30px]"
									>
										<div className='text-white flex py-[6px] justify-center'>
											<FiDownload size={25} />
										</div>
										<span>Upload a file or drag and drop</span>
										<input id="file-upload" name="file-upload" onChange={handleImageChange} type="file" className="sr-only " />
										<p className="text-xs leading-5 py-[6px] text-white">PNG, JPG, GIF up to 10MB</p>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className='sm:w-[100%] md:w-[40%] h-[300px] flex rounded-[20px] overflow-hidden'>
						{selectedImage && (
							<Image src={selectedImage} alt="Selected Image" className='object-coontain object-scale-center' width={300} height={300} />
						)}
					</div>
				</div>
			</div>
			<div className='w-full bg-bg-dark p-5 my-[50px] rounded-2xl'>
				<div className="w-full">
					<div className="mt-5">
						<form action="POST">
							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
								<div className="sm:col-span-3">
									<label htmlFor="" className="block text-sm font-medium leading-6 mx-2 text-white">
										NFT Name
									</label>
									<div className="mt-2">
										<input
											onChange={handleNameChange}
											type="text"
											placeholder='Enter NFT name'
											name=""
											id=""
											autoComplete="none"
											className="block bg-bg-dark w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-grey px-4 sm:text-sm sm:leading-6"
										/>
										<p className='text-white mt-2 text-[12px]'>Use a unique NFT name</p>
									</div>
								</div>
								<div className="sm:col-span-3">
									<label htmlFor="" className="block text-sm font-medium leading-6 mx-2 text-white">
										Royalty
									</label>
									<div className="mt-2">
										<div className='flex gap-[40px]  w-full'>
											<input
												type="text"
												placeholder='Enter royalty percentage'
												name=""
												id=""
												value={number}
												autoComplete="none"
												className="block bg-bg-dark w-[80%] rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-grey px-4 sm:text-sm sm:leading-6"
											/>
											<div className=' flex gap-[20px] text-white'>
												<div className='py-3 px-5 bg-brand2 rounded-full' onClick={handleIncrease}>+</div>
												<div className='py-3 px-5 bg-brand2 rounded-full' onClick={handleDecrease}>-</div>
											</div>
										</div>
										<p className='text-white mt-2 text-[12px]'>Set your royalty rate</p>
									</div>
								</div>
								<div className="sm:col-span-3">
									<label htmlFor="" className="block text-sm font-medium leading-6 mx-2 text-white">
										Collection Name
									</label>
									<div className="mt-2">
										<input
											type="text"
											placeholder='Enter your collection symbol'
											name=""
											id=""
											autoComplete="none"
											className="block bg-bg-dark w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-grey px-4 sm:text-sm sm:leading-6"
										/>
										<p className='text-white mt-2 text-[12px]'>This collection is where your items will showcased.</p>
									</div>
								</div>
								<div className="sm:col-span-3">
									<label htmlFor="" className="block text-sm font-medium leading-6 mx-2 text-white">
										Description
									</label>
									<div className="mt-2">
										<textarea
											id="about"
											placeholder='Provide a well detailed description of the item.'
											name="about"
											rows={3}
											className="block bg-bg-dark w-full rounded-md border-0 py-2 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-grey px-4 sm:text-sm sm:leading-6"
											defaultValue={''}
										/>
									</div>
								</div>
								<div className="sm:col-span-3">
									<label htmlFor="" className="block text-sm font-medium leading-6 mx-2 text-white">
										External Links
									</label>
									<div className="mt-2">
										<input
											type="text"
											placeholder='https://'
											name=""
											id=""
											autoComplete="none"
											className="block bg-bg-dark w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-grey px-4 sm:text-sm sm:leading-6"
										/>
										<p className='text-white mt-2 text-[12px]'>Add an external link for your item</p>
									</div>
								</div>
								<Taggs />

								<div className="sm:col-span-3">
									<label htmlFor="" className="block text-sm font-medium leading-6 mx-2 text-white">
										NFT Reciever
									</label>
									<div className="mt-2">
										<select
											name="nftReciever"
											id="nftReciever"
											value={selectedValue}
											onChange={handleSelectChange}
											className='block bg-bg-dark w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-grey px-4 sm:text-sm sm:leading-6'
										>
											<option selected value="Sending_to_connected_wallet">Sending to connected wallet</option>
											{/* <option value="Sending_to_another_wallet">Sending to another wallet</option> */}
										</select>
										{/* {selectedValue == 'Sending_to_another_wallet' && (
											<div className="mt-2">
												<input
													type="text"
													placeholder='Enter wallet address'
													name=""
													id=""
													autoComplete="none"
													className="block bg-bg-dark w-full rounded-md border-0 py-3 text-white shadow-sm ring-1 ring-inset ring-white placeholder:text-grey px-4 sm:text-sm sm:leading-6"
												/>
											</div>
										)} */}
										<p className='text-white mt-2 text-[12px]'>By default, the NFT will be sent to your connected wallet. If you wish to send it to someone else, please choose “send to another wallet”</p>
									</div>
								</div>

							</div>
							<div className='mt-10 gap-2 flex flex-col items-center justify-items-center text-center'>
								<button onClick={handleMint} type="submit" className="text-center w-[18rem] h-[40px] flex items-center justify-center rounded-md bg-brand1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand2">
									{isLoading ? (
										<div class="w-6 h-6 rounded-full items-center animate-spin outline-dotted outline-2 border-solid border-t-transparent shadow-md"></div>
									) : ('Create your NFT')}
								</button>
								<p className='text-white text-[12px]'>Cost to Mint: 0.002 ETH</p>
							</div>
						</form>
					</div>
				</div>
			</div>
			{waittx && <MyModal mintData={waittx} />}
		</div>
	)
}


function MyModal({ mintData }) {

	const [isOpen, setIsOpen] = useState(true)
	const { chain } = useNetwork();

	function closeModal() {
		setIsOpen(false)
	}

	useEffect(() => {
		if (mintData != undefined && !isOpen) {
			setIsOpen(true)
		}
	}, [mintData])

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md text-white transform overflow-hidden rounded-lg bg-bg-dark p-4 text-center align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className=" text-center text-lg font-medium leading-6"
									>
										Congratulations
									</Dialog.Title>
									<div className="text-center mt-4">
										<p className="text-sm">
											Your NFT has been minted successfully!
										</p>
										<Link className="text-sm text-brandpink0 " href={`${chain?.blockExplorers?.default.url}/tx/${mintData?.logs[0].transactionHash}`} target='_blank' >Click Here</Link>
									</div>
									<Link href='https://discord.gg/g9y6WsB5Zu'>
										<div className=" flex flex-row items-center gap-[10px] justify-center text-center mt-4 text-brand3">
											<p className="text-sm">
												Drop us a feedback
											</p>
											<FaDiscord size={20} />
										</div>
									</Link>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											Got it, thanks!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

