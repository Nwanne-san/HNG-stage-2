import React from 'react';
import { useRouter } from 'next/router';
import { fetchProductById } from '@/utils/api'; // Adjust the import path as needed
import Image from 'next/image';
import Currency from '../../../public/images/naira.svg';
import { useCart } from '@/cartContext';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Left from '../../../public/images/left.svg';
import toast, { Toaster } from 'react-hot-toast';

const ProductDetail = ({ product }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`,{
      position: 'top-right',
      duration: 3000,
      style: { backgroundColor: 'black', color: 'white' },
    });
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <Navbar/>
    <Toaster />
    <div className="container mx-auto px-4 py-8">
      <div className="flex sm:px-0 px-2 py-2 sm:py-10 items-center">
        <Link href='/'className="flex gap-2 sm:gap-6">
           
            <Image src={Left} alt="Back" />
            <span className="text-[18px] font-medium">Back to shop</span>
          
        </Link>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-pink text-xl sm:text-3xl font-semibold mt-4">{product.name}</h1>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="object-cover rounded-lg sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]"
        />
        <p className="text-xl text-gray-700 mt-2 flex gap-2">
          Price :
          <Image src={Currency} alt="currency" />
          {product.current_price.toString()}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark duration-200"
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </button>
        <p className="mt-4 text-gray-700">{product.description}</p>
      </div>
    </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const product = await fetchProductById(params.id);

    if (!product) {
      return {
        notFound: true,
      };
    }

    return {
      props: { product },
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      notFound: true,
    };
  }
}

export default ProductDetail;
