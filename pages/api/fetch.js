await mongoose.connect(process.env.MOURL)
let products = await Product.find()