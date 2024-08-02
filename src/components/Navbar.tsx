import React from "react"

export default function Navbar() {
	return (
		<div className="top-0 z-50 fixed bg-white py-4 w-full">
			<div className="flex justify-between items-center mx-52">
				<h5 className="font-bold text-2xl">STEVEN</h5>
				<div className="flex gap-10 font-medium text-sm uppercase">
					<a href="#home">Home</a>
					<a href="#about">About Me</a>
					<a href="#skills">Skills</a>
					<a href="#projects">Projects</a>
					<a href="#contact">Contact</a>
				</div>
			</div>
		</div>
	)
}
