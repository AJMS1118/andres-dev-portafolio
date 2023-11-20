import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../contants";

import { logo, close, menu } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<nav
				className={`${styles.paddingX} w-full flex items-center fixed z-20 top-0 py-5 bg-primary`}
			>
				<div className="w-full flex justify-between items-center max-w-7xl  mx-auto">
					<Link
						to="/"
						className="flex items-center gap-2"
						onClick={() => {
							setActive("");
							window.scrollTo(0, 0);
						}}
					>
						<img src={logo} alt="logo1" className="w-12 h-12 object-contain" />
						<p className="text-white text-[18px] font-bold cursor-pointer flex">
							Andres &nbsp;
							<span className="sm:block hidden">| Quesada</span>
						</p>
					</Link>
					<ul className="list-none hidden sm:flex flex-row gap-10">
						{navLinks.map((link) => (
							<li
								key={link.id}
								className={`${
									active === link.title ? "text-white" : "text-secondary"
								} hover:text-white text-[18px] font-medium cursor-pointer`}
								onClick={() => {
									setActive(link.title);
								}}
							>
								<a href={`#${link.id}`} className="text-white">
									{link.title}
								</a>
							</li>
						))}
					</ul>
					<div className="sm:hidden flex flex-1 justify-end items-center">
						<img
							src={toggle ? close : menu}
							alt="mobile menu"
							className="w-[28px] h-[28px] object-contain cursor-pointer"
							onClick={() => setToggle(!toggle)}
						/>
						<div
							className={`${
								!toggle ? "hidden" : "flex"
							} absolute top-20 my-2 p-6 black-gradient right-0 mx-4 min-w-[140px] z-10 rounded-xl`}
						>
							<ul className="list-none flex flex-col justify-end items-start gap-4">
								{navLinks.map((link) => (
									<li
										key={link.id}
										className={`${
											active === link.title ? "text-white" : "text-secondary"
										} font-poppins text-[16px] font-medium cursor-pointer`}
										onClick={() => {
											setToggle(!toggle);
											setActive(link.title);
										}}
									>
										<a href={`#${link.id}`} className="text-white">
											{link.title}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
