"use client";

import cn from "classnames";

import { IBannerContent } from "../../types/common/ComponentsProps";

import styles from "./bannerContent.module.scss";

const BannerContent = ({ leftText, rightText }: IBannerContent) => {
	const transformedRightText = [rightText[0], `${rightText[1]} ${rightText[2]}`];

	const renderLeftText = () =>
		leftText.map((text, index) => (
			<p key={index} className={styles.leftBlockBannerWrapper__title}>
				{text}
			</p>
		));

	const renderRightText = () =>
		rightText.slice(0, -1).map((text, index) => (
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

	const renderTransformRightText = () =>
		transformedRightText.map((text, index) => (
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

	return (
		<div className={styles.bannerContentWrap}>
			<div className={styles.info}>
				<div className={styles.leftBlockBannerWrapper}>{renderLeftText()}</div>

				<div className={cn(styles.rightBlockBannerWrap, styles.desktopOnly)}>
					{renderRightText()}
				</div>
				<div className={cn(styles.rightBlockBannerWrap, styles.mobileOnly)}>
					{renderTransformRightText()}
				</div>
			</div>

			<div className={styles.marqueeWrapper}>
				<div className={styles.marquee}>
					<div className={styles.marqueeGroup}>
						<p className={styles.transparentLetter}>CONCEPTUALIZE</p>
						<p
							className={cn(
								styles.rightBlockBannerContainer__letter,
								styles.rightBlockBannerContainer__letter_shadow,
							)}>
							{rightText[2]}
						</p>
						<p className={styles.transparentLetter}>PROTOTYPE</p>
					</div>
					<div className={styles.marqueeGroup}>
						<p className={styles.transparentLetter}>CONCEPTUALIZE</p>
						<p
							className={cn(
								styles.rightBlockBannerContainer__letter,
								styles.rightBlockBannerContainer__letter_shadow,
							)}>
							{rightText[2]}
						</p>
						<p className={styles.transparentLetter}>PROTOTYPE</p>
					</div>
				</div>
			</div>

			<div className={styles.leftBlockBannerWrapper_smallMonitor}>{renderLeftText()}</div>
		</div>
	);
};

export default BannerContent;
