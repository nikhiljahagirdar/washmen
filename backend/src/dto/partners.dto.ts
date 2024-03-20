import { classes, AutoMap } from '@automapper/classes';
import {OfficeDto} from "./office.dto";


export type partnersDto={
      
    id: number;
    
    urlName: string;
    
    organization: string;
    
    customerLocations: string;
    
    willWorkRemotely: boolean;
   
    website: string;
    
    services: string;
    
    offices: OfficeDto[];
}