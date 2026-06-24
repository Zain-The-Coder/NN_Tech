import connectDB from "@/lib/mongodb.js";
import { createRouter } from "next-connect";
import ProductModel from "@/models/product.model";
import imagekit from "@/lib/imagekit";
import upload from "@/lib/multer";

const router = createRouter();

router.use(async (req, res, next) => {
  await connectDB();
  next();
});

router.get(async (req, res) => {
  try {
    const data = await ProductModel.find();

    res.status(200).json({
      status: 200,
      message: "Product Fetched Successfully!",
      products: data,
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      error_Message: e.message,
    });
  }
});

router.use(upload.single("image"));

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

    res.status(201).json({
      status: 201,
      message: "Product Added Successfully!",
      product,
    });
  } catch (e) {
    console.log(e);

    res.status(500).json({
      status: 500,
      error_Message: e.message,
    });
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("Something Went Wrong !");
  },
  onNoMatch: (req, res) => {
    res.status(405).end(`Method ${req.method} Not Allowed`)
  },
});