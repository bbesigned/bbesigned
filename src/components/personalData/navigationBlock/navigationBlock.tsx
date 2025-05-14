import { BackArrow } from "assets/script/backArrow/backArrow";

import style from "./navigationBlock.module.scss";

export const NavigationBlock = () => (
	<div className={style.navigationWrap}>
		<button className={style.backButton}>
			<BackArrow classNames={style.backButton__arrow} />
			<p>Back</p>
		</button>
		<nav className={style.navigationListWrap}>
			<li className={style.navigationListWrap__item}>FAQ</li>
			<li className={style.navigationListWrap__item}>Personal Data</li>
			<li className={style.navigationListWrap__item}>Privacy Policy</li>
		</nav>
	</div>
);
