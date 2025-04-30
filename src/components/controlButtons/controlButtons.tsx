import { ControlArrow } from "../../assets/script/controlArrow/controlArrow";

import style from "./controlButtons.module.scss";

export const ControlButtons = () => (
	<div className={style.controlButtons}>
		<button className={`${style.controlButtons__btn} ${style.controlButtons__btn_left}`}>
			<ControlArrow />
			<span>Previous project</span>
		</button>
		<button className={`${style.controlButtons__btn} ${style.controlButtons__btn_viewAll}`}>
			View All
		</button>
		<button className={`${style.controlButtons__btn} ${style.controlButtons__btn_right}`}>
			<span>Next Project</span>
			<ControlArrow right />
		</button>
	</div>
);
