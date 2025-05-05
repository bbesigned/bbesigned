import VectorLetter from "../vectorLetter/VectorLetter";

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
					<VectorLetter key={letterIndex} letter={letter} withShadow={index < 2} />
				))}
			</div>
		));
	};

	return (
		<div className={styles["bannerContentWrap"]}>
			<div className={styles["leftBlockBanner"]}>
				{renderLeftText()}
			</div>
			<div className={styles["rightBlockBanner"]}>
				{renderRightText()}
			</div>
		</div>
	);
};

export default BannerContent;
