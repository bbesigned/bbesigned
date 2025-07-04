import ScrollButton from "components/scrollButton/scrollButton";

import SupportButton from "../supportButton/supportButton";


import styles from "./bannerFooter.module.scss";

const BannerFooter = () => {
	return (
		<footer className={styles.footerWrap}>
			<div className={styles.footerContainer}>
				<ScrollButton />
				<SupportButton />
			</div>
		</footer>
	);
};

export default BannerFooter;
