import express from 'express';
//import { router } from './routes.js';

const app = express();
app.use(express.json());

app.use(router);

app.listen(3000, async () => {
console.log(`Server running on http://localhost:3000`);
});