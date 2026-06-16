import ProductCard from "./ProductCard";

const products = [
  {
    title: "ASUS ROG Strix Z790-E",
    price: 145000,
    image: "/images/p1.jpg",
  },
  {
    title: "Intel i9-14900K",
    price: 192500,
    image: "/images/p2.jpg",
  },
];
export default function ProductGrid({ products }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.length === 0 ? (
        <p className="text-center col-span-full">
          No products found
        </p>
      ) : (
        products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))
      )}
    </div>
  );
}