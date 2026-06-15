import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const products = [
    {
      title: "TUF Gaming Motherboard",
      price: "45,000",
      image: "/images/laptop.jpg",
    },
    {
      title: "ThinkPad X1 Carbon",
      price: "185,000",
      image: "/images/laptop.jpg",
    },
    {
      title: "Latest Flagship Mobiles",
      price: "120,000",
      image: "/images/laptop.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-4xl font-bold mb-10">
        FEATURED HARDWARE
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
          />
        ))}
      </div>

    </section>
  );
}