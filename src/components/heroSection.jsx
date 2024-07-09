import { Lato, Playfair_Display } from "next/font/google"
import Image from "next/image";
import Line from '../../public/images/Line.svg'

const lato = Lato({subsets: ["latin"], weight: ['400','300','700']})
const playfair = Playfair_Display({subsets: ['latin']})

export default function heroSection(){
    return (
        <>
        <div className="flex flex-col w-full  text-[#FFFFFF] ">
            <div className="shop px-6 pb-[44px] pt-14  sm:h-[471px] flex flex-col  justify-center items-center">
                <div className="flex flex-col items-center gap-4 sm:gap-6 ">
                    <p className={`${playfair.className} text-center text-[20px] sm:text-[32px] font-bold leading-[26px] sm:leading-10`}>Handcrafted Jewelry That Tells Your Unique Story</p>
                    <p className={` sm:text-[18px] text-sm leading-[16px] sm:leading-[21px] lg:w-[694px] px-[38px] flex text-center  font-normal ${lato.className} `}>
                        Explore our exclusive collection of artisanal jewelry, meticulously crafted to add a touch of sophistication to every moment.
                        From elegant necklaces to stunning custom pieces, find the perfect adornment to celebrate your individuality.
                    </p>
                    <button className={`${lato.className} font-bold px-6 py-4 text-center bg-pink rounded-xl`}>Shop now</button>
                </div>
            </div>
            <div className="flex sm:flex-row flex-col w-full">
                <div className="flex w-full">
                    <div className='h-[140px] lg:h-[313px] w-full text-secondary flex flex-col justify-end pl-4 pb-2 lg:pl-[80px] lg:pb-[70px] products'>
                        <h3 className={`${playfair.className} text-xl lg:text-[28px] leadin-[37.32px] font-semibold`}>All products</h3>
                        <p className={`flex ${lato.className} font-medium `}><Image src={Line}/><span>Explore</span></p>
                    </div>
                    <div className='h-[140px] lg:h-[313px] w-full text-secondary flex flex-col justify-end pl-4 pb-2 lg:pl-[80px] lg:pb-[70px] sellers'>
                        <h3 className={`${playfair.className} text-xl lg:text-[28px] leadin-[37.32px] font-semibold`}>Best sellers</h3>
                        <p className={`flex ${lato.className} font-medium `}><Image src={Line}/><span>Explore</span></p>
                    </div>
                </div>
                <div className='h-[140px] lg:h-[313px] sm:w-[50%] w-full text-secondary lg:gap-0 flex flex-col justify-end pl-4 pb-2 lg:pl-[80px] lg:pb-[70px] arrivals'>
                    <h3 className={`${playfair.className} text-xl lg:text-[28px] leadin-[37.32px] font-semibold`}>New arrivals</h3>
                    <p className={`flex ${lato.className} font-medium `}><Image src={Line}/><span>Explore</span></p>
                </div>
            </div>

        </div>
        </>
    )
}