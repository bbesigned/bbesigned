import BannerLogo from "../bannerLogo/bannerLogo";

import LetsTalkButton from "../letsTalkButton/letsTalkButton";

import MenuButton from "../menuButton/menuButton";

import commonStyles from "./bannerHeader.module.scss";

const BannerHeader = () => {
	return (
		<header className={commonStyles.header}>
			<div className={commonStyles["header__container"]}>
				<BannerLogo smallLogo={false} />
				<div className={commonStyles["header__container__navigation"]}>
					<LetsTalkButton />
					<MenuButton />
				</div>
			</div>
		</header>
	);
};

export default BannerHeader;
