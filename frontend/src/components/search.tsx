import React from "react";


interface props {
  chcbrange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
}

function Search(sprops: props) {
	return (
		<form>
			<div className='flex items-center justify-center pt-2 pr-2 pb-0 pl-2'>
				<label className='p-x-2 right-2 m-3 font-semibold font-sm'>Select Distance in kms</label>
				<input
					onChange={sprops.chcbrange}
					id='number'
					placeholder='Distance in km'
					type='search'
					className='pt-2 pr-0 pb-2 pl-10  py-2
             border border-gray-300 rounded-sm focus:border-indigo-600'
					min='10'
					max='100'
				/>
			</div>
		</form>
	);
}

export default Search;
