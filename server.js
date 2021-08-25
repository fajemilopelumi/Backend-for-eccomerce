import express from "express";
import mongoose from "mongoose";
import path from 'path';
import dotenv from 'dotenv';
import productRouter from "./backend/router/productRouter.js";
import userRouter from "./backend/router/userRouter.js";
import orderRouter from "./backend/router/orderRouter.js";
import uploadRouter from './backend/router/uploadRouter.js';

dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
}) 

app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)
app.get('/api/config/paypal', (req,res)=>{
  res.send(process.env.PAYPAL_CLIENT_ID ||'sb')
});
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
// app.use(express.static(path.join(__dirname, '/frontend/build')));
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
// );
// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });
app.use((err,req,res,next)=>{
  res.status(500).send({message: err.message})
})
const port = process.env.PORT || 300; 

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);

});