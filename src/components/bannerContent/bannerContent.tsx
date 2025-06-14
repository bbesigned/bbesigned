import cn from "classnames";

import { IBannerContent } from "../../types/common/ComponentsProps";

import styles from "./bannerContent.module.scss";

const BannerContent = ({ leftText, rightText }: IBannerContent) => {
	const renderLeftText = () => {
		return leftText.map((text, index) => (
			<p key={index} className={styles.leftBlockBannerWrapper__title}>
				{text}
			</p>
		));
	};

	const renderRightText = () => {
		return rightText.map((text, index) => (
			<div key={index} className={styles.rightBlockBannerContainer}>
				{text.split("").map((letter, letterIndex) => (
					<span
						key={letterIndex}
						className={cn(styles.rightBlockBannerContainer__letter, {
							[styles.rightBlockBannerContainer__letter_shadow]: index < 2,
						})}>
						{letter}
					</span>
				))}
			</div>
		));
	};

	return (
		<div className={styles.bannerContentWrap}>
			<div className={styles.leftBlockBannerWrapper}>{renderLeftText()}</div>
			<div className={styles.rightBlockBannerWrap}>{renderRightText()}</div>
			<div className={cn(styles.transparentLetter, styles.transparentLetterLeft)}>concept</div>
			<div className={cn(styles.transparentLetter, styles.transparentLetterRight)}>PROTOTYPE</div>
		</div>
	);
};

export default BannerContent;
