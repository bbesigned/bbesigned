export const ControlArrow = ({ right }: { right?: boolean }) => (
	<svg
		style={right ? { transform: "rotate(180deg)" } : {}}
		width="73"
		height="14"
		viewBox="0 0 73 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M9.57565 1.5L1.99988 7L9.57565 12.5"
			stroke="#191919"
			strokeWidth="1.76"
			strokeLinecap="square"
		/>
		<path
			d="M71.9999 6.86228L3.74988 7"
			stroke="#191919"
			strokeWidth="1.76"
			strokeLinecap="square"
			strokeLinejoin="round"
		/>
	</svg>
);
