import Link from "next/link";

import { Footer } from "components/footer/footer";

import Banner from "../components/banner/banner";

import styles from "./page.module.scss";

export default function Home() {
	return (
		<div className={`${styles.page}`}>
			<Banner />
			<Link className={styles.page__link} href={"/projectExamples"}>
				Project Examples link
			</Link>
			<Footer />
		</div>
	);
}
