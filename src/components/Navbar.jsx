import React from 'react'

export default function Navbar() {

	const listItems = [
		'Section1',
		'Section2',
		'Section3',
		'Section4'
	]

	return (
		<div className="fixed  justify-between z-10 flex items-center gap-50 left-1/2 translate-x-[-50%] top-[20px]">
			<div className="flex items-center p-2">
				<span className="text-3xl font-bold text-black">THESITE</span>
			</div>
			<ul className="flex bg-white opacity-80 rounded-xl py-3 px-6 gap-8 text-xl">
				{
					listItems.map((item) => (
						<li className="relative py-2 px-3 rounded-md group cursor-pointer hover:bg-[#7f7f7f] transition-all duration-300" key={item}>
							{item}
						</li>
					))
				}
			</ul>
			<button className="bg-[#1f1f1f] text-xl font-bold rounded-md py-3 px-6 hover:bg-[#3f3f3f] text-white transition-all duration-300">Button</button>
		</div>
	)
}
