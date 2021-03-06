import * as dotenv from "dotenv";
import https from "https";
import fs from "fs";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";

import ApiRouter from './api'
import ErrorHandler  from './middleware/error.middleware';
import NotFoundHandler from './middleware/notFound.middleware';

dotenv.config();


// App Variables

if (!process.env.PORT) {
   process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();


// App Configuration

const corsOptions = {
  origin: [
    'https://project-davinci.herokuapp.com',
    'https://localhost:4000'
  ]
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', ApiRouter);

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.redirect('/api');
})

app.use(ErrorHandler);
app.use(NotFoundHandler);

// Server Activation

// const server = https
//   .createServer({
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
//   }, app)
//   .listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`);
//   });

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


// Webpack HMR Activation //

type ModuleId = string | number;

interface WebpackHotModule {
  hot?: {
    data: any;
    accept(
      dependencies: string[],
      callback?: (updatedDependencies: ModuleId[]) => void,
    ): void;
    accept(dependency: string, callback?: () => void): void;
    accept(errHandler?: (err: Error) => void): void;
    dispose(callback: (data: any) => void): void;
  };
}

declare const module: WebpackHotModule;

if (module.hot) {
   module.hot.accept();
   module.hot.dispose(() => server.close());
}
