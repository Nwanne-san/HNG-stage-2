import Image from 'next/image'
import Logo from '../../public/images/Logo.svg'
import Cart from '../../public/images/cart.svg'
import Link from 'next/link'
import MobileCart from '../../public/images/mobile-cart.svg'
import MobileLogo from '../../public/images/mobile-logo.svg'
import { useCart } from '@/cartContext';
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ['400', '300', '700'] });

export default function Navbar()  {
    const { cartItems } = useCart();
    return (
        <>
        <div className='w-full bg-white flex justify-between items-center p-4 sm:px-8 sm:py-[18px]'>
            <div>
                <Link href='/'>
                    <Image src={Logo} alt='logo' className='hidden sm:block' />
                    <Image src={MobileLogo} alt='logo' className='sm:hidden block' />
                </Link>
            </div>
            <div className="relative">
          <Link href='/cart'>
            <Image src={Cart} className="w-10 h-10 hidden sm:block"/>
            <Image src={MobileCart} className="sm:hidden block"/>
            <span className={`${lato.className} absolute top-[-2px] sm:top-[-4px] right-[-8px] sm:right-[-12px] flex justify-center text-[10px] sm:text-base items-center px-[6px] py-[2px] sm:px-[8.5px] sm:py-[1.5px] rounded-xl text-neutral bg-secondary `}>{cartItems.length}</span>
          </Link>
        </div>
        </div>
        </>
    )
}

