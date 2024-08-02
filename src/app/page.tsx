import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaGithub,
	FaLocationArrow,
	FaMobile,
	FaMailBulk
} from "react-icons/fa"

export default function Home() {
	const personalDetails = [
		{ label: "Birthday", value: "18th April 2001" },
		{ label: "Age", value: "23 Yr" },
		{ label: "Country", value: "Philippines" },
		{ label: "Address", value: "Palawan" },
		{ label: "E-mail", value: "steven.evio@gmail.com" },
		{ label: "Phone", value: "(+63)930-178-2255" },
		{ label: "Github", value: "github.com/stevenFrozt" },
		{ label: "Facebook", value: "fb.com/steven.evio" }
	]

	const tools = [
		{ name: "React js", image: "/tools/reactjs.png" },
		{ name: "Next js", image: "/tools/nextjs.png" },
		{ name: "Node js", image: "/tools/nodejs.png" },
		{
			name: "C++",
			image: "/languages/cpp.png"
		},
		{
			name: "C#",
			image: "/languages/csharp.png"
		},
		{
			name: "JAVA",
			image: "/languages/java.png"
		},
		{
			name: "Javascript",
			image: "/languages/JavaScript.png"
		},
		{
			name: "Typescript",
			image: "/languages/typescript.png"
		},
		{
			name: "PHP",
			image: "/languages/php.png"
		},
		{
			name: "Python",
			image: "/languages/python.png"
		},
		{ name: "React Query", image: "/tools/reactquery1.png" },
		{ name: "React Table", image: "/tools/reacttable.png" },
		{ name: "React Hook Form", image: "/tools/reacttable.png" },
		{ name: "Next Auth", image: "/tools/nextauth.png" },
		{ name: "Tailwind CSS", image: "/tools/tailwind.png" },
		{ name: "Zustand", image: "/tools/zustand.png" },
		{ name: "Shadcn UI", image: "/tools/zustand.png" },
		{ name: "Material UI", image: "/tools/zustand.png" },
		{ name: "Bootstrap", image: "/tools/zustand.png" },
		{ name: "MySQL", image: "/tools/mysql.png" },
		{ name: "Github", image: "/tools/github.png" },
		{ name: "Figma", image: "/tools/figma.png" },
		{ name: "Adobe XD", image: "/tools/xd.png" },
		{ name: "HTML", image: "/tools/xd.png" },
		{ name: "CSS", image: "/tools/xd.png" },
		{ name: "Wordpress", image: "/tools/xd.png" },
		{ name: "Elementor", image: "/tools/xd.png" },
		{ name: "Adobe Photoshop", image: "/tools/photoshop.png" },
		{ name: "Image Editing", image: "/tools/photoshop.png" },
		{ name: "Video Editing", image: "/tools/photoshop.png" },
		{ name: "Adobe Illustrator", image: "/tools/illustrator.png" },
		{ name: "Adobe Premier Pro", image: "/tools/premierpro.png" },
		{ name: "Davinci Resolve", image: "/tools/premierpro.png" },
		{ name: "Microsoft Office", image: "/tools/premierpro.png" },
		{ name: "Basic Computer Repair", image: "/tools/premierpro.png" }
		// { name: "Adobe After Effects", image: "/tools/aftereffects.png" }
	]

	const imageNumbers = Array.from({ length: 24 }, (_, i) => i + 4)

	return (
		<main className="bg-white min-h-screen text-[rgb(31,31,31)]">
			<Navbar />

			{/*  LANDING PAGE */}
			<section
				className="place-items-center grid pt-16 pb-10 h-screen"
				id="home"
			>
				<div className=" lg:mx-52 text-center">
					<h4 className=" pb-4 lg:pb-8 font-medium text-xl lg:text-2xl">
						Hello There!
					</h4>
					<h1 className="font-semibold text-3xl lg:text-7xl">
						I&apos;m Steven Kyle Evio
					</h1>
					{/* Socials */}
					<div className="flex justify-center gap-4 pt-4 lg:pt-10 text-md">
						<div className="place-items-center hover:border-orange-600 grid p-2 lg:p-4 border rounded-full w-fit hover:text-orange-600 cursor-pointer">
							<FaFacebookF />
						</div>
						<div className="place-items-center hover:border-orange-600 grid p-2 lg:p-4 border rounded-full w-fit hover:text-orange-600 cursor-pointer">
							<FaTwitter />
						</div>
						<div className="place-items-center hover:border-orange-600 grid p-2 lg:p-4 border rounded-full w-fit hover:text-orange-600 cursor-pointer">
							<FaInstagram />
						</div>
						<div className="place-items-center hover:border-orange-600 grid p-2 lg:p-4 border rounded-full w-fit hover:text-orange-600 cursor-pointer">
							<FaGithub />
						</div>
					</div>
				</div>
			</section>

			{/* ABOUT ME */}

			<section className="bg-[#EAEDF2] min-h-screen" id="about">
				<div className="lg:mx-52 py-20 mx-8 lg:px-0">
					{/* TITLE */}
					<div className="mb-12 uppercase">
						<h4 className="font-semibold text-4xl">
							ABOUT ME
						</h4>
						<div className="bg-orange-600 my-2 rounded-full w-14 h-[1.5px]"></div>
						<p className="text-gray-600">
							A Web Developer & UI/UX Designer Based
							in Philippines.
						</p>
					</div>
					{/* CONTENT */}
					<div className="flex flex-col lg:flex-row lg:items-center gap-14">
						{/* IMAGE */}
						<div className="relative">
							<div className="top-8 left-3 absolute flex flex-col gap-4 bg-white px-1 py-2 rounded-md text-lg">
								<div className="place-items-center grid p-2 rounded-full w-fit hover:text-orange-500 cursor-pointer">
									<FaFacebookF />
								</div>
								<div className="place-items-center grid p-2 rounded-full w-fit hover:text-orange-500 cursor-pointer">
									<FaTwitter />
								</div>
								<div className="place-items-center grid p-2 rounded-full w-fit hover:text-orange-500 cursor-pointer">
									<FaInstagram />
								</div>
								<div className="place-items-center grid p-2 rounded-full w-fit hover:text-orange-500 cursor-pointer">
									<FaGithub />
								</div>
							</div>
							<div className="bg-white p-4 rounded-lg w-full lg:w-[24rem] overflow-hidden">
								<Image
									src={"/images/kyle.jpg"}
									width={1500}
									height={2100}
									alt=""
									className="object-cover"
								/>
							</div>
						</div>
						{/* DETAILS */}
						<div className="lg:p-4">
							<div className="flex flex-col gap-5">
								<h3 className="font-semibold text-4xl">
									I&apos;m Steven Kyle Evio
								</h3>
								{/* <h6 className="inline-block space-x-1 lg:flex lg:gap-1 text-lg">
									A
									<span className="font-medium text-orange-500">
										Web Developer
									</span>
									&
									<span className="font-medium text-orange-500">
										UI/UX
									</span>
									Designer Based in
									<span className="font-medium text-orange-500">
										Philippines.
									</span>
								</h6> */}
								<p className="text-gray-500 leading-0">
									I&apos;m a passionate web
									developer from Puerto
									Princesa City, Palawan,
									Philippines. I excel in
									web development and
									design, with proficiency
									in Next.js framework,
									React, and WordPress for
									building modern and
									dynamic web applications.
									Additionally, I possess
									skills in graphic design
									using Adobe Creative Suite
									tools, enhancing the
									visual appeal of digital
									projects.
								</p>
								{/* PERSONAL DETAILS */}
								<div className="gap-3 gap-x-10 grid grid-cols-1 lg:grid-cols-2 mt-5">
									{personalDetails.map(
										item => (
											<div
												key={
													item.label
												}
												className="grid grid-cols-3 w-full"
											>
												<h6 className="font-medium">
													{
														item.label
													}
												</h6>

												<p className="col-span-2 text-wrap break-words">
													{
														item.value
													}
												</p>
											</div>
										)
									)}
									<Button
										className="mt-6 w-fit hover:bg-orange-500"
										size={"lg"}
									>
										DOWNLOAD CV
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* SKILLS */}
			<section
				className="place-items-center grid py-20 min-h-screen"
				id="skills"
			>
				<div className="lg:mx-52 mx-8">
					<div className="mb-12 uppercase">
						<h4 className="font-semibold text-4xl">
							Skills
						</h4>
						<div className="bg-orange-600 my-2 rounded-full w-14 h-[1.5px]"></div>
						<p className="text-gray-600">
							A Web Developer & UI/UX Designer Based
							in Philippines.
						</p>
					</div>
					{/* TOOLS */}
					<div className="flex flex-wrap gap-4">
						{tools.map(item => (
							<div
								key={item.name}
								className="bg-gray-200 hover:bg-orange-500 px-6 py-1 rounded-full w-fit hover:text-white cursor-default"
							>
								{item.name}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* PROJECTS */}
			<section className="py-20 min-h-screen" id="projects">
				<div className="lg:mx-52 mx-8">
					<div className="mb-12 uppercase">
						<h4 className="font-semibold text-4xl">
							Projects{" "}
							<span className="text-sm text-gray-700 font-normal">
								( 24 images )
							</span>
						</h4>
						<div className="bg-orange-600 my-2 rounded-full w-14 h-[1.5px]"></div>
						<p className="text-gray-600">
							A Web Developer & UI/UX Designer Based
							in Philippines.
						</p>
					</div>
					{/* SAMPLEs */}
					<div className="gap-10 gap-y-20 grid grid-cols-1 lg:grid-cols-2">
						{imageNumbers.map(i => (
							<div
								key={i}
								className="bg-white shadow-lg p-1"
							>
								<div className="relative h-[36rem]">
									<Image
										src={`/images/projects/${i}.jpg`}
										alt=""
										fill
										className="absolute object-contain"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* GET IN TOUCH */}
			<section
				className="py-20 min-h-screen bg-[#EAEDF2]"
				id="contact"
			>
				<div className="lg:mx-52 mx-8">
					<div className="mb-12 uppercase">
						<h4 className="font-semibold text-4xl">
							Get in touch
						</h4>
						<div className="bg-orange-600 my-2 rounded-full w-14 h-[1.5px]"></div>
						<p className="text-gray-600">
							A Web Developer & UI/UX Designer Based
							in Philippines.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-y-4 ">
						{/* FORM */}
						<div className="bg-white shadow-md rounded-lg p-5 lg:p-10 col-span-2">
							<h5 className="mb-8 text-lg uppercase font-medium">
								Say Something
							</h5>
							<form action="">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
									<Input placeholder="Name *" />
									<Input placeholder="Email *" />
									<Input
										placeholder="Subject *"
										className="lg:col-span-2"
									/>
									<Textarea
										placeholder="Your message *"
										className="lg:col-span-2"
									/>
								</div>
								<div className="mt-8">
									<Button
										className="bg-orange-500 uppercase hover:bg-orange-600"
										size={"lg"}
									>
										Send Message
									</Button>
								</div>
							</form>
						</div>
						{/* Details */}
						<div className="space-y-4 ">
							{/* address */}
							<div className="bg-white shadow-md rounded-lg p-10 flex items-center gap-6 ">
								<FaLocationArrow className="text-5xl text-orange-500" />
								<div>
									<h6 className="font-medium">
										My Address
									</h6>
									<p>
										Puerto Princesa
										City, Palawan
										Philippines 5300
									</p>
								</div>
							</div>
							{/* phone */}
							<div className="bg-white shadow-md rounded-lg p-10 flex items-center gap-6">
								<FaMobile className="text-3xl text-orange-500" />
								<div className="space-y-2">
									<h6 className="font-medium">
										Phone Number
									</h6>
									<p>(+63) 930-178-2255</p>
								</div>
							</div>
							{/* Email */}
							<div className="bg-white shadow-md rounded-lg p-10 flex items-center gap-6">
								<FaMailBulk className="text-3xl text-orange-500" />
								<div>
									<h6 className="font-medium">
										Email Address
									</h6>
									<p>
										steven.evio@gmail.com
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FOOTER */}
			<footer className="bg-black text-gray-400 py-4 ">
				<div className="flex flex-col lg:flex-row gap-4 justify-between lg:mx-52 items-center mx-8">
					{/* Socials */}
					<div className="flex justify-center gap-4 text-md">
						<div className="place-items-center hover:border-orange-600 grid rounded-full w-fit hover:text-orange-600 cursor-pointer">
							<FaFacebookF />
						</div>
						<div className="place-items-center hover:border-orange-600 grid rounded-full w-fit hover:text-orange-600 cursor-pointer">
							<FaTwitter />
						</div>
						<div className="place-items-center hover:border-orange-600 grid rounded-full w-fit hover:text-orange-600 cursor-pointer">
							<FaInstagram />
						</div>
						<div className="place-items-center hover:border-orange-600 grid rounded-full w-fit hover:text-orange-600 cursor-pointer">
							<FaGithub />
						</div>
					</div>
					<p>© 2024 copyright all right reserved</p>
				</div>
			</footer>
		</main>
	)
}
