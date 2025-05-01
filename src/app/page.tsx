import Banner from "../components/banner/banner";

import commonStyles from "./page.module.css";


export default function Home() {
	return (
		<div className={`${commonStyles.page}`}>
			<Banner />
		</div>
	);
}
