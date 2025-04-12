import Image from "next/image";

import Banner from "../components/Banner/Banner";

export default function Home() {
	const leftText = ["BRANDING", "WEB DEVELOPMENT", "APP DEVELOPMENT"];
	const rightText = ["YOU DESIRE", "WE", "DESIGN"];
	
	return (
		<div >
			<Banner leftText={leftText} rightText={rightText} />
		</div>
	);
}
