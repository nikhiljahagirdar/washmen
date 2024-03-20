/** @format */

import { Router, Request, Response } from "express";
import { Partner } from "../models/partners";
import { Office } from "../models/offices";
import { distance } from "../services/geo.services";
import InvreqDto from "../dto/invreq.dto"
import partners from "../data/partners.json";

export class InviteController {
  constructor() {}

  
  public async getPartnersWithinRange(req: Request<InvreqDto>, resp: Response<Partner[]>) {
    const lat: number = Number(req.query.lat);
    const lang: number = Number(req.query.lang);
    const range: number = Number(req.query.range);
    if (lat !== null && lang !== null && range !== null) {
    }

    const partnersWithinRange: Partner[] = [];
    let office: Office[] = [];
    let cpartner: Partner;
    const data = JSON.parse(JSON.stringify(partners)) as Partner[];
    for (const partner of data) {
      cpartner = partner;
      const offices: Office[] = cpartner.offices;
      let trueoffice: Office[] = new Array<Office>();
      let foffice: Office[] = new Array<Office>();

      for (let office of partner.offices) {
        const latlongary: string[] = office.coordinates.split(",");
        const lat1: number = Number(latlongary[0]);
        const lang1: number = Number(latlongary[1]);
        const crange = distance(lat, lang, lat1, lang1, "k");
        office.distance=Math.round(crange);
        if (crange <= range) {
          
          trueoffice.push(office);
        }
        else{
          
          trueoffice=[];
        }
      }
      if(trueoffice.length>0){
        cpartner.offices=trueoffice;
        partnersWithinRange.push(cpartner);
      }
      
    }
    
    resp.json(partnersWithinRange);
  }
}
