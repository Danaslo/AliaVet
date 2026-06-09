const express = require('express');
const router = require('./router/router');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: FRONTEND_URL || '*',
    methods: ['GET','POST','PUT','DELETE','PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
//app.options('*',cors()); //Test if cors fails.