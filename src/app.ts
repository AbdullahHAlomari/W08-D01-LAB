import express, {Application} from 'express';
import useRoute from './Routes/useRoute'
import connectDB from './config/db'
const app:Application = express()
app.use(express.json())
connectDB()
app.use('/', useRoute)
let port:number = 3004
app.listen(port,()=> console.log(`Express started ${port}`))