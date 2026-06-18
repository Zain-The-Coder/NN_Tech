import connectDB from "@/lib/mongodb.js";
import { createRouter } from "next-connect";
import ProductModel from "@/models/product.model";

const router = createRouter();

router.use(async (req , res , next) => {
  await connectDB();
  await next()
})


router.get(async (req , res) => {
  try {
    const data = await ProductModel.find();
    res.status(200).json({
      status : 200 ,
      message : "Product Fetched Successfully !" ,  
      products : data 
    });
  } catch(e) {
      res.status(500).json({
        status : 500 ,
        error_Message : e.message
      })
          console.log(`Error Is ${e.message}`)

  }
})


router.post(async (req , res) => {
  try {
    const {productName , description , price , available , quantity , image , categorey} = req.body ;
    const product = await ProductModel.create({
      productName : productName , 
      description : description , 
      price : price , 
      available : available , 
      quantity : quantity , 
      image : image ,
      categorey : categorey
    });

    res.status(200).json({
      status : 200 ,
      message : "Product Added Successfully !" ,
      product : product
    });

  } catch (e) {
    res.status(500).json({
      status : 500 ,
      error_Message : e.message 
    });
          console.log(`Error Is ${e.message}`)
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