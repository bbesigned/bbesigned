import Image from "next/image";

import cn from "classnames";

import { BackButton } from "components/backButton/backButton";

import BannerHeader from "components/bannerHeader/bannerHeader";

import { Button } from "components/button/button";

import { WorkCard } from "components/worksFullPage/workCard/workCard";

import style from "./worksPage.module.scss";

export default function Page() {
	return (
		<div className={style.worksPageWrapper}>
			<div className={style.worksPageContainer}>
				<BannerHeader />
				<BackButton classname={style.backButton} />
				<Image
					className={style.worksPageContainer__imageTitle}
					src="/Works.png"
					width={2400}
					height={490}
					priority
					alt="works"></Image>
				<div className={style.worksFilterWrapper}>
					<Button variant="light">All</Button>
					<Button variant="transparent">UX/UI</Button>
					<Button variant="transparent">Web Design</Button>
					<Button variant="transparent">Graphic design</Button>
					<Button variant="transparent">Mobile App</Button>
				</div>
				<div className={style.worksListWrapper}>
					<div className={cn(style.worksListContainer)}>
						<WorkCard bigCard />
						<WorkCard bigCard={false} />
					</div>
					<div className={cn(style.worksListContainer, style.worksListContainer_reverse)}>
						<WorkCard bigCard />
						<WorkCard bigCard={false} />
					</div>
					<div className={cn(style.worksListContainer)}>
						<WorkCard bigCard />
						<WorkCard bigCard={false} />
					</div>
					<div className={cn(style.worksListContainer, style.worksListContainer_reverse)}>
						<WorkCard bigCard />
						<WorkCard bigCard={false} />
					</div>
				</div>
			</div>
		</div>
	);
}
