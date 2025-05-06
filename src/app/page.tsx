import Banner from "../components/banner/banner";

import Link from "next/link";

import styles from "./page.module.scss";

export default function Home() {
	return (
		<div className={`${styles.page}`}>
			<Banner />
			<Link href={"/projectExamples"}>Project Examples</Link>
		</div>
	);
}
