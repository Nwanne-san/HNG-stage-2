import { Lato, Playfair_Display} from "next/font/google"
const lato = Lato({ subsets: ["latin"], weight: ['400'] })
const playfair = Playfair_Display({ subsets: ["latin"], weight: ['400', '700'] })


export default function Footer() {
  return (
    <>
      <div className={`w-full bg-pink text-neutral flex flex-col py-4 px-6  ${lato.className}`}>
        
        <div className="flex lg:flex-row flex-col sm:gap-6 lg:gap-20 gap-6  text-neutral">
            <div className="flex justify-start lg:justify-center items-center">
              <p className={`text-xl sm:text-[28px] font-normal sm:font-semibold ${playfair.className}`}>Beauty Ireoluwa</p>
            </div>
            <div className="grid grid-cols-2 gap-14 sm:gap-0 sm:flex">
              <div className="flex flex-col sm:flex-row sm:gap-6 lg:gap-20 gap-6">
                <ul className="flex flex-col gap-3">
                  <li className={`text-sm sm:text-[20px] font-medium ${lato.className} sm:${playfair.className}`}>Dealer on all kinds of jewelries</li>
                  <li className="sm:text-base text-sm leading-[16px]">Phone: +234 9102469802</li>
                  <li className="sm:text-base text-sm leading-[16px]">Email: belle’sglamour@gmail.com</li>
                  <li className="sm:text-base text-sm leading-[16px]">Address: 123 Jewelry Lane, Lagos, Nigeria</li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <li className={`text-[20px] font-medium ${lato.className} sm:${playfair.className}`}>Customer Service</li>
                  <li className="sm:text-base text-sm leading-[16px]">Product Warranty</li>
                  <li className="sm:text-base text-sm leading-[16px]">Reviews</li>
                  <li className="sm:text-base text-sm leading-[16px]">Contact Support</li>
                </ul>
              </div>
                        
              <div className="flex flex-col sm:flex-row sm:gap-6 lg:gap-20 justify-between">
                <ul className="flex flex-col gap-2 sm:gap-3">
                  <li className={`text-lg sm:text-[20px] font-medium ${lato.className} sm:${playfair.className}`}>Terms of Service</li>
                  <li className="sm:text-base text-sm ">Privacy Policy</li>
                  <li className="sm:text-base text-sm ">Return Policy</li>
                  <li className="sm:text-base text-sm ">Shipping and Delivery</li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <li className={`text-[20px] font-medium ${lato.className} sm:${playfair.className}`}>About Us</li>
                  <li className="sm:text-base text-sm leading-[16px]">Blog</li>
                  <li className="sm:text-base text-sm leading-[16px]">Our Story</li>
                  <li className="sm:text-base text-sm leading-[16px]">Careers</li>
                </ul>
              </div>
            </div>

        </div>
        
        
      </div>
    </>
  )
}