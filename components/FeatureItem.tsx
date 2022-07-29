import React from "react";

interface IProps {
	title: string;
	description: string;
}
const FeatureItem = (props: IProps) => {
	return (
		<div>
			<h5>{props.title}</h5>
			<p className="max-w-md text-grayishBlue">{props.description}</p>
		</div>
	);
};

export default FeatureItem;
