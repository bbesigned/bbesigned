import { type IIconsProps } from "types/common/PageProps";

export const BackArrow = ({ colorArrow = "#FFF8F0" }: IIconsProps) => (
	<svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M25.8561 17H6.87305"
			stroke={colorArrow}
			strokeWidth="2.0339"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M16.3646 26.4909L6.87305 16.9993L16.3646 7.50781"
			stroke={colorArrow}
			strokeWidth="2.0339"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
