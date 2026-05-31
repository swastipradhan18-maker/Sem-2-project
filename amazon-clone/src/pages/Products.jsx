import ProductCard from "../components/ProductCard";
import products from "../data";

function Products() {
  return (
    <div className="products">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Products;