import BannerHeader from "../bannerHeader/bannerHeader";

import BannerContent from "../bannerContent/bannerContent";

import BannerFooter from "../bannerFooter/bannerFooter";

import stylesPage from "../../app/page.module.css";

import commonStyles from "./banner.module.scss";

const Banner = () => {
	const leftText = ["BRANDING", "WEB DEVELOPMENT", "APP DEVELOPMENT"];
	const rightText = ["YOU DESIRE", "WE", "DESIGN"];

	return (
		<div className={commonStyles.banner}>
			<video autoPlay loop muted playsInline className={commonStyles["banner__background-video"]}>
				<source src="/bannerBackgroundVideo.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className={stylesPage.container}>
				<BannerHeader />
				<BannerContent leftText={leftText} rightText={rightText} />
				<BannerFooter />
			</div>
		</div>
	);
};

export default Banner;
