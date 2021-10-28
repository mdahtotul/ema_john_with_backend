import { useEffect, useState } from "react";

const useProducts = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      // fetch('./products.json')
      fetch("https://pure-escarpment-22232.herokuapp.com/products")
         .then((res) => res.json())
         .then((data) => setProducts(data.products));
   }, []);
   return [products, setProducts];
};

export default useProducts;
