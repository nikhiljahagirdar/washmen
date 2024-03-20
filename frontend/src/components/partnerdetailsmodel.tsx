import React, { memo } from "react";
import Ipartner from "../interfaces/partner";
import Locations from "./locations";
interface props{
	partn:Ipartner
}

const PartnerDetailModal = memo(function (spart: props) {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<>
			<button
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				type='button'
				onClick={() => setShowModal(true)}
			>
        More
			</button>
			{showModal ? (
				<>
					<div className='justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div className='relative w-[500px] my-6 mx-auto max-w-3xl scr'>
							
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								
								<div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
									<h3 className='text-xl break-words font-semibold'>{spart.partn.organization}</h3>
									<button
										className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
										onClick={() => setShowModal(false)}
									>
										<span className='w-screen w-screen left-0 bg-transparent text-black opacity-5 text-2xl block outline-none focus:outline-none'>
                      ×
										</span>
									</button>
								</div>
								
								<div className='relative p-6 flex-auto overflow-auto'>
									<p className='my-4 text- text-blue-900 text-md font-semibold leading-relaxed hover:text-blue-800'>
										<a href={spart.partn.website} >{spart.partn.website}</a>
									</p>
									<p>
										<div>Locations</div>
										<Locations partn={Array.from(spart.partn.offices)}></Locations>
									</p>
									<p className='my-4 text-slate-500 text-sm leading-relaxed'>
										{spart.partn.services}
									</p>
								</div>
								
								<div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
									<button
										className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
										type='button'
										onClick={() => setShowModal(false)}
									>
                    Close
									</button>
									
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</>
	);
});
export default PartnerDetailModal;
