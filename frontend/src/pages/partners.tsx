import React from "react";
import Header from "../components/header";
import PartnerList from "../components/partnerlist";

export default function Partners() {
	return (
		<div>
			<Header />
			<section className="pt-6">
				<PartnerList></PartnerList>
			</section>
		</div>
	);
}
