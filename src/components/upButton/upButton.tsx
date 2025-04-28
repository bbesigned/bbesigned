import style from "./upButton.module.scss";
interface IUpButton {
	width: string;
	height: string;
	right: string;
	top: string;
}
export const UpButton = ({ width, height, right, top }: IUpButton) => (
	<span style={{ width, height, right, top }} className={style.round}>
		<svg
			className={style.arrow}
			width="34"
			height="34"
			viewBox="0 0 34 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M9.91675 11.3333L17.0001 4.25L24.0834 11.3333"
				stroke="#FFF8F0"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17 29.75V4.25"
				stroke="#FFF8F0"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	</span>
);
