import cn from "classnames";

import { type IContorlButtons } from "types/common/ComponentsProps";

import { ControlArrow } from "../../assets/script/controlArrow/controlArrow";

import style from "./controlButtons.module.scss";

export const ControlButtons = ({ classnames }: IContorlButtons) => (
	<div className={cn(style.controlButtons, classnames)}>
		<button className={`${style.controlButtons__btn} ${style.controlButtons__btn_left}`}>
			<ControlArrow classNames={style.controlButtons__arrow} />
			<span>Previous project</span>
		</button>
		<button className={`${style.controlButtons__btn} ${style.controlButtons__btn_viewAll}`}>
			View All
		</button>
		<button className={`${style.controlButtons__btn} ${style.controlButtons__btn_right}`}>
			<span>Next Project</span>
			<ControlArrow classNames={style.controlButtons__arrow} right />
		</button>
	</div>
);
