import { type IIconsProps } from "types/common/PageProps";

export const Linkedin = ({ colorArrow = "#191919", classNames }: IIconsProps) => (
	<svg
		className={classNames}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 52 52"
		width="52"
		height="52"
		fill="none">
		<g clipPath="url(#a)">
			<path
				fill={colorArrow}
				d="M48.15 0H3.84C1.715 0 0 1.676 0 3.748v44.494C0 50.314 1.716 52 3.84 52h44.31c2.123 0 3.85-1.686 3.85-3.748V3.748C52 1.676 50.273 0 48.15 0M15.428 44.312H7.71V19.49h7.718zm-3.859-28.204c-2.478 0-4.479-2.001-4.479-4.469s2-4.469 4.479-4.469c2.468 0 4.469 2.001 4.469 4.47 0 2.457-2.001 4.468-4.469 4.468m32.744 28.204h-7.709V32.246c0-2.874-.05-6.581-4.012-6.581-4.011 0-4.62 3.138-4.62 6.378v12.269h-7.7V19.49h7.395v3.392h.101c1.026-1.95 3.545-4.012 7.292-4.012 7.81 0 9.253 5.14 9.253 11.822z"
			/>
		</g>
	</svg>
);
