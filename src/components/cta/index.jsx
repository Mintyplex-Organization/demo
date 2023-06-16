import Link from 'next/link'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'


const navigation = [
    { twitter: 'https://twitter.com/', facebook: 'https://facebook.com/', linkedin: 'https://linkedin.com/' },
]
export default function CTA() {
    return (
        <div className="container my-[50px]">
            <div className="bg-brand9 text-white rounded-[20px] flex flex-col items-center md:px-16 px-[20px] py-[50px] gap-[10px]">
                <h2 className="text-[20px] md:text-[32px] font-[600] text-center text-gray-900 max-w-[750px] m-0">
                    <span>We are exploring ways to make trading Core NFTs more fun and seamless for you, and we are open to your suggestions.</span>
                </h2>

                {navigation.map((item) => (
                    <div className='flex mt-5 gap-4 justify-center items-center' key={item.twitter}>
                        <Link href={item.twitter} target='_blank'><FaTwitter className="p-3 border border-white text-white rounded-full hover:bg-white hover:text-brand4" size={45} /></Link>
                        <Link href={item.facebook} target='_blank'><FaFacebook className="p-3 border border-white text-white rounded-full hover:bg-white hover:text-brand4" size={45} /></Link>
                        <Link href={item.linkedin} target='_blank'><FaLinkedin className="p-3 border border-white text-white rounded-full hover:bg-white hover:text-brand4" size={45} /></Link>
                    </div>
                ))}
                <div className="mt-4 flex justify-center">

                    <div className="inline-flex rounded-md shadow">

                        <a href="#" className="py-[10px] px-[20px] text-center font-[600] bg-brand1 rounded-full hover:bg-brand4 ">
                            Request a Feature
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}