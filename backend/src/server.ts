import express, { Application, Request, Response, NextFunction
} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from "helmet";
import { Rotes } from "./routes";
import {logger} from "./infra/logger";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

class Server {
    private app: Application;
    private router;
    private  swaggerDefinition = {
      openapi: '3.0.0',
      info: {
        title: 'Express API for JSONPlaceholder',
        version: '1.0.0',
      },
    };
    
    private  options = {
      definition: {
        openapi: "3.1.0",
        info: {
          title: "Washmen Assignment API with Swagger",
          version: "0.1.0",
          description:
            "This is a assignment provided by Washmen to locate partners within the range",
          license: {
            name: "MIT",
            url: "https://spdx.org/licenses/MIT.html",
          },
          contact: {
            name: "Nikhil Jahagirdar",
            url: "https://www.linkedin.com/in/nikhiljahagirdar",
            email: "nikhil.jahagirdar@email.com",
          },
        },
        servers: [
          {
            url: "http://localhost:3001",
          },
        ],
      },
      apis: ["./routes/*.js"],
    };
    private swaggerSpec = swaggerJSDoc(this.options);
    
    constructor() {
        this.app = express();
        this.router=express.Router();
        this.configureMiddleware();
        this.configureRoutes();
       
    }

    private configureMiddleware(): void {

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(helmet());
       // this.app.use(this.handleError)
        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(this.swaggerSpec, { explorer: true }));
        
    }

   
    
    handleError (err: Error, req:Request, res:Response, next:NextFunction) {
      if (res.headersSent) {
        return next(err)
        console.log(err)
      }
      res.status(500)
      res.render('error', { error: err })
    }

    public start(): void {
        this.app.listen(3001, () => {
            console.log('Server listening in port 3001');
        });
    }

    private configureRoutes() { 
        new Rotes(this.app);
    }
     
}


const server = new Server();
server.start();