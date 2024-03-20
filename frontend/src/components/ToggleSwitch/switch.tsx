import React, { memo } from "react";
import "./switch.css";
interface props {
  isChecked: boolean;
}

const Switch = memo(function (sw: props) {
	return (
		<div className="p-4">
			<div className=' justify-center inline-block'>
				<label htmlFor='toogleButton' className='flex items-center cursor-pointer'>
					
					<div className='relative'>
						<input id='toogleButton'  defaultChecked={sw.isChecked} onClick={()=>{return false;}} type='checkbox' className='hidden' />

						<div className='toggle-path bg-red-700 w-9 h-5 rounded-full shadow-inner'></div>

						<div className='toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0'></div>
					</div>
				</label>
			</div>
		</div>
	);
});

export { Switch };
