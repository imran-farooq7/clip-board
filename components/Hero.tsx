import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.svg";

const Hero = () => {
	return (
		<section>
			<div className="section-container mb-40 px-10 pt-16 section-container">
				<Image
					src={Logo}
					alt="logo"
					className="mx-auto my-16"
					width={"200px"}
				/>
				<h3 className="my-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
					A history of everything you copied
				</h3>
				<p className="max-w-3xl mx-auto mb-10 text-grayishBlue text-2xl">
					Clipboard allows you to track and organize everything you copy.
					Instantly access your clipboard on all your devices.
				</p>
				<div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
					<Link href="#">
						<a className="p-4 px-4 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80 md:px-8">
							Download for IOS
						</a>
					</Link>
					<Link href="#">
						<a className="p-4 px-4 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80 md:px-8">
							Download for MAC
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
