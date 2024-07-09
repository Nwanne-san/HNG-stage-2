import Profile from '../../public/images/Woman smiling.svg';
import Comment from '../../public/images/comma.svg';
import Comm from '../../public/images/comma-mobile.svg';
import { Lato, Playfair_Display } from "next/font/google";
import Image from 'next/image';

const lato = Lato({subsets: ["latin"], weight: ['400']})
const playfair = Playfair_Display({subsets: ['latin']})
export default function Reviews(){
    return (
        <>
        <div className='flex flex-row justify-center sm:gap-20 lg:gap-[161px] sm:px-4 lg:px-0 bg-[#FFFFFF] w-full lg:rounded-3xl mb-16 mx-8  '>
            <div className='flex justify-center lg:w-auto w-full '>
                <Image src={Profile} className=''/>
            </div>
            <div className='flex flex-col max-w-[400px] justify-center sm:w-auto w-full items-center gap-2 sm:gap-6'>
                <Image src={Comment} className='hidden sm:block'/>
                <Image src={Comm} className='block sm:hidden'/>
                <p className={`${lato.className} sm:${playfair.className} w-full sm:text-base text-sm text-center`}>Beauty is the best at what she does.
                     Quality delivery? Check! Exceeding expectation? 
                     Check!! Timely delivery? Check!!!
                </p>
                <div>
                    <p className={`${lato.className} text-pink text-lg`}>Janet Owo</p>
                    <p className={`${lato.className} text-pink text-sm text-center`}>Rivers, NG</p>
                </div>

            </div>
        </div>
        </>
    )
}