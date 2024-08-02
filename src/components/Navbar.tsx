import React from "react"

export default function Navbar() {
	return (
		<div className="top-0 z-50 fixed bg-white py-4 w-full">
			<div className="flex justify-between items-center mx-52">
				<h5 className="font-bold text-2xl">STEVEN</h5>
				<div className="flex gap-10 font-medium text-sm uppercase">
					<a href="#">Home</a>
					<a href="#">About Me</a>
					<a href="#">Services</a>
					<a href="#">Projects</a>
					<a href="#">Contact</a>
				</div>
			</div>
		</div>
	)
}
