function ProductCard({ title, image, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <h4>₹{price}</h4>

      <button
  onClick={() => alert(`${title} added successfully!`)}
>
  Add To Cart
</button>
    </div>
  );
}

export default ProductCard;