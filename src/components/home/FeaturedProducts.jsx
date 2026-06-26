import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const api = '/api/products' ;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        const featuredProducts = data.products
          .filter((product) => product.featured === "true")
          .sort(
            (a, b) =>
              new Date(b.createdAt) - new Date(a.createdAt)
          )
          .slice(0, 3);

        setProducts(featuredProducts);
        console.log(products);
        console.log(featuredProducts)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
        FEATURED HARDWARE
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.productName}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}