import React from "react";

import FeatureItem from "./FeatureItem";

const Access = () => {
	return (
		<section id="access">
			<div className="section-container px-10 my-20">
				<h3 className="my-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
					Access Clipboard Anywhere
				</h3>
				<p className="max-w-3xl mx-auto mb-20 text-xl leading-9 text-grayishBlue">
					Whether you’re on the go, or at your computer, you can access all your
					Clipboard snippets in a few simple clicks.
				</p>
				<img
					src="../images/image-devices.png"
					alt="devices"
					className="mx-auto"
				/>
			</div>
		</section>
	);
};

export default Access;
