import cn from "classnames";

import { BackArrow } from "assets/script/backArrow/backArrow";

import { IBackButton } from "types/common/ComponentsProps";

import { Button } from "components/button/button";

import style from "./backButton.module.scss";

export const BackButton = ({ classname }: IBackButton) => (
	<Button variant="transparent" className={cn(classname, style.backButton)}>
		<BackArrow classNames={style.backButton__arrow} />
		<p>Back</p>
	</Button>
);
