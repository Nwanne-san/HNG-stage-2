import Image from 'next/image'
import Logo from '../../public/images/Logo.svg'
import Cart from '../../public/images/cart.svg'
import Link from 'next/link'

export default function Navbar()  {
    return (
        <>
        <div className='w-full bg-white flex justify-between items-center px-8 py-[18px]'>
            <div>
                <Link href='/'>
                    <Image src={Logo} alt='logo' />
                </Link>
            </div>
                <Link href='/cart'><Image src={Cart}/></Link>
        </div>
        </>
    )
}

