import type { NextPage } from "next";
import Access from "../components/Access";
import Bottom from "../components/Bottom";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Reference from "../components/Reference";
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
			<Reference />
			<Bottom />
			<Footer />
		</>
	);
};

export default Home;
