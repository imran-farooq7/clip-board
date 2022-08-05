import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-gray-50">
			<div className="section-container">
				<div className="flex flex-col items-center justify-between md:flex-row">
					<img src="/images/logo.svg" alt="logo" className="scale-50" />
					<div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
						<div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
							<div className="flex flex-col space-y-4 text-center md:text-left">
								<div>
									<Link href="/">
										<a className="hover:shadow-strongCyan">FAQ</a>
									</Link>
								</div>
								<div>
									<Link href="/contact">
										<a className="hover:shadow-strongCyan">CONTACT US</a>
									</Link>
								</div>
							</div>
							<div className="flex flex-col space-y-4 text-center md:text-left">
								<div>
									<Link href="/absolute">
										<a className="hover:shadow-strongCyan">Privacy</a>
									</Link>
								</div>
								<div>
									<Link href="/about">
										<a className="hover:shadow-strongCyan">Press kit</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="flex justify-between w-32 py-1">
						<Link href="#">
							<img
								src="/images/icon-facebook.svg"
								className="h-5 hover:fill-cyan-300"
								alt="fb"
							/>
						</Link>
						<Link href="#">
							<img
								src="/images/icon-instagram.svg"
								className="h-5 hover:fill-cyan-300"
								alt="instagram"
							/>
						</Link>
						<Link href="#">
							<img
								src="/images/icon-twitter.svg"
								className="h-5 hover:fill-cyan-300"
								alt="fb"
							/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
