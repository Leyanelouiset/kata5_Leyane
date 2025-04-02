//connection db
import pkg from 'pg';
const { Pool } = pkg;
import 'dotenv/config';

// connexion a la db
const pool = new Pool({
    connectionString: process.env.DATABASSE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

export default pool;
