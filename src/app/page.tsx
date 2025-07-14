import Link from "next/link";

import { Footer } from "components/footer/footer";

import Works from "components/works/works";

import Banner from "../components/banner/banner";

import styles from "./page.module.scss";
import AboutUs from "./aboutUs/page";

export default function Home() {
	return (
		<div className={styles.page}>
			<Banner />

			<Link className={styles.page__link} href={"/projectExamples"}>
				Project Examples link
			</Link>
			<Link className={styles.page__link} href={"/personalData"}>
				Personal Data
			</Link>

			<Works />

			<AboutUs />

			<Footer />
		</div>
	);
}
