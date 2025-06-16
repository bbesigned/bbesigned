import { Footer } from "components/footer/footer";

import Works from "components/works/works";

import Banner from "../components/banner/banner";

import styles from "./page.module.scss";

export default function Home() {
	return (
		<div className={styles.page}>
			<Banner />
			<Works />
			<Footer />
		</div>
	);
}
