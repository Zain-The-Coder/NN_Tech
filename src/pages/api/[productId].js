import connectDB from "@/lib/mongodb.js";
import { createRouter } from "next-connect";
import ProductModel from "@/models/product.model";

const router = createRouter();

router.use(async (req , res , next) => {
  await connectDB();
  await next();
});

router.get(async (req , res) => {
    try {
        const { productId } = req.query ;
        const fetchedProduct = await ProductModel.findById(productId);
        res.status(200).json({
            status : 200 , 
            message : "Product Fetched Successfully !" , 
            product : fetchedProduct
        })
    } catch (e) {
        res.status(500).json({
            status : 500 , 
            error_Message : "Item Cannot Fetched !"
        })
    }
})

router.delete(async (req , res) => {
    try {
        const { productId } = req.query; 

        if (!productId) {
            return res.status(400).json({ message: "Product ID is required" });
        }

        const deletedProduct = await ProductModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found in database" });
        }

        // Send back a success response
        res.status(200).json({
            status: 200,
            message: "Item deleted successfully!",
            deletedId: productId
        });

    } catch (e) {
        res.status(500).json({
            status : 500 , 
            error_Message : "Item Can't Be Deleted !",
            details: e.message
        });
    }
});

router.patch(async (req , res) => {
    try {
        const {productId} = req.query ;
        const updatedData = req.body ;
        const updatedProduct = await ProductModel.findOneAndUpdate(
            { _id : productId }  ,
            { $set : updatedData }
        );

        if(!updatedProduct) {
            return res.send("Product Not Found !");
        }
        res.status(200).json({
            status : 200 , 
            message : "Item Updated Successfully !" , 
            previous_Product : updatedProduct , 
            updated_Product : updatedData
        })
    } catch (e) {
        res.status(500).json({
            status : 500 , 
            error_Message : `Item Can't Updated !`
        })
    }
})

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(500).end("Something Went Wrong !");
  },
  onNoMatch: (req, res) => {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  },
});