import express from "express";
import mongoose from "mongoose";
import path from 'path';
import dotenv from 'dotenv';
import productRouter from "./router/productRouter.js";
import userRouter from "./router/userRouter.js";
import orderRouter from "./router/orderRouter.js";
import uploadRouter from './router/uploadRouter.js';

dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))


mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
}) 

app.use(express.static('my-eccomerce/build'))

app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter) 
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.get('/api/config/paypal', (req,res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID ||'sb')
});
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, '/my-eccomerce/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/my-eccomerce/build/index.html'))
);
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });
app.use((err,req,res,next)=>{
  res.status(500).send({message: err.message})
})

// if(process.env.NODE_ENV === 'production'){
//   app.get('/*', (req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./my-eccomerce','build','index.html'))
//   })
// }
const port = process.env.PORT || 300; 

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);

});
