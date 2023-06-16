import { useRouter } from "next/router";
import { useEffect } from 'react'
import PageLayout from "@/components/layout";
import Link from "next/link";


const Custom404 = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2000)
    })

    return (
        <div >
            <PageLayout>
                <div className="row">
                    <div className="col-12 mt-[130px] mb-[60px] flex flex-col gap-[10px] items-center  text-center justify-center ">
                        <h1 className=" md:text-[96px] text-[32px] font-[700] max-w-[750px] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 custom" >Oops!</h1>
                        <p className="text-[20px] font-[300] text-white ">404 - Page not found</p>
                        <p className="text-[14px] font-[300] text-white max-w-[450px]">The page you&lsquo;re looking for might have been removed or it&lsquo;s name changed, you will be redirected shortly.</p>
                        <Link href='/'>
                            <button className="w-fit flex justify-center px-[20px] py-[10px] rounded-[20px] bg-brand1 hover:bg-brand2 text-[12px] md:text-[14px] text-white">Go to Homepage</button>
                        </Link>
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default Custom404;