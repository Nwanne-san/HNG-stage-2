import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const ORGANIZATION_ID = process.env.NEXT_PUBLIC_ORGANIZATION_ID;
const REVERSE_SORT = process.env.NEXT_PUBLIC_REVERSE_SORT;
const PAGE = process.env.NEXT_PUBLIC_PAGE;
const SIZE = process.env.NEXT_PUBLIC_SIZE;
const APPID = process.env.NEXT_PUBLIC_APPID;
const API_KEY = process.env.NEXT_PUBLIC_APIKEY;

const extractPrice = (current_price) => {
    if (
      current_price &&
      current_price.length > 0 &&
      current_price[0].NGN &&
      current_price[0].NGN.length > 0
    ) {
      return current_price[0].NGN[0];
    }
    return "Price not available";
  };
  
export const fetchProducts = async (page = PAGE, size = SIZE) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      },
      params: {
        organization_id: ORGANIZATION_ID,
        reverse_sort: REVERSE_SORT,
        page,
        size,
        Appid: APPID,
        Apikey: API_KEY
      }
    });

    const items = response.data.items.map((item) => ({
        name: item.name,
        price: extractPrice(item.current_price),
        id: item.id,
        image: `https://api.timbu.cloud/images/${
          item.photos.length > 0 ? item.photos[0].url : ""
        }`,
      }));

    return items;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      },
      params: {
        organization_id: ORGANIZATION_ID,
        Appid: APPID,
        Apikey: API_KEY
      }
    });
    return {
        ...response.data,
        image: `https://api.timbu.cloud/images/${
          response.data.photos.length > 0 ? response.data.photos[0].url : ""
        }`,
      };
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
};
