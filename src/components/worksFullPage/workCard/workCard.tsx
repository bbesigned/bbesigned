"use client";
import Image from "next/image";
import cn from "classnames";

import { IWorkCard } from "types/common/ComponentsProps";

import { useWindowWidth } from "hooks/useWindowWidth";

import style from "./workCard.module.scss";

export const WorkCard = ({ bigCard, classname }: IWorkCard) => {
	// const [windowWidth] = useWindowWidth();
	// console.log(windowWidth);
	const widthBig = {
		"2560": 1392,
		"1920": 1018,
		"1440": 738,
		"1170": 581,
		"1024": 542,
		"768": 413,
	};
	const widthSmall = {
		"2560": 988,
		"1920": 722,
		"1440": 522,
		"1170": 409,
		"1024": 382,
		"768": 295,
	};

	const heightImage = {
		"2560": 664,
		"1920": 498,
		"1440": 373,
		"1170": 303,
		"1024": 265,
		"768": 199,
	};
	const imageClass = cn({
		[style.imageContainer__image]: true,
		[style.imageContainer__image_large]: bigCard,
		[style.imageContainer__image_small]: !bigCard,
	});
	return (
		<div className={cn(style.workWrapper, classname)}>
			<div className={style.imageContainer}>
				<span className={style.imageContainer__chips}>Web design</span>
				<Image
					className={imageClass}
					src={bigCard ? "/worksPreviewImageLarge.jpg" : "/worksPreviewImageSmall.jpg"}
					width={bigCard ? widthBig["2560"] : widthSmall["2560"]}
					height={heightImage["2560"]}
					priority
					alt="work image"></Image>
			</div>
			<p className={style.workWrapper__companyName}>Company name</p>
			<h3 className={style.workWrapper__title}>Turning a legend into an icon</h3>
		</div>
	);
};
