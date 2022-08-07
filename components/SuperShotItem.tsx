import Image from "next/image";
import React from "react";
interface IProps {
	title: string;
	description: string;
	image: string;
}
const SuperShotItem = (props: IProps) => {
	const { title, description, image } = props;
	return (
		<div className="flex flex-col items-center space-y-5">
			<Image
				src={image}
				alt=""
				className="mb-6"
				width={"44px"}
				height={"40px"}
			/>
			<h5>{title}</h5>
			<p className="max-w-md text-grayishBlue">{description}</p>
		</div>
	);
};

export default SuperShotItem;
