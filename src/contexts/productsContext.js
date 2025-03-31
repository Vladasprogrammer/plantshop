import { createContext } from "react";
import useFetch from "../hooks/useFetch";


const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const { result: products, loading, error } = useFetch({ url: 'https://gist.githubusercontent.com/Vladasprogrammer/11d1483eb7b550df5b861e4f577edf25/raw/50280a1923e6865ea54e106c72cc38ed3fd815ea/gistfile1.txt', folder: 'PlantsData', apiImage: 'image' });

  const value = {
    products,
    loading,
    error
  }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext;