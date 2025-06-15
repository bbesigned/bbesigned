import { Footer } from "components/footer/footer";

import Banner from "../components/banner/banner";

import styles from "./page.module.scss";

const notoSans = Noto_Sans({
	weight: ["300", "600", "900"],
	subsets: ["latin"],
	display: "swap",
});

export default function Home() {
	return (
		<div className={`${styles.page}`}>
			<Banner />
			<Footer />
		</div>
	);
}
