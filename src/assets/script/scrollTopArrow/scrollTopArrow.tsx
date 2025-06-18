import { IIconsProps } from "types/common/PageProps";
import { colorPalette } from "helpers/colorPalette";

const ScrollTopArrow = ({ color = colorPalette.floralWhite }: IIconsProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="2.833em"
			height="4em"
			viewBox="0 0 20 24"
			fill="none"
			stroke={color}
			strokeWidth="0.75"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M10 19V5" />
			<path d="M5 12l5-7 5 7" />
		</svg>
	);
};

export default ScrollTopArrow;
