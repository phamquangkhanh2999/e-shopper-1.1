import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    async function AxiosData() {
      const res = await axios.get(
        "https://npvwjgorfbmthlozrsnh.supabase.co/rest/v1/product?select=*",
        {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQyNzE3OSwiZXhwIjoxOTUyMDAzMTc5fQ.XXS3bL7TRBL_DCkmgFnaQiLadA15HMmMfWQ172hxNRo",
          },
        }
      );
      setProducts(res.data);
    }
    AxiosData();
  }, []);
  useEffect(() => {
    async function AxiosSlider() {
      const res = await axios.get(
        "https://npvwjgorfbmthlozrsnh.supabase.co/rest/v1/slider?select=*",
        {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQyNzE3OSwiZXhwIjoxOTUyMDAzMTc5fQ.XXS3bL7TRBL_DCkmgFnaQiLadA15HMmMfWQ172hxNRo",
          },
        }
      );
      setSlider(res.data);
    }
    AxiosSlider();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        slider,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
