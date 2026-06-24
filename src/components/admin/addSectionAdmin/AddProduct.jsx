import { useState } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    categorey: "", // Aapke schema ki spelling 'categorey' ke mutabiq
    price: "",
    quantity: "",
    description: "",
    available: true,
    image: null, // Base64 nahi, ab isme direct file object save hoga
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // CHANGED: Ab file ko Base64 mein convert karne ki zaroorat nahi, seedha file object set hoga
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file, // Multer ke liye direct file object pass kiya
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage({ type: "", text: "" });

    if (!formData.image) {
      setMessage({ type: "error", text: "Please select an image." });
      setSubmitting(false);
      return;
    }

    // FIX: Multer payload ke liye 'FormData' object banaya
    const dataToSend = new FormData();
    dataToSend.append("productName", formData.productName);
    dataToSend.append("description", formData.description);
    dataToSend.append("price", Number(formData.price));
    dataToSend.append("quantity", Number(formData.quantity));
    dataToSend.append("categorey", formData.categorey);
    dataToSend.append("available", formData.available ? "true" : "false");
    dataToSend.append("image", formData.image); // Yeh req.file banega multer ke paas

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        // Note: Multer jab use ho raha ho, toh headers mein "Content-Type" manual set NAHI karte, browser automatic boundary ke sath set karta hai.
        body: dataToSend, 
      });

      const responseData = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Product added successfully into MongoDB via ImageKit!" });
        // Form Reset
        setFormData({
          productName: "",
          categorey: "",
          price: "",
          quantity: "",
          description: "",
          available: true,
          image: null,
        });
        if (e.target) e.target.reset(); // File input clear karne ke liye
      } else {
        setMessage({ type: "error", text: responseData.message || responseData.error_Message || "Failed to add product." });
      }
    } catch (error) {
      console.error("API Error:", error);
      setMessage({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      <div className="bg-[#10151f]/90 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl">

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Add New Product
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">
            Create and manage products for your store inventory.
          </p>
        </div>

        {/* Status Messages */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-xl text-sm font-medium border ${
            message.type === "success" 
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
              : "bg-rose-500/10 border-rose-500/20 text-rose-400"
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          
          {/* Product Name */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              placeholder="Enter product name"
              value={formData.productName}
              onChange={handleChange}
              className="w-full bg-[#0b111a] border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">
              Category
            </label>
            <select
              name="categorey"
              value={formData.categorey}
              onChange={handleChange}
              className="w-full bg-[#0b111a] border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              required
            >
              <option value="">Select Category</option>
              <option value="Laptops">Laptops</option>
              <option value="PCs">Custom PCs</option>
              <option value="SSDs">SSDs</option>
              <option value="Mobiles">Mobiles</option>
            </select>
          </div>

          {/* Price & Quantity Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">
                Price (PKR)
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
                className="w-full bg-[#0b111a] border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">
                Stock Quantity
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Available stock"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full bg-[#0b111a] border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Write product description..."
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full bg-[#0b111a] border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none transition"
              required
            />
          </div>

          {/* Availability Status Box */}
          <div className="bg-[#0b111a] border border-white/10 rounded-xl p-3 sm:p-4">
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                name="available"
                checked={formData.available}
                onChange={handleChange}
                className="h-4 w-4 sm:h-5 sm:w-5 accent-cyan-500 cursor-pointer"
              />
              <span className="text-gray-300 text-xs sm:text-sm font-medium">
                Available For Sale (Instantly active)
              </span>
            </label>
          </div>

          {/* Upload Image Section */}
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5">
              Product Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full bg-[#0b111a] border border-dashed border-white/20 rounded-xl px-3 py-3 text-xs sm:text-sm text-gray-400 file:bg-cyan-500 file:hover:bg-cyan-400 file:text-black file:font-semibold file:border-0 file:px-3 file:py-1.5 file:rounded-lg file:mr-4 file:cursor-pointer cursor-pointer"
              required
            />
            {formData.image && (
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-md text-gray-300 max-w-[250px] truncate">
                  📄 {formData.image.name}
                </span>
              </div>
            )}
          </div>

          {/* Submit Action Block */}
          <div className="pt-2 sm:pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-bold tracking-wide transition-all duration-300 shadow-lg shadow-cyan-500/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <span className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Uploading & Saving...
                </>
              ) : (
                "Add Product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}