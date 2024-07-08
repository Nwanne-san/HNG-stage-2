import { Lato, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/images/Logo.svg'
import Cart from '../../public/images/cart.svg'
import Footer from "@/components/Footer";
import Currency from '../../public/images/naira.svg';
import Right from '../../public/images/arrow.svg'
import productItems from "@/data/productItems";


const lato = Lato({ subsets: ["latin"], weight: ['400', '300', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const Checkout = () => {

    const cartItems = productItems.filter((product) => product.id === 2 || product.id === 13);
    const cartItem = [
        {
            id: 2,
            imgSrc: "/images/img2.jpg",
            name: "Rare Stud Earrings",
            price: 3500,
            discount: "25% off",
        },
        {
            id: 13,
            imgSrc: "/images/img13.jpg",
            name: "Custom Gold Necklace",
            price: 3500,
            discount: '25% off'
        },
    ]
    return(
        <>
        <div className='w-full bg-[#F5F5F5] flex justify-end items-center px-8 py-[18px]'>
            
                <div className="relative">
                  <Link href='/cart' >
                    <Image src={Cart} className="w-10 h-10"/>
                    <span className={`${lato.className} absolute top-[-4px] right-[-12px] flex justify-center items-center px-[8.5px] py-[1.5px] rounded-xl text-neutral bg-secondary `}>2</span>
                  </Link>
                </div>
        </div>
        <div className="flex flex-col gap-16 bg-[#F5F5F5]">
            <div className="flex flex-col gap-1">
                <h1 className={`flex justify-center text-2xl font-bold mb-4 ${playfair.className}`}>YOUR CART</h1>
                <div className={`${lato.className} flex gap-[10px] justify-center items-center`}>
                    <span className="text-[#333333]/60">Cart</span>
                    <span><Image src={Right}/></span>
                    <span className="text-secondary">Checkout</span>
                    <span><Image src={Right}/></span>
                    <span className="text-[#333333]/60">Confirmation</span>
                </div>
            </div>
            <div className="flex gap-[68px] pl-8 pr-[56px]">
                <div className="flex flex-col pl-12 py-10 pr-20 rounded-3xl bg-white">
                    <div className="flex flex-col gap-4 justify-start">
                        <h1 className={`${playfair.className} text-pink text-[20px] font-medium`}>SHIPPING DETAILS</h1>
                        <hr className="text-secondary "/>
                    </div>
                    <div className={`${lato.className} grid grid-cols-2 gap-[120px] pt-6 text-gray`}>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Recipient's Name:</p>
                                    <p className="text-[14px] font-normal">Jessica Omolade</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Address Line:</p>
                                    <p className="text-[14px] font-normal">12 Adetokunbo Ademola Street</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">City/State:</p>
                                    <p className="text-[14px] font-normal">Lagos</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Postal Code:</p>
                                    <p className="text-[14px] font-normal">101241</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Country:</p>
                                    <p className="text-[14px] font-normal">Nigeria</p>
                                </div>
                                
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Phone Number:</p>
                                    <p className="text-[14px] font-normal">+234 810 123 4567</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Email:</p>
                                    <p className="text-[14px] font-normal">jessica.omolade@gmail.com</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Shipping Method:</p>
                                    <p className="text-[14px] font-normal">Standard International Shipping</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-[18px] font-medium">Estimated Delivery Time:</p>
                                    <p className="text-[14px] font-normal">7-14 business days</p>
                                </div>
                            </div>
                        
                        
                    </div>
                </div>
                <aside className="flex flex-col gap-6">
                    <h1 className={`${playfair.className} text-pink text-[20px] font-medium`}>YOUR ORDER</h1>
                    <div className={`${lato.className} flex flex-col pl-12 pb-8 pt-4 pr-[60px] gap-4 rounded-3xl bg-white`}><div className="flex  justify-between">
                            <p>Two items</p>
                            <span>Edit cart</span>
                        </div><hr className="text-secondary "/>
                        {cartItems.map((product) => (
                        <div key={product.id} className="flex flex-col gap-4">
                        
                        
                        <div className="flex justify-start gap-[85px]">
                            <div className="flex justify-center items-center gap-6">
                                <img
                                src={product.imgSrc}
                                className="w-[129px] h-[120px] rounded-2xl"
                                />
                                <span>{product.name}</span>
                            </div>
                            <span className="flex items-center text-[18px]"><Image src={Currency}/> {product.price.toLocaleString()}</span>
                        </div>
                        <hr className="text-secondary "/>
                        </div>
                     ))}
                    </div>
               
                </aside>
            </div>
        </div>
        </>
    )
};

export default Checkout;