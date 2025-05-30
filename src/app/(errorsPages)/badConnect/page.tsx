import Image from "next/image";

import { BottomAllRightsText } from "components/bottomAllRightsText/bottomAllRightsText";
import { RestartIcon } from "assets/script/restartIcon/restartIcon";

import style from "./badConnect.module.scss";

export default function Page() {
	return (
		<div className={style.badConnectWrap}>
			<div className={style.badConnectContainer}>
				<Image
					className={style.badConnectContainer__image}
					src="/pinkWorm.png"
					width={849}
					height={546}
					alt="worm"
					priority
				/>
				<h2 className={style.badConnectContainer__title}>Oops!</h2>
				<p className={style.badConnectContainer__description}>Bad connection</p>
				<button className={style.restartButton}>
					<span className={style.restartButton__text}>Restart</span>
					<RestartIcon classNames={style.restartButton__icon} />
				</button>
				<BottomAllRightsText classnames={style.bottomText} />
			</div>
		</div>
	);
}
