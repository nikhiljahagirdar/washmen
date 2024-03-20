
import express,{Application,Request,Response} from "express";
import { PartnerRoute} from "./PartnersinRange";
 
 class Rotes{
   
   private app:Application;
   private partnerRoute;
   private router;
  
   
   constructor(appRouter: Application){
      this.app=appRouter;
      this.router=express.Router();
      
      this.partnerRoute=new PartnerRoute(appRouter);
      this.configureRoutes();
  }

   public ping(req:Request,res:Response){
      res.status(200).json("Express Assignment");
   }

   public ping1(req:Request,res:Response){
      res.status(200).json("Express Assignment 1");
   }
  
   
    private configureRoutes(){
      this.router.get("/", this.ping)
      this.router.get("/v1/", this.ping1)
      this.app.use(this.router);
      this.app.use(this.partnerRoute.partnerRoutes());
    }

}
export {Rotes}