import { Application } from 'express';
import { helloController } from './controller/hello.controller';

export const AppModule = (app: Application) => {
    app.use('/api/hello', helloController);
};
