import React from "react";

import Image from "next/image";

import BannerHeader from "../bannerHeader/bannerHeader";

import styles from "./works.module.scss";

const Works = () => {
	return (
		<div className={styles.worksWrappper}>
			<div className={styles.worksContainer}>
				<div className={styles.worksContainer__headerWrapper}>
					<BannerHeader />
				</div>
				<Image
					className={styles.worksContainer__titleImage}
					src={"/worksLogoShortPage.png"}
					width={2298}
					height={454}
					priority
					alt="works"
				/>
				<div className={styles.rectangle} />
			</div>
		</div>
	);
};

export default Works;
