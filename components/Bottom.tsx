import Link from "next/link";
import React from "react";

const Bottom = () => {
	return (
		<section>
			<div className="section-container my-20 space-y-9 px-10">
				<h3 className="text-5xl font-bold text-darkGrayishBlue">
					Clipboard for IOS and MacOS
				</h3>
				<p className="mx-auto max-w-3xl text-center text-grayishBlue">
					Available for free on the App Store. Download for Mac or iOS, sync
					with iCloud and you're ready to start adding to your clipboard.
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

export default Bottom;
