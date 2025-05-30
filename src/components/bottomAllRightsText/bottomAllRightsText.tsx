import cn from "classnames";

import { IBottomAllRightsText } from "types/common/ComponentsProps";

import style from "./bottomAllRightsText.module.scss";

export const BottomAllRightsText = ({ classnames }: IBottomAllRightsText) => (
	<div className={cn(style.bottomAllRights, classnames)}>
		<span>© 2025 BeSigned.</span> All rights reserved.
	</div>
);
