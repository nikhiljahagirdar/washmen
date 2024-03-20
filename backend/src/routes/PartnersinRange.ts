    
 import express,{Application} from "express";
 import { InviteController} from "../controllers/invite.controller";
 import swaggerJSDoc from "swagger-jsdoc";
 import swaggerUi from "swagger-ui-express";
 export class PartnerRoute{
   
    private router ;
    private app: Application;
    private inviteController :InviteController;
    constructor(appRouter: Application){
      this.app=appRouter;
       this.router=express.Router();
       this.inviteController=new InviteController();
   }
   
   public  partnerRoutes(){
       /**
 * @swagger
 * components:
 *   schemas:
 *     Partners:
 *       type: object
 *       required:
 *         - lat
 *         - lang
 *         - Range
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the partner
 *          urlName: 
 *           type: string
 *           description: The url Name of your partner
 *         organization:
 *           type: string
 *           description: The Organisation name of Partner
 *         customerLocations:
 *           type: boolean
 *           description: Locations of the Partner
 *         website:
 *           type: string
 *           description: Website of the Partner
 *        service:
 *           type: string
 *           description: Services Provided by Partners
 *        offices:
 *           type: [
 *            properties:
 *              location:
 *                 type: string
 *                 description: Partner office city
 *               coordinates: 52.0629009,-1.3397750000000315,
 *                 type: string
 *                 description: Partner office coordinate with latitude Longitude
 *               distance: 64
 *                 type: number
 *                 description: Distance of Partner office Located to Restaurent
 *                 
 *            ]
 *       example:
 *                  type: string
 *                 description: Partner office full address
 *               coordinates: 52.0629009,-1.3397750000000315,
 *               "distance": 64
 *            ]
 *           description: Partners Office Address
 *       example:
 *           id: 2,
 *           description: Partners Office Address
 *           urlName: spring-development,
 *           organization: Spring Development,
 *           customerLocations: across the UK,
 *           willWorkRemotely: true,
 *           website: http://www.springdevelopment.net/,
 *           services: We provide training, coaching and consultancy to ensure that 360 feedback ,
 *           offices: [
 *              {
 *                 location: Banbury, Oxfordshire,
 *                 address: Banbury, Oxfordshire,
 *                 coordinates: 52.0629009,-1.3397750000000315,
 *                 distance: 64
 *              }
 *           ]
 */
      this.router.get("/api/v1/Partners/getinrange",this.inviteController.getPartnersWithinRange)
      return this.router;
   }

 }