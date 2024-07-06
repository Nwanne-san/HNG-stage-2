import Profile from '../../public/images/Woman smiling.svg';
import Comment from '../../public/images/comma.svg';
import { Lato, Playfair_Display } from "next/font/google";
import Image from 'next/image';

const lato = Lato({subsets: ["latin"], weight: ['400']})
const playfair = Playfair_Display({subsets: ['latin']})
export default function Reviews(){
    return (
        <>
        <div className='flex flex-row justify-center gap-[161px] bg-[#FFFFFF] w-full rounded-3xl mb-16 mx-8  '>
            <div className='flex justify-end'>
                <Image src={Profile}/>
            </div>
            <div className='flex flex-col max-w-[400px] justify-center items-center gap-6'>
                <Image src={Comment}/>
                <p className={`${playfair.className}`}>Beauty is the best at what she does.
                     Quality delivery? Check! Exceeding expectation? 
                     Check!! Timely delivery? Check!!!
                </p>
                <div>
                    <p className={`${lato.className} text-pink `}>Janet Owo</p>
                    <p className={`${lato.className} text-pink `}>Rivers, NG</p>
                </div>

            </div>
        </div>
        </>
    )
}