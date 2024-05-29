import express from 'express';
import serverless from 'serverless-http';
import { AppModule } from '../../app/app.module';

const api = express();

AppModule(api);

export const handler = serverless(api);
