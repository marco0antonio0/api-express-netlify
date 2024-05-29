import express from 'express';
import { AppModule } from './app/app.module';

const app = express();
const port = process.env.PORT || 3000;

AppModule(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});