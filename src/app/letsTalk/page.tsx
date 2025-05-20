"use client";

import { useState } from "react";

import Link from "next/link";

import SubmitLetsTalkButton from "components/submitLetsTalkButton/submitLetsTalkButton";

import ModalLetsTalk from "components/modalLetsTalk/modalLetsTalk";

import styles from "./letsTalk.module.scss";
import SelectActivity from "components/selectActivity/selectActivity";

const LetsTalk = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [activity, setActivity] = useState("");
	const [agree, setAgree] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);

	const closeModal = () => {
		setIsModalOpen(false);
		setIsSubmit(false);
	};
	const data = [name, email, activity, agree];

	const handleClickReset = () => {
		setName("");
		setEmail("");
		setActivity("");
		setAgree(false);
		setIsSubmit(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmit(true);
		try {
			setTimeout(() => {
				setIsModalOpen(true);
			}, 2000);
			console.log(data);
		} catch {
			console.log("ERROR");
		}
	};

	return (
		<>
			<div className={styles.letsTalk}>
				<Link href="/" className={styles.letsTalk__close}>
					close x
				</Link>
				<div className={styles.letsTalk__container}>
					<div className={styles.letsTalk__title}>
						<div className={styles.letsTalk__info}>YOU CLICK — WE BUILD IT QUICK</div>
						<div className={styles.letsTalk__text}>
							This is just a brief form to gather basic information about you. <br />
							Feel free to fill it out! 😊
						</div>
					</div>
					<form className={styles.letsTalk__form} onSubmit={handleSubmit}>
						<div className={styles.letsTalk__wrapper}>
							<div className={styles.letsTalk__item}>
								<p>My name is</p>
								<input
									type="text"
									placeholder="Jane Cooper, Wade Warren"
									onChange={(e) => setName(e.target.value)}
									value={name}
								/>
								<p>and</p>
							</div>
							<div className={styles.letsTalk__item}>
								<p>I need help with</p>
								<input
									type="text"
									placeholder="Landing, App, Logotype"
									onChange={(e) => setActivity(e.target.value)}
									value={activity}
								/>
							</div>
							<div className={styles.letsTalk__item}>
								<p>You can contact me at</p>
								<input
									type="text"
									placeholder="youremail@gmail.com"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
							</div>
							<div className={styles.letsTalk__item}>
								<p>to discuss the details.</p>
							</div>
						</div>
						<div>
							<div className={styles.letsTalk__agree}>
								<input
									type="checkbox"
									name=""
									id=""
									checked={agree}
									onChange={() => setAgree(!agree)}
								/>
								<p>
									I agree to the processing of my <span>personal data</span>.
								</p>
							</div>
							<div className={styles.letsTalk__submit}>
								<button type="button" className={styles.letsTalk__reset} onClick={handleClickReset}>
									RESET
								</button>
								<SubmitLetsTalkButton submit={isSubmit} />
							</div>
						</div>
					</form>
				</div>
				<SelectActivity />
				<div className={styles.letsTalk__footer}>
					<div className={styles.letsTalk__copyright}>
						<span>© 2025 BeSigned</span>. All rights reserved.
					</div>
					<div className={styles.letsTalk__links}>
						<a href="#FACEBOOK">FACEBOOK</a>
						<a href="#LINKEDIN">LINKEDIN</a>
						<a href="#INSTAGRAM">INSTAGRAM</a>
					</div>
				</div>
			</div>
			<ModalLetsTalk visible={isModalOpen} onClose={closeModal} />
		</>
	);
};

export default LetsTalk;
