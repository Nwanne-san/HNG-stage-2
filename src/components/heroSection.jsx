import { Lato, Playfair_Display } from "next/font/google"
import Image from "next/image";
import Line from '../../public/images/Line.svg'

const lato = Lato({subsets: ["latin"], weight: ['400','300','700']})
const playfair = Playfair_Display({subsets: ['latin']})

export default function heroSection(){
    return (
        <>
        <div className="flex flex-col w-full text-[#FFFFFF] ">
            <div className="shop h-[471px] flex flex-col gap-6 justify-center items-center">
                <p className={`${playfair.className} text-[32px] font-bold leading-10`}>Handcrafted Jewelry That Tells Your Unique Story</p>
                <p className={`w-[694px] text-[18px] leading-[21px] flex items-center font-normal ${lato.className} `}>Explore our exclusive collection of artisanal jewelry, meticulously crafted to add a touch of sophistication to every moment. 
                    From elegant necklaces to stunning custom pieces, find the perfect adornment to celebrate your individuality.
                </p>
                <button className={`${lato.className} font-bold px-6 py-4 bg-pink rounded-xl`}>Shop now</button>
            </div>
            <div className="grid grid-cols-3 w-full">
                <div className='h-[313px] text-secondary flex flex-col justify-end pl-[80px] pb-[70px] products'>
                    <h3 className={`${playfair.className} text-[28px] leadin-[37.32px] font-semibold`}>All products</h3>
                    <p className={`flex ${lato.className} font-medium `}><Image src={Line}/><span>Explore</span></p>
                </div>
                <div className='h-[313px] text-secondary flex flex-col justify-end pl-[80px] pb-[70px] sellers'>
                    <h3 className={`${playfair.className} text-[28px] leadin-[37.32px] font-semibold`}>Best sellers</h3>
                    <p className={`flex ${lato.className} font-medium `}><Image src={Line}/><span>Explore</span></p>
                </div>
                <div className='h-[313px] text-secondary flex flex-col justify-end pl-[80px] pb-[70px] arrivals'>
                    <h3 className={`${playfair.className} text-[28px] leadin-[37.32px] font-semibold`}>New arrivals</h3>
                    <p className={`flex ${lato.className} font-medium `}><Image src={Line}/><span>Explore</span></p>
                </div>
            </div>

        </div>
        </>
    )
}