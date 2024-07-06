import { Lato, Playfair_Display_SC } from "next/font/google"
const lato = Lato({ subsets: ["latin"], weight: ['400'] })
const playfair = Playfair_Display_SC({ subsets: ["latin"], weight: ['400', '700'] })


export default function Footer() {
  return (
    <>
      <div className={`w-full bg-pink text-neutral flex flex-col py-4 px-8 gap-6 ${lato.className}`}>
        <div>
          <p className={`lowercase ${playfair.className}`}>Beauty Ireoluwa </p>
        </div>
        <div className="flex flex-row gap-[88px] justify-between">
        
            <ul className="flex flex-col gap-3">
              <li>Dealer on all kinds of jewelries</li>
              <li>Phone: +234 9102469802</li>
              <li>Email: belle’sglamour@gmail.com</li>
              <li>Address: 123 Jewelry Lane, Lagos, Nigeria</li>
            </ul>
        
            <ul className="flex flex-col gap-3">
              <li>Customer Service</li>
              <li>Product Warranty</li>
              <li>Reviews</li>
              <li>Contact Support</li>
            </ul>
          
          <ul className="flex flex-col gap-3">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Shipping and Delivery</li>
          </ul>
          <div className="flex flex-col justify-center gap-4">
            <p className="flex justify-end">Sign up and get 15% off on your first order!</p>
            <div className="flex flex-row gap-4">
              <input type="search" className='py-1 px-3 text-sm w-[336px] h-9 bg-neutral  focus:text-black outline-none bg-inherit rounded-xl' placeholder='Your Email Address'  />
              <button className="bg-secondary w-[100px] h-9 text-sm rounded-xl ">Subscribe</button>
            </div>
          </div>

        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
      </div>
    </>
  )
}