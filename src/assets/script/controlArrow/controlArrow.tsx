import { type IIconsProps } from "types/common/PageProps";

export const   ControlArrow = ({ right, classNames }: IIconsProps) => (
	<svg
		className={classNames}
		style={right ? { transform: "rotate(180deg)" } : {}}
		height="19"
		fill="none"
		viewBox="0 0 93 19">
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
