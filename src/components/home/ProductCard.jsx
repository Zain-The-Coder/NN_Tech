export default function ProductCard({
  title,
  price,
  image,
}) {
  return (
    <div className="bg-slate-900 p-4 rounded-xl">

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-contain"
      />

      <h3 className="text-xl font-bold mt-4">
        {title}
      </h3>

      <p className="text-cyan-400 mt-2">
        PKR {price}
      </p>

    </div>
  );
}