import connectDB from "@/lib/mongodb.js";
import { createRouter } from "next-connect";
import ProductModel from "@/models/product.model";
import imagekit from "@/lib/imagekit";
import upload from "@/lib/multer"; // Ensure this uses multer.memoryStorage()

const router = createRouter();

// Middleware to connect to DB
router.use(async (req, res, next) => {
  await connectDB();
  next();
});

// GET Method
router.get(async (req, res) => {
  try {
    const data = await ProductModel.find();

    // Added 'return' to guarantee execution ends here
    return res.status(200).json({
      status: 200,
      message: "Product Fetched Successfully!",
      products: data,
    });
  } catch (e) {
    return res.status(500).json({
      status: 500,
      error_Message: e.message,
    });
  }
});

// Apply Multer Middleware only for the routes below it
router.use(upload.single("image"));

// POST Method
router.post(async (req, res) => {
  try {
    const {
      productName,
      description,
      price,
      available,
      quantity,
      categorey,
      featured,
      stock,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({
        status: 400,
        message: "Image is required",
      });
    }

    // Upload to ImageKit using the buffer from memory
    const uploadResult = await imagekit.upload({
      file: req.file.buffer,
      fileName: `${Date.now()}-${req.file.originalname}`,
      folder: "/products",
    });

    const product = await ProductModel.create({
      productName,
      description,
      price,
      available,
      quantity,
      categorey,
      image: uploadResult.url,
      featured,
      stock,
    });

    // Added 'return'
    return res.status(201).json({
      status: 201,
      message: "Product Added Successfully!",
      product,
    });
  } catch (e) {
    console.error("Deployment POST Error:", e);

    return res.status(500).json({
      status: 500,
      error_Message: e.message,
    });
  }
});

export const config = {
  api: {
    bodyParser: false, // Required for Multer to parse multipart/form-data
  },
};

// CRITICAL FIX: Explicitly export the router handler evaluation
export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    // Use .send() or .json() instead of just .end() to cleanly resolve the API path
    return res.status(500).json({ status: 500, message: "Something Went Wrong!" });
  },
  onNoMatch: (req, res) => {
    return res.status(405).json({ status: 405, message: `Method ${req.method} Not Allowed` });
  },
});