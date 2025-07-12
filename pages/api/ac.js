import Product from "@/models/Product"
import cdb from "@/middleware/ctdb"

const handler = async(req,res)=>{
    if(req.method == 'POST'){
        const {title,desc,img,category,weight,price,availableQty} = req.body
        let slug = (title + Math.ceil(Math.random() * 100))
    let cake = new Product({title,slug,desc,img,category,weight,price,availableQty})
    await cake.save()

res.status(200).json({success:"success",cake:cake})
    }
    else{
        res.status(400).json({error:"bad request"})

    }
    

}
export default cdb(handler);
  