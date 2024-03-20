/** @format */
import React, { memo } from "react";
import { getcolors } from "../utilities/colorUtil";

interface props {
  letr: string;
}

// eslint-disable-next-line react/display-name
const Avatar = memo(function (myprops: props) {
	
	const color= getcolors(myprops.letr.charAt(0));
		
	return (
		<div style={{backgroundColor:color?.color}} className='relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600'>
			<span className='font-medium '>{myprops.letr}</span>
		</div>
	);
});

export default Avatar;
