import SupportButton from "../supportButton/supportButton";

import commonStyles from "./bannerFooter.module.scss";

const BannerFooter = () => {
	return (
		<footer className={commonStyles.footer}>
			<div className={commonStyles["footer__container"]}>
				<SupportButton />
			</div>
		</footer>
	);
};

export default BannerFooter;
