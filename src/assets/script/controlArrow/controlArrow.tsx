import { type IIconsProps } from "types/common/PageProps";

export const ControlArrow = ({ right, classNames }: IIconsProps) => (
	<svg
		className={classNames}
		xmlns="http://www.w3.org/2000/svg"
		style={right ? { transform: "rotate(180deg)" } : {}}
		width="97"
		height="19"
		fill="none">
		<path stroke="#191919" strokeLinecap="square" strokeWidth="2.347" d="M12 2 2 9.5 12 17" />
		<path
			stroke="#191919"
			strokeLinecap="square"
			strokeLinejoin="round"
			strokeWidth="2.347"
			d="M95 9.812 4 10"
		/>
	</svg>
);
