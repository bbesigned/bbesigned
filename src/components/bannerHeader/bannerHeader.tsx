import BannerLogo from "../bannerLogo/bannerLogo";

import LetsTalkButton from "../letsTalkButton/letsTalkButton";

import MenuButton from "../menuButton/menuButton";

import styles from "./bannerHeader.module.scss";

const BannerHeader = () => {
	return (
		<>
			<header className={styles.headerWrap}>
				<div className={styles.headerContainer}>
					<BannerLogo smallLogo={false} />
					<div className={styles.navigationWrap}>
						<LetsTalkButton />
						<MenuButton />
					</div>
				</div>
			</header>
		</>
	);
};

export default BannerHeader;
