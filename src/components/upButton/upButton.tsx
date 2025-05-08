import { colorPalette } from "helpers/colorPalette";

import { type IIconsProps } from "../../types/common/PageProps";

import style from "./upButton.module.scss";

export const UpButton = ({ classNames, color = colorPalette.floralWhite }: IIconsProps) => (
	<span className={`${style.default} ${classNames}`}>
		<svg
			className={style.arrow}
			width="34"
			height="34"
			viewBox="0 0 34 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.91675 11.3333L17.0001 4.25L24.0834 11.3333"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17 29.75V4.25"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	</span>
);
