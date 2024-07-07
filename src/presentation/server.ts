import express, { Router } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerSetup from "../docs/swagger";
interface Options{
  port?: number;
  routes:Router;
}
export class Server {

  public readonly app=express ()
  private readonly port : number;
  private readonly routes:Router;

  constructor(options:Options) {
    const {port=3100,routes} = options;
    this.port = port;
    this.routes = routes;

  }

  async start () {
    this.app.use("/documentation",swaggerUI.serve,swaggerUI.setup(swaggerSetup))

    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:true}))

    this.app.use(this.routes);
    this.app.listen(this.port, () => {
        console.log(`Server is running on port ${this.port}`);
        
    })
  }
}