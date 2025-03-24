import express from 'express'; //un serveur est un ordinateur qui ecoute
//import { router } from './routes.js';

const app = express();

app.use(express.json());

app.use(router);

app.get("/", (req,res) =>{
    res.send("bonjour")
});

app.listen(3000, async () => {
console.log(`Server running on http://localhost:3000`);
});