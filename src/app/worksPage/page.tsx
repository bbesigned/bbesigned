import Image from "next/image";

import cn from "classnames";

import { BackButton } from "components/backButton/backButton";

import BannerHeader from "components/bannerHeader/bannerHeader";

import { Button } from "components/button/button";

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
						<div className={style.workWrapper}>
							<div className={style.imageContainer}>
								<span className={style.imageContainer__chips}>Web design</span>
								<Image
									className={cn(style.imageContainer__image, style.imageContainer__image_large)}
									src="/worksPreviewImageLarge.jpg"
									width={1392}
									height={664}
									priority
									alt="work image"></Image>
							</div>
							<p className={style.workWrapper__companyName}>Company name</p>
							<h3 className={style.workWrapper__title}>Turning a legend into an icon</h3>
						</div>
						<div className={style.workWrapper}>
							<div className={style.imageContainer}>
								<span className={style.imageContainer__chips}>Web design</span>
								<Image
									className={cn(style.imageContainer__image, style.imageContainer__image_small)}
									src="/worksPreviewImageSmall.jpg"
									width={988}
									height={664}
									priority
									alt="work image"></Image>
							</div>
							<p className={style.workWrapper__companyName}>Company name</p>
							<h3 className={style.workWrapper__title}>Turning a legend into an icon</h3>
						</div>
					</div>
					<div className={cn(style.worksListContainer, style.worksListContainer_reverse)}>
						<div className={style.workWrapper}>
							<div className={style.imageContainer}>
								<span className={style.imageContainer__chips}>Web design</span>
								<Image
									className={cn(style.imageContainer__image, style.imageContainer__image_large)}
									src="/worksPreviewImageLarge.jpg"
									width={1392}
									height={664}
									priority
									alt="work image"></Image>
							</div>
							<p className={style.workWrapper__companyName}>Company name</p>
							<h3 className={style.workWrapper__title}>Turning a legend into an icon</h3>
						</div>
						<div className={style.workWrapper}>
							<div className={style.imageContainer}>
								<span className={style.imageContainer__chips}>Web design</span>
								<Image
									className={cn(style.imageContainer__image, style.imageContainer__image_small)}
									src="/worksPreviewImageSmall.jpg"
									width={988}
									height={664}
									priority
									alt="work image"></Image>
							</div>
							<p className={style.workWrapper__companyName}>Company name</p>
							<h3 className={style.workWrapper__title}>Turning a legend into an icon</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
