import Image from "next/image";
import cn from "classnames";

import { IWorkCard } from "types/common/ComponentsProps";

import style from "./workCard.module.scss";

export const WorkCard = ({ bigCard, classname }: IWorkCard) => {
	const workWrapperClasses = cn({
		[style.workWrapper]: true,
		[style.workWrapper_large]: bigCard,
		[style.workWrapper_small]: !bigCard,
	});
	return (
		<div className={cn(classname, workWrapperClasses)}>
			<div className={style.imageContainer}>
				<span className={style.imageContainer__chips}>Web design</span>
				<Image
					className={style.imageContainer__image}
					src={bigCard ? "/worksPreviewImageLarge.jpg" : "/worksPreviewImageSmall.jpg"}
					fill
					sizes={bigCard ? "(max-width: 2561px) 1392px" : "(max-width: 2561px) 988px"}
					priority
					alt="work image"></Image>
			</div>
			<p className={style.workWrapper__companyName}>Company name</p>
			<h3 className={style.workWrapper__title}>Turning a legend into an icon</h3>
		</div>
	);
};
