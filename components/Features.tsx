import React from "react";

import FeatureItem from "./FeatureItem";

const Features = () => {
	return (
		<section id="features">
			<div className="section-container px-10 my-20">
				<div className="relative flex flex-col md:flex-row md:space-x-32">
					<div className="md:w-1/2">
						<img
							src="../images/image-computer.png"
							className="md:absolute top-0 right-[50%]"
						/>
					</div>
					<div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
						<FeatureItem
							title="Quick Search"
							description=" Easily search your snippets by content, category, web address,
                application, and more."
						/>
						<FeatureItem
							title="iCloud Sync"
							description="Instantly saves and syncs snippets across all your devices."
						/>
						<FeatureItem
							title="Completely History"
							description="Retrieve any snippets from the first moment you started using
                            the app."
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
