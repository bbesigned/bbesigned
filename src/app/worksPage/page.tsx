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
					<Button
						className={cn(
							style.worksFilterWrapper__actionElement,
							style.worksFilterWrapper__actionElement_all,
						)}
						variant="light">
						All
					</Button>
					<Button
						className={cn(
							style.worksFilterWrapper__actionElement,
							style.worksFilterWrapper__actionElement_ux,
						)}
						variant="transparent">
						UX/UI
					</Button>
					<Button
						className={cn(
							style.worksFilterWrapper__actionElement,
							style.worksFilterWrapper__actionElement_web,
						)}
						variant="transparent">
						Web Design
					</Button>
					<Button
						className={cn(
							style.worksFilterWrapper__actionElement,
							style.worksFilterWrapper__actionElement_graphic,
						)}
						variant="transparent">
						Graphic design
					</Button>
					<Button
						className={cn(
							style.worksFilterWrapper__actionElement,
							style.worksFilterWrapper__actionElement_mobile,
						)}
						variant="transparent">
						Mobile App
					</Button>
				</div>
				<div className={cn(style.worksListWrapper)}>
					<WorkCard cardSize="large" />
					<WorkCard cardSize="small" />
					<WorkCard cardSize="small" />
					<WorkCard cardSize="large" />
					<WorkCard cardSize="large" />
					<WorkCard cardSize="small" />
					<WorkCard cardSize="small" />
					<WorkCard cardSize="large" />
				</div>
			</div>
		</div>
	);
}
