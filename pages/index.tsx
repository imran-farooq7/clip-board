import type { NextPage } from "next";
import Access from "../components/Access";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Snippets from "../components/Snippets";
import SuperShot from "../components/SuperShot";

const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<Snippets />
			<Features />
			<Access />
			<SuperShot />
		</>
	);
};

export default Home;
