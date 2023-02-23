import express from 'express';
require('dotenv').config()

const app = express();

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${port}!`));