import ProductList from "../ProductList";

export default function Products({ addToCart }) {
  return (
    <div>
      <h1>محصولات</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
}
