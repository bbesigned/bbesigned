import { IBannerHeaderProps } from "types/common/ComponentsProps";

import BannerLogo from "../bannerLogo/bannerLogo";

import LetsTalkButton from "../letsTalkButton/letsTalkButton";

import MenuButton from "../menuButton/menuButton";

import styles from "./bannerHeader.module.scss";

const BannerHeader = ({dark, smallLogo}: IBannerHeaderProps) => { // НАЧАТЬ С ПРОПСА
	return (
		<>
			<header className={styles.headerWrap}>
				<div className={styles.headerContainer}>
					<BannerLogo dark={dark} smallLogo={smallLogo}/>
					<div className={styles.navigationWrap}>
						<LetsTalkButton dark={dark}/>
						<MenuButton dark={dark}/>
					</div>
				</div>
			</header>
		</>
	);
};

export default BannerHeader;
