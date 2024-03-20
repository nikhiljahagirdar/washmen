import React, { useState,useEffect } from "react";
import Partner from "./partner";
import Search from "./search";
import {getPartnersinRange} from "../utilities/http-services";
import IPartner from "../interfaces/partner";

function PartnerList() {
	
	const [data, setData] = useState<IPartner[]>([]);
	const [range, setRange] = useState("0");
	
	function strange(htl: React.ChangeEvent<HTMLInputElement>) {
		console.log(htl.target.value);
		setRange(htl.target.value);
		getData();
	}

	function getData(){
		getPartnersinRange(Number(range)).then((response: any)=>{
			const res=response.data as IPartner[];
			setData(res);
		
		});
		
	}
	useEffect(()=>{
		getData();
	},[range]);

	
	
	return (
		<div className="pt-2">
			<Search  chcbrange={strange} ></Search>
			
			<div className='bg-gray-100 pt-2 pr-0 pb-2 pl-2 mt-0 mr-auto mb-0 ml-auto sm:py-5 lg:py-8'>
				<div className='pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8'>
					<div className='pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8'>
						
						<div className='shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2'>
							
							<div className='pt--10 pr-0 pb-10 pl-0'>
								{data && Array.from(data).map((item:IPartner,_index) => {
									
									// eslint-disable-next-line react/jsx-key
									return <Partner key={"part"+_index} partn={item}  ></Partner>;
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PartnerList;
