import cors from 'cors';
import express, { json } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import indexRouter from '../routes/index.routes';

//  Settings
const app = express();
app.set("port", 3000);

// Middleware
app.use(morgan("dev"));
app.use(json());
app.use(
    cors({
        "origin": "*"
    })
);
app.use(helmet());

// Routes
app.set("router", indexRouter);


export default app;