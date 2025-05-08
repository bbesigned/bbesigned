import Link from "next/link";

import Banner from "../components/banner/banner";

import styles from "./page.module.scss";

export default function Home() {
	return (
		<div className={`${styles.page}`}>
			<Banner />
			<Link href={"/projectExamples"}>Project Examples</Link>
		</div>
	);
}
