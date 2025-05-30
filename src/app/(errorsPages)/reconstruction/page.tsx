import Image from "next/image";
import cn from "classnames";

import { BottomAllRightsText } from "components/bottomAllRightsText/bottomAllRightsText";

import style from "./reconstruction.module.scss";

export default function Page() {
	return (
		<div className={style.badConnectWrap}>
			<div className={style.badConnectContainer}>
				<Image
					className={style.badConnectContainer__image}
					src="/greenWorm.png"
					width={854}
					height={546}
					alt="worm"
					priority
				/>
				<h2 className={style.badConnectContainer__title}>Oops! Reconstruction</h2>
				<p className={style.badConnectContainer__description}>Thank you for waiting</p>
				<button className={style.restartTimerButton}>
					<span
						className={cn(style.restartTimerButton__text, style.restartTimerButton__text_shadow)}>
						Restart in
					</span>
					<span
						className={cn(style.restartTimerButton__text, style.restartTimerButton__text_timer)}>
						00:30:00
					</span>
				</button>
				<BottomAllRightsText classnames={style.bottomText} />
			</div>
		</div>
	);
}
