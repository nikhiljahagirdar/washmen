import React,{memo} from "react";
import Locations from "./locations";
import Avatar from "./avatar";
import {getFirstLetters} from "../utilities/colorUtil";
import Ipartner from "../interfaces/partner";
import PartnerDetailModal from "./partnerdetailsmodel";
import { Switch } from "./ToggleSwitch/switch";

interface props{
  partn:Ipartner
}
    
const Partner= memo(
	function (singlec:props) {
		console.log("partner",singlec.partn);
		const strin:string=getFirstLetters(singlec.partn.organization);
		
		return (
			<div className="pt-2 pr-0 pb-0 pl-0 mt-2 mr-0 mb-0 ml-0 border-b-2 ">
				<div className="sm:flex sm:items-center sm:justify-between sm:space-x-5">
					
					<div className="flex items-center  ">
						<Avatar letr={strin} ></Avatar>
						<div className="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
							<div className="mt-2 mb-2">Works remotely <Switch  isChecked={singlec.partn.willWorkRemotely}></Switch></div>
							<p className="text-lg py-1 font-bold text-gray-800 truncate">{singlec.partn.organization}</p>
							<p className="text-gray-600 text-md">{singlec.partn.customerLocations}</p>
							<Locations partn={Array.from(singlec.partn.offices)}></Locations>
						</div>
         
					</div>
       
					<div className="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
						<PartnerDetailModal partn={singlec.partn} />
					</div>
				</div>
			</div>
     
      
		);
	}
); 

export default Partner;
