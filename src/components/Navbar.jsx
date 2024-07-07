import Image from 'next/image'
import Logo from '../../public/images/Logo.svg'
import Navigation from '../../public/images/Navbar.svg'
import Search from '../../public/images/search.svg'
import User from '../../public/images/user.svg'
import Cart from '../../public/images/cart.svg'
import Link from 'next/link'

export default function Navbar()  {
    return (
        <>
        <div className='w-full bg-white flex justify-between items-center px-8 py-[18px]'>
            <div><Image src={Logo} alt='logo' className=''/></div>
            <div><Image src={Navigation}/></div>
            <div className='flex justify-center gap-[56px] items-center'>
                <span><Image src={Search}/></span>
                <span><Image src={User}/></span>
                <Link href='/cart'><Image src={Cart}/></Link>
            </div>

        </div>
        </>
    )
}

