import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/interfaces";


export const useShoppingCart = () =>{
    
    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({});

    
    const onProductCountChange = ({count,product}:{count:number, product:Product}) => {
        
        setShoppingCart(oldShoppingCart =>{

            const  productinCart: ProductInCart = oldShoppingCart[product.id] || {...product,count:0}

            if (Math.max(productinCart.count + count , 0) > 0) {
                productinCart.count +=count;

                return {
                    ...oldShoppingCart,
                    [product.id]:productinCart
                }
            }

            const { [product.id]:toDelete, ...rest} = oldShoppingCart;

            return rest;

            // if (count===0) {
                
            //     const { [product.id]:toDelete, ...rest} = oldShoppingCart;

            //     return rest
                
            // }

            // return {
            //     ...oldShoppingCart,
            //     [product.id]:{...product,count}
            // }
        });

    }

    return {
        onProductCountChange,
        shoppingCart
    }
}