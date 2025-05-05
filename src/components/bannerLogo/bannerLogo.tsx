import Image from "next/image";

import cn from "classnames";

import { IBannerLogo } from "../../types/common/ComponentsProps";

import styles from "./bannerLogo.module.scss";

const BannerLogo = ({ smallLogo }: IBannerLogo) => {
	return (
		<div className={styles["bannerLogo"]}>
			<Image
				src={smallLogo ? "/logo_small(light).webp" : "/logo.webp"}
				alt="Logo"
				width={715}
				height={85}
				priority
				className={cn(styles["bannerLogo__mediumLogoImage"], { [styles["bannerLogo__smallLogoImage"]]: smallLogo })}
				// className={`${smallLogo ? styles["banner-logo__small-logo-image"] : styles["banner-logo__logo-image"]}`}
			/>
		</div>
	);
};

export default BannerLogo;
