import express from 'express'; //un serveur est un ordinateur qui ecoute
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT;

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use(express.json());


app.listen(port, async () => {
console.log(`Server running on http://localhost:${port}`);
});