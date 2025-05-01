import VectorLetter from "../vectorLetter/VectorLetter";

import { IBannerContent } from "../../types/common/ComponentsProps";

import commonStyles from "./bannerContent.module.scss";

const BannerContent = ({ leftText, rightText }: IBannerContent) => {
	const renderLeftText = () => {
		return leftText.map((text, index) => (
			<p key={index} className={commonStyles["banner__left-block__left-text"]}>
				{text}
			</p>
		));
	};

	const renderRightText = () => {
		return rightText.map((text, index) => (
			<div key={index} className={commonStyles["banner__right-block__right-text"]}>
				{text.split("").map((letter, letterIndex) => (
					<VectorLetter key={letterIndex} letter={letter} withShadow={index < 2} />
				))}
			</div>
		));
	};

	return (
		<div className={commonStyles["banner__container"]}>
			<div className={commonStyles["banner__left-block"]}>
				{renderLeftText()}
			</div>
			<div className={commonStyles["banner__right-block"]}>
				{renderRightText()}
			</div>
		</div>
	);
};

export default BannerContent;
