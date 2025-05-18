import SubmitLetsTalkButton from "components/submitLetsTalkButton/submitLetsTalkButton";

import styles from "./letsTalk.module.scss";

export default function LetsTalk() {
	return (
		<div className={styles.letsTalk}>
			<button className={styles.letsTalk__close}>close x</button>
			<div className={styles.letsTalk__container}>
				<div className={styles.letsTalk__title}>
					<div className={styles.letsTalk__info}>YOU CLICK — WE BUILD IT QUICK</div>
					<div className={styles.letsTalk__text}>
						This is just a brief form to gather basic information about you. <br />
						Feel free to fill it out! 😊
					</div>
				</div>
				<form className={styles.letsTalk__form}>
					<div className={styles.letsTalk__item}>
						<p>My name is</p>
						<input type="text" placeholder="Jane Cooper, Wade Warren" />
						<p>and</p>
					</div>
					<div className={styles.letsTalk__item}>
						<p>I need help with</p>
						<input type="text" placeholder="Landing, App, Logotype"/>
					</div>
					<div className={styles.letsTalk__item}>
						<p>You can contact me at</p>
						<input type="text" placeholder="youremail@gmail.com"/>
					</div>
					<div className={styles.letsTalk__item}>
						<p>to discuss the details.</p>
					</div>
					<div className={styles.letsTalk__submit}>
						<div className={styles.letsTalk__agree}>
							<input type="checkbox" name="" id="" />
							<p>I agree to the processing of my <span>personal data</span>.</p>
						</div>
						<div>
							<button>RESET</button>
							<SubmitLetsTalkButton />
							{/* TODO: Button */}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
