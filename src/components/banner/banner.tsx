import BannerHeader from "../bannerHeader/bannerHeader";

import BannerContent from "../bannerContent/bannerContent";

import BannerFooter from "../bannerFooter/bannerFooter";

import commonStyles from "../../app/page.module.scss";

import styles from "./banner.module.scss";

const Banner = () => {
	const leftText = ["BRANDING", "WEB DEVELOPMENT", "APP DEVELOPMENT"];
	const rightText = ["YOU DESIRE", "WE", "DESIGN"];

	return (
		<div className={styles.bannerWrap}>
			<video autoPlay loop muted playsInline className={styles.bannerWrap__backgroundVideo}>
				<source src="/bannerBackgroundVideo.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className={commonStyles.container}>
				<div className={styles.bannerWrap__header}>
					<BannerHeader />
				</div>
				<BannerContent leftText={leftText} rightText={rightText} />
				<BannerFooter />
			</div>
		</div>
	);
};

export default Banner;
