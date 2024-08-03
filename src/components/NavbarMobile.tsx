import React from "react"

export default function NavbarMobile() {
	return (
		<div className="block bottom-0 z-50 fixed lg:hidden bg-white py-4 border w-full">
			<div className="flex">
				<div className="flex justify-between font-medium text-xs uppercase w-full px-4">
					<a href="#home" className="">
						Home
					</a>
					<a href="#about" className="">
						About Me
					</a>
					<a href="#skills" className="">
						Skills
					</a>
					<a href="#projects" className="">
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
	)
}
