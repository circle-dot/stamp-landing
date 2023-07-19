import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Logo from "./components/Logo";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tr from-[#1A2467] via-zinc-600/20 to-[#1A2467]">
			<div className="center">
				<Logo />
			</div>
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{/* {navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))} */}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-[#FDE884] cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Geo Stamp Network
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				{/* <div className="override">
					<iframe width="640" height="480" src="https://sketchfab.com/models/c54ea3927b854b76b531993daa793f2e/embed?autostart=1&preload=1&transparent=1&ui_theme=dark&ui_infos=0" allow="autoplay; fullscreen; vr"></iframe>
				</div> */}

				<h2 className="text-md align-bottom text-white">
					<Link
						target="_blank"
						href="https://twitter.com/0xPetra"
						className="text-white duration-500 hover:text-zinc-300 hover:text-lg"
					>
						contact
					</Link>
				</h2 >
			</div>
		</div>
	);
}
