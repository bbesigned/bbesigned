import commonStyles from "./letsTalkButton.module.scss";

const LetsTalkButton = () => {
	return (
		<div className={commonStyles.letsTalk__container}>
			<button className={commonStyles.letsTalk}>Let&#39;s Talk</button>
		</div>
	);
};

export default LetsTalkButton;
