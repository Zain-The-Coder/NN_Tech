import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName : {
        type : String , 
        required : true 
    } ,
    description : {
        type : String , 
        required : true 
    } ,
    price : {
        type : Number , 
        required : true 
    } , 
    available : {
        type : String , 
        required : true 
    } , 
    quantity : {
        type : Number , 
        required : true 
    } , 
    categorey : {
        type : String , 
        required : true 
    } ,
    image : {
        type : String , 
        required : true 
    } ,
    featured : {
        type : String ,
        default : "false"
    } , 
    stock : {
        type : Boolean ,
        default : true
    }
} , {timestamps : true});

const ProductModel = mongoose.models.product || mongoose.model('product', productSchema);

export default ProductModel ;