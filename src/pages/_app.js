import "@/styles/globals.css";
import { CartProvider } from "@/cartContext";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
