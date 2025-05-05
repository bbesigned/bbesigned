import cn from "classnames";

import { IBannerContent } from "../../types/common/ComponentsProps";

import styles from "./bannerContent.module.scss";

const BannerContent = ({ leftText, rightText }: IBannerContent) => {
	const renderLeftText = () => {
		return leftText.map((text, index) => (
			<p key={index} className={styles["leftBlockBanner__title"]}>
				{text}
			</p>
		));
	};

	const renderRightText = () => {
		return rightText.map((text, index) => (
			<div key={index} className={styles["rightBlockBanner__title"]}>
				{text.split("").map((letter, letterIndex) => (
					<span
						key={letterIndex}
						className={cn(styles["rightBlockBanner__title__letter"], {
							[styles["rightBlockBanner__title__letter--shadow"]]: index < 2,
						})}>
						{letter}
					</span>
				))}
			</div>
		));
	};

	return (
		<div className={styles["bannerContentWrap"]}>
			<div className={styles["leftBlockBanner"]}>{renderLeftText()}</div>
			<div className={styles["rightBlockBanner"]}>{renderRightText()}</div>
		</div>
	);
};

export default BannerContent;
