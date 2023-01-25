import { createContext, useState } from "react";
import { Children } from "react/cjs/react.production.min";

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],

});

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products};
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
};