import Image from "next/image";

import { BottomAllRightsText } from "components/bottomAllRightsText/bottomAllRightsText";

import style from "./pageNotFound.module.scss";

export default function Page() {
	return (
		<div className={style.badConnectWrap}>
			<div className={style.badConnectContainer}>
				<Image
					className={style.badConnectContainer__image}
					src="/yellowWorm.png"
					width={980}
					height={546}
					alt="worm"
					priority
				/>
				<h2 className={style.badConnectContainer__title}>404</h2>
				<p className={style.badConnectContainer__description}>Soooooo sorry... Page not found</p>
				<button className={style.backHomeButton}>
					<span className={style.backHomeButton__text}>Back home</span>
				</button>
				<BottomAllRightsText classnames={style.bottomText} />
			</div>
		</div>
	);
}
