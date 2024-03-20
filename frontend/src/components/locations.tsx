import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import IOffice from "../interfaces/offices";
interface props {
  partn: IOffice[];
}

const Locations = memo(function (soff: props) {
	return (
		<div className="pt-3 pb-3">
			<dl className="">
       
				{Array.from(soff.partn).map((item: IOffice, _index: number) => (
					<>
						<dt>
							<span className="font-md bg-slate-100 font-bold">
								<FontAwesomeIcon className='pr-5' color='lime' icon={faMap} /> {item.location} <span className="font-xs font-thin font-red-200">located {item.distance} away from Starbucks</span>
							</span>
						</dt>
						<dd><span className="text-xs bg-slate-100 font-thin">
							{item.address}
						</span>
						</dd>
					</>
				))}
			</dl>
		</div>
	);
});

export default Locations;
