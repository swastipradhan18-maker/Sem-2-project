import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data";

function Home() {
  return (
    <>
      <Hero />

      <h2 className="section-title">
        Today's Deals
      </h2>

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
    </>
  );
}

export default Home;