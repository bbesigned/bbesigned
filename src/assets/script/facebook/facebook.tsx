import { type IIconsProps } from "types/common/PageProps";

export const Facebook = ({ colorArrow = "#191919", classNames }: IIconsProps) => (
	<svg className={classNames} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 52 52">
		<path
			fill={colorArrow}
			d="m37.296 28.879 1.348-8.873h-8.43V14.25c0-2.428 1.176-4.796 4.951-4.796H39V1.9s-3.478-.6-6.803-.6c-6.945 0-11.48 4.251-11.48 11.943v6.763H13v8.872h7.717V50.33a30 30 0 0 0 4.749.372c1.614 0 3.2-.126 4.749-.372V28.88z"
		/>
	</svg>
);
