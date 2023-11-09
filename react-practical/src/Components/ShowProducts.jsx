import data from "./Data";
import ShopingCart from "./ShopingCart";

function ShowProducts() {
  return (
    <div className="flex flex-wrap">
      {data.map((product) => (
        <ShopingCart
          key={product.id}
          productName={product.productName}
          price={product.price}
          actualPrice={product.actualPrice}
          discount={product.discount}
        />
      ))}
    </div>
  );
}

export default ShowProducts;
