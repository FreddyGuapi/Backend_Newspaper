
import express  from 'express';
import morgan from 'morgan';
import {connectToDB} from './utils/mongoose.js';


const app = express();

app.use(morgan('dev'))

connectToDB();

app.get('/',(req, res)=> res.send('Hello Word!!'))

app.listen(3000);
console.log('Server is running on port:', 3000);