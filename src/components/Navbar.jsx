import Image from 'next/image'
import Logo from '../../public/images/Logo.svg'
import Cart from '../../public/images/cart.svg'
import Link from 'next/link'
import MobileCart from '../../public/images/mobile-cart.svg'
import MobileLogo from '../../public/images/mobile-logo.svg'

export default function Navbar()  {
    return (
        <>
        <div className='w-full bg-white flex justify-between items-center p-4 sm:px-8 sm:py-[18px]'>
            <div>
                <Link href='/'>
                    <Image src={Logo} alt='logo' className='hidden sm:block' />
                    <Image src={MobileLogo} alt='logo' className='sm:hidden block' />
                </Link>
            </div>
                <Link href='/cart'>
                    <Image src={Cart} className='hidden sm:block'/>
                    <Image src={MobileCart} className='sm:hidden block'/>
                </Link>
        </div>
        </>
    )
}

