import http from "./httputil";
import Partner from "../interfaces/partner";

const getPartnersinRange = (range: number) => {
	const url="/v1/Partners/getinrange?lat=51.5144636&lang=-0.142571&range="+ range.toString();
	return http.get<Partner[]>(url);
};

export {getPartnersinRange};