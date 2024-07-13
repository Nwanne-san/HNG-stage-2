import React from 'react';
import { useRouter } from 'next/router';
import { fetchProductById, fetchProducts } from '@/utils/axiosInstance'; // Adjust the import path as needed
import Image from 'next/image';
import { Lato, Playfair_Display } from "next/font/google";
import Currency from '../../../public/images/naira.svg';
import { useCart } from '@/cartContext';
import Link from 'next/link';
import Left from '../../../public/images/left.svg'
import toast, { Toaster } from 'react-hot-toast';

const lato = Lato({ subsets: ["latin"], weight: ['400', '300', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const ProductDetail = ({ product }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster />
      <div className="flex sm:px-0 px-2 py-2 sm:py-10 items-center">
        <Link href='/' className="flex gap-2 sm:gap-6">
          <Image src={Left} />
          <span className={`${lato.className} text-[18px] font-medium`}>Back to shop</span>
        </Link>
      </div>
      <div className={`${lato.className} flex flex-col items-center gap-2 sm:gap-4`}>
        <h1 className={`${playfair.className} text-pink text-xl sm:text-3xl font-semibold mt-4`}>{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="object-cover rounded-lg sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]"
        />
        <p className="text-xl text-gray-700 mt-2 flex gap-2">
          <Image src={Currency} alt="currency" />{product.current_price.toString()}
        </p>
        <button
          className="sm:mt-4 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark duration-200"
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </button>
        <p className="mt-4 text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const products = await fetchProducts();
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const product = await fetchProductById(params.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return { props: { product } };
}

export default ProductDetail;
