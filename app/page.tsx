import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Logo from "./components/Logo";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];
// ᔑ ᒥ ᐱ ᗰ ᑭ

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tr from-[#000] via-zinc-600/20 to-[#000]">
			<div className="my-10 center">
				<Logo />
			</div>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<Particles
				className="absolute inset-0 -z-10 animate-fade-in text-red"
				quantity={300}
			/>

			<h1 className="z-10 text-4xl bg-[#fff] py-5 text-transparent duration-10000 cursor-default font-display text-edge-outline animate-title sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
				Stamp Network
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="text-center animate-fade-in">

				<h1 className="z-10 text-md text-white py-5 cursor-default">
					Web of Trust for communities
				</h1>


				{/* <h2 className="text-md align-bottom text-white hover-scale">
				<Link
					target="_blank"
					href="https://docs.stamp.network"
					className="hover:text-white duration-500 text-[#FDE884]"
				>
					docs
				</Link>
			</h2> */}

				<h2 className="text-md align-bottom text-white hover-scale">
					<Link
						target="_blank"
						href="mailto:petra@circledot.tech"
						className="hover:text-white duration-500 text-[#FDE884]"
					>
						contact
					</Link>
				</h2>

			</div>
		</div>
	);
}
