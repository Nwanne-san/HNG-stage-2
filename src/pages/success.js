import Image from "next/image";
import Link from "next/link";
import { Lato, Playfair_Display } from "next/font/google";
import Check from '../../public/images/Checkmark.svg'

const lato = Lato({ subsets: ["latin"], weight: ['400', '300', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'] });


const Success = () => {
    return (
        <>
        <div className="h-screen bg-[#F5F5F5] flex justify-center items-center">
            <div className=" flex flex-col justify-center items-center gap-14 lg:gap-[120px] my-auto ">
                <Image src={Check} className="lg:h-[150px] lg:w-[150px] h-[120px] w-[120px]"/>
                <div className={`${playfair.className} flex flex-col gap-8 lg:gap-14 text-gray items-center justify-center`}>
                    <h1 className="text-xl sm:text-[32px] font-bold leading-[42.66px]">YOUR ORDER IS CONFIRMED!</h1>
                    <p className="text-lg text-[28px] font-semibold leading-[37.32px] text-center">Thank you for shopping with us. <br/>
                    Expect your order by 12th July, 2024.</p>
                </div>
                <button className={`${lato.className} text-2xl font-bold px-[30.5px] py-[21.5px] sm:px-[46.5px] sm:py-[27.5px] rounded-xl bg-pink text-neutral`}>
                    <Link href='/'>CONTINUE SHOPPING</Link>
                </button>
            </div>
        </div>
        </>
    )
}

export default Success