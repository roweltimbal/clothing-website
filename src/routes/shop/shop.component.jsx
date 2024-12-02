import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      {products ? (
        products.map(({ id, name }) => (
          <div key={id}>
            <h1>{name}</h1>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Shop;
