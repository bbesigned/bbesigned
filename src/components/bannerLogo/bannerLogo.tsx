import Image from "next/image";

import { IBannerLogo } from "../../types/common/ComponentsProps";

import commonStyles from "./bannerLogo.module.scss";

const BannerLogo = ({ smallLogo }: IBannerLogo) => {
	return (
		<div className={commonStyles["banner-logo"]}>
			<Image
				src={smallLogo ? "/logo_small(light).webp" : "/logo.webp"}
				alt="Logo"
				width={715}
				height={85}
				priority
				className={`${smallLogo ? commonStyles["banner-logo__small-logo-image"] : commonStyles["banner-logo__logo-image"]}`}
			/>
		</div>
	);
};

export default BannerLogo;
