/** @format */

import React from "react";
import "./spinner.css";

export default function Spinner() {
	return (
		<div className='fixed z-90 w-0 h-0 flex justify-center items-center bg-gray-900 opacity-0 duration-700'>
			<div className='loading-spinner'></div>
		</div>
	);
}
