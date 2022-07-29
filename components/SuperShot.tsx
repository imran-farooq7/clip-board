import React from "react";
import SuperShotItem from "./SuperShotItem";

const SuperShot = () => {
	return (
		<section id="features">
			<div className="section-container px-10 my-20">
				<h3 className="my-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
					Supercharge your workflow
				</h3>
				<p className="max-w-3xl mx-auto mb-16 text-xl leading-9 text-grayishBlue">
					We've got the tools to boost your productivity.
				</p>
				<div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
					<SuperShotItem
						image="../images/icon-blacklist.svg"
						title="Create Blacklists"
						description="Easily search your snippets by content, category, web address,
                        application, and more."
					/>
					<SuperShotItem
						image="../images/icon-text.svg"
						title="Plain Text Snippets"
						description=" Remove unwanted formatting from copied text for a consistent look."
					/>
					<SuperShotItem
						image="../images/icon-preview.svg"
						title="Sneak Preview"
						description="Quick preview of all snippets on your Clipboard for easy access."
					/>
				</div>
			</div>
		</section>
	);
};

export default SuperShot;
