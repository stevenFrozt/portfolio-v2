import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { PiCertificate } from "react-icons/pi"
import {
	FaFacebookF,
	FaLinkedin,
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

	const projects = [
		{
			imageUrl: "/images/projects/4.jpg",
			title: "Login & Landing Page Design",
			description:
				"Created responsive login and landing pages using HTML and CSS, featuring clean designs, user-friendly interfaces, and seamless experiences across devices."
		},
		{
			imageUrl: "/images/projects/5.jpg",
			title: "Instagram clone",
			description:
				"Developed an Instagram clone using Next.js for server-side rendering, styled with Tailwind CSS for a sleek, responsive design. Implemented Firebase v9 for real-time database and authentication, and used Zustand for state management. Integrated NextAuth for secure user authentication and seamless login experiences."
		},
		{
			imageUrl: "/images/projects/7.jpg",
			title: "FARMKONEK (CRMS)",
			description:
				"Contributed as a frontend developer to FarmKonek's Procurement CRM System. Implemented responsive, user-friendly interfaces and integrated APIs to ensure seamless interactions for procurement processes."
		},
		{
			imageUrl: "/images/projects/8.jpg",
			title: "Ecommerce Website",
			description:
				"Developed an unfinished ecommerce website using the React framework and a ecommerce API also planning to integrate stripe for transactions."
		},
		{
			imageUrl: "/images/projects/9.jpg",
			title: "Netflix Clone",
			description:
				"Developed a Netflix clone website using Vanilla JS and CSS, integrating The Movie Database (TMDB) API for dynamic movie listings and content. Created a responsive UI that mimics Netflix's design, featuring movie categories and smooth navigation"
		},
		{
			imageUrl: "/images/projects/10.jpg",
			title: "FarmKonekt Landing Page",
			description:
				"Designed a landing page for FarmKonek using Next.js, featuring a modern and responsive layout. The page highlights key features and services, ensuring an engaging user experience with fast load times and seamless navigation."
		},
		{
			imageUrl: "/images/projects/11.jpg",
			title: "Movie Website",
			description:
				"Developed a movie website for a school project using The Movie Database (TMDB) API. The site features dynamic movie listings, detailed information, and a user-friendly interface, showcasing key functionalities and real-time data integration."
		},
		{
			imageUrl: "/images/projects/13.jpg",
			title: "Web Design",
			description:
				"Created a web image design inspired by Michelangelo's 'The Creation of Adam,' featuring a modern interpretation of the iconic artwork. The design blends classic art with contemporary aesthetics to create a visually striking and unique web image."
		},
		{
			imageUrl: "/images/projects/14.jpg",
			title: "Photoshop - Neon Effect",
			description:
				"Created a striking Photoshop design featuring a neon line effect that surrounds a hand. The design uses glowing, colorful lines to accentuate the hand, creating a captivating and dynamic visual effect."
		},
		{
			imageUrl: "/images/projects/15.jpg",
			title: "Photoshop - Banner, Poster and Mockups",
			description:
				"Designed a series of eye-catching visuals including a banner, poster, and mockups using Photoshop. The designs feature modern aesthetics and professional layouts, tailored for various promotional and presentation needs."
		},
		{
			imageUrl: "/images/projects/16.jpg",
			title: "Photoshop - Portal Effect",
			description:
				"Created a captivating photo manipulation featuring Doctor Strange's portal effect. The design combines cinematic visuals with a personal touch to produce a striking and imaginative composition."
		},
		{
			imageUrl: "/images/projects/17.jpg",
			title: "Photoshop - Neon Effect with Lightning",
			description:
				"Created a dynamic lightning neon line effect using Photoshop, featuring vibrant, glowing lines that simulate the intensity and movement of lightning. Captured the perfect portrait to integrate seamlessly with the effect, adding an electrifying and visually striking element to the design."
		},
		{
			imageUrl: "/images/projects/18.jpg",
			title: "San Vicente MIS",
			description:
				"Developed the San Vicente MIS project using a robust tech stack including React, JavaScript, CSS, and Tailwind CSS for the frontend, and Node.js and MongoDB for the backend. This comprehensive solution ensures a modern, responsive user interface and efficient data management."
		},
		{
			imageUrl: "/images/projects/19.jpg",
			title: "Illustrator - Logo Creations",
			description:
				"Create distinctive logos for hackathons and startups. Designed impactful and visually appealing logos that capture the essence of each event or company, enhancing brand identity and recognition."
		},
		{
			imageUrl: "/images/projects/20.jpg",
			title: "Illustrator - Flat Designs and blend banner",
			description:
				"Designed flat-style graphics and blended banners using Adobe Illustrator. The flat designs feature clean, minimalist aesthetics, while the blended banners incorporate smooth color transitions and modern visual elements to create engaging and visually appealing graphics."
		},
		{
			imageUrl: "/images/projects/21.jpg",
			title: "PSU Virtual Map Tour",
			description:
				"Designed and develop the PSU Virtual Map Tour website for Palawan State University as my thesis project. The website helps students and staff navigate the campus while showcasing its beauty with interactive features, offering an immersive and informative virtual tour experience."
		},
		{
			imageUrl: "/images/projects/22.jpg",
			title: "Figma - Mamas Choice UX/UI",
			description:
				"Created the UX/UI design for 'Mama's Choice' mobile app using Figma. The design features a vibrant blue and yellow color scheme, creating a visually appealing and user-friendly interface. The mobile app focuses on providing an intuitive and engaging experience for users, with a modern and cohesive design."
		},
		{
			imageUrl: "/images/projects/23.jpg",
			title: "Video Editing",
			description:
				"Skilled in video editing using Premiere Pro, DaVinci Resolve, and After Effects. Expertise includes cutting, color grading, and enhancing videos with visual effects and motion graphics. Capable of creating polished and professional video content tailored to various needs and styles."
		},
		{
			imageUrl: "/images/projects/24.jpg",
			title: "Adobe XD - HealthConnect Website",
			description:
				"Designed the HealthConnect website using Adobe XD, with a focus on UI/UX principles. The project emphasizes a clean, intuitive interface and seamless user experience, ensuring easy navigation and accessibility while effectively communicating health information and services"
		},
		{
			imageUrl: "/images/projects/25.jpg",
			title: "Car Rental Website",
			description:
				"Developed a car rental template website using HTML, CSS, and JavaScript, with a focus on creating a user-friendly and visually appealing interface. The project includes a responsive layout and interactive features, with plans to integrate a Laravel backend for enhanced functionality and data management."
		},
		{
			imageUrl: "/images/projects/26.jpg",
			title: "Tabulation System",
			description:
				"Developed a tabulation system using Next.js and TypeScript, styled with Tailwind CSS, Shadcn UI, and Material UI. The system leverages React Table and React Query for efficient data management and querying, with NextAuth for authentication and Zustand for state management. Designed the UI in Figma and integrated Recharts for data visualization, creating a robust and interactive platform."
		},
		{
			imageUrl: "/images/projects/27.jpg",
			title: "One Cainta Health Center",
			description:
				"Developed the One Cainta Health Center website using Laravel PHP for the backend, with JavaScript, CSS, and Bootstrap for the frontend. The project incorporates a user-friendly and responsive design, created in Figma, to effectively showcase health center services and information while ensuring a seamless user experience."
		}
	]

	const certificates = [
		{
			name: "Modular Training for Web Design",
			year: 2015,
			company: "Make IT EZ"
		},
		{
			name: "Modular Training for Multi-Media Development and Photoshop",
			year: 2015,
			company: "Make IT EZ"
		},
		{
			name: "Data Privacy Awareness and Internet Media & Information Literacy",
			year: 2023,
			company: "DICT"
		},
		{
			name: "Digital Careers Expo",
			year: 2023,
			company: "DICT"
		},
		{
			name: "Digital jobs PH Web Development Training Program",
			year: 2023,
			company: "DICT",
			award: "OUTSTANDING TRAINEE"
		},
		{
			name: "Impact Hackathon Online 2020",
			year: 2020,
			company: "Impact Hub Manila"
		}
	]

	return (
		<main className="bg-white min-h-screen text-[rgb(31,31,31)]">
			<Navbar />

			{/*  LANDING PAGE */}
			<section
				className="place-items-center grid pt-16 pb-10 h-[100svh]"
				id="home"
			>
				<div className="lg:mx-52 text-center">
					<div className="overflow-hidden">
						<h4 className="pb-4 lg:pb-8 font-medium text-xl lg:text-2xl transition-all animate-show-up-greet duration-500">
							Hello There!
						</h4>
					</div>
					<div className="overflow-hidden">
						<h1 className="opacity-0 font-semibold text-3xl lg:text-7xl transition-all animate-show-up-name duration-500">
							I&apos;m Steven Kyle Evio
						</h1>
					</div>
					{/* Socials */}
					<div className="flex justify-center gap-4 pt-4 lg:pt-10 text-xl lg:text-md overflow-hidden">
						<a
							target="_blank"
							href={
								"https://www.facebook.com/steven.evio"
							}
						>
							<div className="place-items-center hover:border-orange-600 grid opacity-0 p-2 lg:p-4 border rounded-full w-fit hover:text-orange-600 animate-show-up-fb cursor-pointer">
								<FaFacebookF />
							</div>
						</a>
						<a
							target="_blank"
							href={
								"https://www.linkedin.com/in/steven-kyle-evio-088284219/"
							}
						>
							<div className="place-items-center hover:border-orange-600 grid opacity-0 p-2 lg:p-4 border rounded-full w-fit hover:text-orange-600 animate-show-up-ln cursor-pointer">
								<FaLinkedin />
							</div>
						</a>
						<a
							target="_blank"
							href={
								"https://www.instagram.com/kyle.evio/"
							}
						>
							<div className="place-items-center hover:border-orange-600 grid opacity-0 p-2 lg:p-4 border rounded-full w-fit hover:text-orange-600 animate-show-up-ig cursor-pointer">
								<FaInstagram />
							</div>
						</a>
						<a
							target="_blank"
							href={
								"https://github.com/stevenFrozt"
							}
						>
							<div className="place-items-center hover:border-orange-600 grid opacity-0 p-2 lg:p-4 border rounded-full w-fit hover:text-orange-600 animate-show-up-git cursor-pointer">
								<FaGithub />
							</div>
						</a>
					</div>
				</div>
			</section>

			{/* ABOUT ME */}

			<section className="bg-[#EAEDF2] min-h-screen" id="about">
				<div className="mx-8 lg:mx-52 lg:px-0 py-20">
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
					<div className="flex lg:flex-row flex-col lg:items-center gap-14">
						{/* IMAGE */}
						<div className="relative">
							<div className="top-8 left-3 absolute flex flex-col gap-4 bg-white px-1 py-2 rounded-md text-lg">
								<a
									target="_blank"
									href={
										"https://www.facebook.com/steven.evio"
									}
								>
									<div className="place-items-center grid p-2 rounded-full w-fit hover:text-orange-500 cursor-pointer">
										<FaFacebookF />
									</div>
								</a>
								<a
									target="_blank"
									href={
										"https://www.linkedin.com/in/steven-kyle-evio-088284219/"
									}
								>
									<div className="place-items-center grid p-2 rounded-full w-fit hover:text-orange-500 cursor-pointer">
										<FaLinkedin />
									</div>
								</a>
								<a
									target="_blank"
									href={
										"https://www.instagram.com/kyle.evio/"
									}
								>
									<div className="place-items-center grid p-2 rounded-full w-fit hover:text-orange-500 cursor-pointer">
										<FaInstagram />
									</div>
								</a>
								<a
									target="_blank"
									href={
										"https://github.com/stevenFrozt"
									}
								>
									<div className="place-items-center grid p-2 rounded-full w-fit hover:text-orange-500 cursor-pointer">
										<FaGithub />
									</div>
								</a>
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
								{/* <h6 className="inline-block lg:flex lg:gap-1 space-x-1 text-lg">
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
									<div className="flex lg:flex-row flex-col lg:items-center lg:gap-5 w-full">
										<a
											href="/CV.pdf"
											download="CV - Steven Kyle Evio"
										>
											<Button
												className="hover:bg-orange-500 mt-6 lg:w-fit uppercase"
												size={
													"lg"
												}
											>
												DOWNLOAD
												CV
											</Button>
										</a>
										<a
											href="/portfolio.pdf"
											download="Portfolio - Steven kyle Evio"
										>
											<Button
												className="hover:bg-orange-500 mt-4 lg:mt-6 lg:w-fit uppercase"
												size={
													"lg"
												}
											>
												DOWNLOAD
												Portfolio
											</Button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* CERTIFICATES */}
			<section
				className="items-center grid py-20 min-h-screen"
				id="certificates"
			>
				<div className="mx-8 lg:mx-52">
					<div className="mb-12 uppercase">
						<h4 className="font-semibold text-4xl">
							Certificates
						</h4>
						<div className="bg-orange-600 my-2 rounded-full w-14 h-[1.5px]"></div>
						<p className="text-gray-600">
							A Web Developer & UI/UX Designer Based
							in Philippines.
						</p>
					</div>
					{/* TOOLS */}
					<div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
						{certificates.map(i => (
							<div
								key={i.name}
								className="flex items-center gap-2 hover:border-orange-500 shadow-md p-4 border rounded-md transition-all hover:-translate-y-1 duration-300"
							>
								<div className="p-4">
									<PiCertificate className="text-4xl" />
								</div>
								<div>
									<div className="flex items-center gap-1 text-gray-500 text-sm">
										<p className="text-orange-500">
											{i.year}
										</p>
										-<p>{i.company}</p>
									</div>
									<h6 className="pt-1 text-md">
										{i.name}
									</h6>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SKILLS */}
			<section
				className="place-items-center grid py-20 min-h-screen"
				id="skills"
			>
				<div className="mx-8 lg:mx-52">
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
				<div className="mx-8 lg:mx-52">
					<div className="mb-12 uppercase">
						<h4 className="font-semibold text-4xl">
							Projects{" "}
							<span className="font-normal text-gray-700 text-sm">
								( {projects.length} items )
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
						{projects.map((i, index) => (
							<div
								key={i.imageUrl}
								className="bg-white shadow-lg p-1"
							>
								<div className="relative h-[36rem]">
									<Image
										src={i.imageUrl}
										alt=""
										fill
										className="absolute object-contain"
									/>
								</div>
								<div className="p-8">
									<h5 className="mt-4 mb-2 font-medium text-2xl">
										{index + 1}
										{".   "}
										{i.title}
									</h5>
									<p className="text-gray-700 leading-[1.8rem]">
										{i.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* GET IN TOUCH */}
			<section
				className="bg-[#EAEDF2] py-20 min-h-screen"
				id="contact"
			>
				<div className="mx-8 lg:mx-52">
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

					<div className="gap-y-4 lg:gap-6 grid grid-cols-1 lg:grid-cols-3">
						{/* FORM */}
						<div className="col-span-2 bg-white shadow-md p-5 lg:p-10 rounded-lg">
							<h5 className="mb-8 font-medium text-lg uppercase">
								Say Something
							</h5>
							<form action="">
								<div className="gap-4 grid grid-cols-1 lg:grid-cols-2">
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
										className="bg-orange-500 hover:bg-orange-600 uppercase"
										size={"lg"}
									>
										Send Message
									</Button>
								</div>
							</form>
						</div>
						{/* Details */}
						<div className="space-y-4">
							{/* address */}
							<div className="flex items-center gap-6 bg-white shadow-md p-10 rounded-lg">
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
							<div className="flex items-center gap-6 bg-white shadow-md p-10 rounded-lg">
								<FaMobile className="text-3xl text-orange-500" />
								<div className="space-y-2">
									<h6 className="font-medium">
										Phone Number
									</h6>
									<p>(+63) 930-178-2255</p>
								</div>
							</div>
							{/* Email */}
							<div className="flex items-center gap-6 bg-white shadow-md p-10 rounded-lg">
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
			<footer className="bg-black lg:py-4 pt-4 pb-28 text-gray-400">
				<div className="flex lg:flex-row flex-col justify-between items-center gap-4 mx-8 lg:mx-52">
					{/* Socials */}
					<div className="flex justify-center gap-4 text-md">
						<a
							target="_blank"
							href={
								"https://www.facebook.com/steven.evio"
							}
						>
							<div className="place-items-center hover:border-orange-600 grid rounded-full w-fit hover:text-orange-600 cursor-pointer">
								<FaFacebookF />
							</div>
						</a>
						<a
							target="_blank"
							href={
								"https://www.linkedin.com/in/steven-kyle-evio-088284219/"
							}
						>
							<div className="place-items-center hover:border-orange-600 grid rounded-full w-fit hover:text-orange-600 cursor-pointer">
								<FaLinkedin />
							</div>
						</a>
						<a
							target="_blank"
							href={
								"https://www.instagram.com/kyle.evio/"
							}
						>
							<div className="place-items-center hover:border-orange-600 grid rounded-full w-fit hover:text-orange-600 cursor-pointer">
								<FaInstagram />
							</div>
						</a>
						<a
							target="_blank"
							href={
								"https://github.com/stevenFrozt"
							}
						>
							<div className="place-items-center hover:border-orange-600 grid rounded-full w-fit hover:text-orange-600 cursor-pointer">
								<FaGithub />
							</div>
						</a>
					</div>
					<p>© 2024 copyright all right reserved</p>
				</div>
			</footer>
		</main>
	)
}
