import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Star,
  ShoppingCart,
  Truck,
  ShieldCheck,
  Link,
} from "lucide-react";


export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

const handleWhatsApp = () => {
  const phoneNumber = "923182622266";

  const productLink = window.location.href;

  const message = `Hello, I want to buy this product.

Product: ${product.productName}
Price: $${product.price}
Product ID: ${product._id}

Product Link:
${productLink}`;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
};


  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `/api/${id}`
        );

        setProduct(data.product);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center">
        <h1 className="text-white text-2xl">
          Loading...
        </h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center">
        <h1 className="text-red-500 text-2xl">
          Product Not Found
        </h1>
      </div>
    );
  }

return (
  <div className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 text-white">
    {/* Breadcrumb */}
    <div className="mb-6 text-sm text-zinc-400 truncate">
      Home / Products / {product.productName}
    </div>

    <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
      <div className="grid grid-cols-1 lg:grid-cols-5">
        
        {/* Product Image */}
        <div className="lg:col-span-3 bg-black">
          <img
            src={product.image}
            alt={product.productName}
            className="
              w-full
              h-[280px]
              sm:h-[400px]
              md:h-[500px]
              lg:h-[600px]
              object-cover
            "
          />
        </div>

        {/* Product Details */}
        <div className="lg:col-span-2 p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
          <h1
            className="
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              mb-4
              break-words
            "
          >
            {product.productName}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="text-zinc-300">
              4.8 (128 Reviews)
            </span>
          </div>

          <hr className="border-zinc-800 mb-6" />

          {/* Price */}
          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-black
              mb-4
            "
          >
            ${product.price}
          </h2>

          {/* Stock */}
          <span
            className={`inline-block w-fit px-4 py-2 rounded-lg text-sm font-medium mb-6 ${
              product.available
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {product.available
              ? "In Stock"
              : "Out Of Stock"}
          </span>

          <hr className="border-zinc-800 mb-6" />

          {/* Description */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-2">
              Description
            </h3>

            <p className="text-zinc-400 leading-relaxed break-words">
              {product.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
  onClick={handleWhatsApp}
  className="flex-1 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition flex justify-center items-center gap-2"
>
  <ShoppingCart size={18} />
  Buy Now
</button>

            <a
              href="/product"
              className="flex-1 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition flex justify-center items-center"
            >
              Back To Home
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}