import { Lato, Playfair_Display} from "next/font/google"
const lato = Lato({ subsets: ["latin"], weight: ['400'] })
const playfair = Playfair_Display({ subsets: ["latin"], weight: ['400', '700'] })


export default function Footer() {
  return (
    <>
      <div className={`w-full bg-pink text-neutral flex flex-col py-4 px-8 gap-6 ${lato.className}`}>
        
        <div className="flex flex-row md:gap-[88px] justify-between text-neutral">
            <div className="flex justify-center items-center">
              <p className={`text-[28px] font-semibold ${playfair.className}`}>Beauty Ireoluwa</p>
            </div>
            <ul className="flex flex-col gap-3">
              <li className={`text-[20px] font-medium ${playfair.className}`}>Dealer on all kinds of jewelries</li>
              <li>Phone: +234 9102469802</li>
              <li>Email: belle’sglamour@gmail.com</li>
              <li>Address: 123 Jewelry Lane, Lagos, Nigeria</li>
            </ul>
        
            <ul className="flex flex-col gap-3">
              <li><span className={`text-[20px] font-medium ${playfair.className}`}>Customer Service</span></li>
              <li>Product Warranty</li>
              <li>Reviews</li>
              <li>Contact Support</li>
            </ul>
          
          <ul className="flex flex-col gap-3">
            <li className={`text-[20px] font-medium ${playfair.className}`}>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Shipping and Delivery</li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li className={`text-[20px] font-medium ${playfair.className}`}>About Us</li>
            <li>Blog</li>
            <li>Our Story</li>
            <li>Careers</li>
          </ul>

        </div>
        
        
      </div>
    </>
  )
}