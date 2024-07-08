import { Lato, Playfair_Display} from "next/font/google"
const lato = Lato({ subsets: ["latin"], weight: ['400'] })
const playfair = Playfair_Display({ subsets: ["latin"], weight: ['400', '700'] })


export default function Footer() {
  return (
    <>
      <div className={`w-full bg-pink text-neutral flex flex-col py-4 px-6  ${lato.className}`}>
        
        <div className="flex sm:flex-row flex-col gap-6 lg:gap-[88px] justify-between text-neutral">
            <div className="flex justify-center items-center">
              <p className={`text-[28px] font-semibold ${playfair.className}`}>Beauty Ireoluwa</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-0 sm:flex">
              <ul className="flex flex-col gap-3">
                <li className={`text-[20px] font-medium ${lato.className} sm:${playfair.className}`}>Dealer on all kinds of jewelries</li>
                <li className="sm:text-base text-sm">Phone: +234 9102469802</li>
                <li className="sm:text-base text-sm">Email: belle’sglamour@gmail.com</li>
                <li className="sm:text-base text-sm">Address: 123 Jewelry Lane, Lagos, Nigeria</li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li className={`text-[20px] font-medium ${lato.className} sm:${playfair.className}`}>Customer Service</li>
                <li className="sm:text-base text-sm">Product Warranty</li>
                <li className="sm:text-base text-sm">Reviews</li>
                <li className="sm:text-base text-sm">Contact Support</li>
              </ul>
                        
              <ul className="flex flex-col gap-2 sm:gap-3">
                <li className={`text-[20px] font-medium ${lato.className} sm:${playfair.className}`}>Terms of Service</li>
                <li className="sm:text-base text-sm">Privacy Policy</li>
                <li className="sm:text-base text-sm">Return Policy</li>
                <li className="sm:text-base text-sm">Shipping and Delivery</li>
              </ul>
              <ul className="flex flex-col gap-3">
                <li className={`text-[20px] font-medium ${lato.className} sm:${playfair.className}`}>About Us</li>
                <li className="sm:text-base text-sm">Blog</li>
                <li className="sm:text-base text-sm">Our Story</li>
                <li className="sm:text-base text-sm">Careers</li>
              </ul>
            </div>

        </div>
        
        
      </div>
    </>
  )
}