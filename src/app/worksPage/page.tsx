import Image from "next/image";

import { BackButton } from "components/backButton/backButton";

import BannerHeader from "components/bannerHeader/bannerHeader";

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
			</div>
		</div>
	);
}
