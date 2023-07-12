import express from 'express';
import morgan from 'morgan';
import { AddNewProduct, GetAllProducts, GetSingleProducts, deleteProduct, updateProduct } from './Controllers/StoreControllers.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send("Working..")
})

app.get('/get-all-products', GetAllProducts);
app.get('/get-single-product', GetSingleProducts); /// read
app.post("/add-new-product", AddNewProduct); // create
app.patch('/update-product', updateProduct); // update
app.delete("/delete-product", deleteProduct) // delete


app.listen(8000, () => {
    console.log("Server running on port 8000")
})