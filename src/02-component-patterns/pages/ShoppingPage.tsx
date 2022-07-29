
import { ProductCard,ProductButtons,ProductImage, ProductTitle} from "../components";
import { products } from "../data/products";


const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
        <h1>Shoping Store</h1>
        <hr />
        <ProductCard 
            product={product} 
            key= { product.id}
            initialValues={{count:4}}
        >
            {
                ({reset,count,isMaxCountReached,maxCount,increaseBy}) => (
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </>
                )
            }
        </ProductCard>   
</div>
  )
}
