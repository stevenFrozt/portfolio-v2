import React from "react"
import NavbarMobile from "./NavbarMobile"

export default function Navbar() {
	return (
		<>
			<NavbarMobile />
			<div className="lg:block top-0 z-50 fixed hidden bg-white py-4 w-full">
				<div className="flex justify-between items-center mx-52">
					<h5 className="font-bold text-2xl">STEVEN</h5>
					<div className="flex gap-10 font-medium text-sm uppercase">
						<a
							href="#home"
							className="hover:text-orange-500 transition-all hover:-translate-y-1 duration-300"
						>
							Home
						</a>
						<a
							href="#about"
							className="hover:text-orange-500 transition-all hover:-translate-y-1 duration-300"
						>
							About Me
						</a>
						<a
							href="#skills"
							className="hover:text-orange-500 transition-all hover:-translate-y-1 duration-300"
						>
							Skills
						</a>
						<a
							href="#projects"
							className="hover:text-orange-500 transition-all hover:-translate-y-1 duration-300"
						>
							Projects
						</a>
						<a
							href="#contact"
							className="hover:text-orange-500 transition-all hover:-translate-y-1 duration-300"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</>
	)
}
