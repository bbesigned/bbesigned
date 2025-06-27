import { IBannerHeader } from "types/common/ComponentsProps";

import BannerLogo from "../bannerLogo/bannerLogo";

import LetsTalkButton from "../letsTalkButton/letsTalkButton";

import MenuButton from "../menuButton/menuButton";

import styles from "./bannerHeader.module.scss";

const BannerHeader = ({ isDark, smallLogo }: IBannerHeader) => {
	return (
		<>
			<header className={styles.headerWrap}>
				<div className={styles.headerContainer}>
					<BannerLogo isDark={isDark} smallLogo={smallLogo} />
					<div className={styles.navigationWrap}>
						<LetsTalkButton isDark={isDark} />
						<MenuButton isDark={isDark} />
					</div>
				</div>
			</header>
		</>
	);
};

export default BannerHeader;
