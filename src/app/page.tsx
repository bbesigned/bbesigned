// eslint-disable-next-line camelcase
import { Noto_Sans } from "next/font/google";

import Banner from "../components/banner/banner";

import styles from "./page.module.css";

const notoSans = Noto_Sans({
	weight: ["300", "600", "900"],
	subsets: ["latin"],
	display: "swap",
});

export default function Home() {
	return (
		<div className={`${styles.page} ${notoSans.className}`}>
			<Banner/>
		</div>
	);
}