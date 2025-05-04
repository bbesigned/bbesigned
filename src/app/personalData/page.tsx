import style from "./personalData.module.scss";

export default function PersonalData() {
	return (
		<div className={style.personalDataTop}>
			<h1 className={style.personalDataTop__title}>Personal Data</h1>
			<div className={style.navigationWrap}>
				<button className={style.navigationWrap__backButton}>Back</button>
				<nav className={style.navigationList}>
					<li className={style.navigationList__item}>FAQ</li>
					<li className={style.navigationList__item}>Personal Data</li>
					<li className={style.navigationList__item}>Privacy Policy</li>
				</nav>
			</div>
		</div>
	);
}
