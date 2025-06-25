import Image from "next/image";
import cn from "classnames";

import { IBannerLogo } from "../../types/common/ComponentsProps";

import styles from "./bannerLogo.module.scss";

const BannerLogo = ({ smallLogo, isDark }: IBannerLogo) => {
	const imageSrc = smallLogo
		? isDark
			? "/logo_small(dark).svg"
			: "/logo_small(light).webp"
		: isDark
			? "/logo_dark.svg"
			: "/logo.webp";

	return (
		<div className={styles.bannerLogo}>
			<Image
				src={imageSrc}
				alt="Logo"
				width={715}
				height={85}
				priority
				className={cn(styles.bannerLogo__mediumLogoImage, {
					[styles.bannerLogo__smallLogoImage]: smallLogo,
				})}
			/>
		</div>
	);
};

export default BannerLogo;
