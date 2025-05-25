"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import SubmitLetsTalkButton from "components/submitLetsTalkButton/submitLetsTalkButton";
import ModalLetsTalk from "components/modalLetsTalk/modalLetsTalk";
import SelectActivity from "components/selectActivity/selectActivity";

import styles from "./letsTalk.module.scss";
import { useRouter } from "next/navigation";

const LetsTalk = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [activity, setActivity] = useState("");
	const [agree, setAgree] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);
	const [isSelect, setIsSelect] = useState(false);
	const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

	const router = useRouter();

	useEffect(() => {
		const isFormDirty = name || email || activity || agree;

		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			if (isFormDirty && !isSubmit) {
				e.preventDefault();
				e.returnValue = ""; 
				return ""; 
			}
		};

		window.addEventListener("beforeunload", handleBeforeUnload);

		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, [name, email, activity, agree, isSubmit]);

	const handleActivityChange = (selected: string[]) => {
		setSelectedActivities(selected);
		setActivity(selected.join(", "));
		setIsSelect(false);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setIsSubmit(false);
	};

	const handleClickSelect = () => {
		setIsSelect((prev) => !prev);
	};

	const handleClickReset = () => {
		setName("");
		setEmail("");
		setActivity("");
		setSelectedActivities([]);
		setAgree(false);
		setIsSubmit(false);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (agree) {
			setIsSubmit(true);

			try {
				setTimeout(() => {
					setIsModalOpen(true);
				}, 2000);

				console.log([name, email, activity, agree]);
			} catch (err) {
				console.error("ERROR", err);
			}
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
						<div className={styles.letsTalk__info}>
							YOU
							<br /> CLICK —<br /> WE BUILD
							<br /> IT QUICK
						</div>
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
									className={styles.letsTalk__input}
									type="text"
									placeholder="Jane Cooper, Wade Warren"
									onChange={(e) => setName(e.target.value)}
									value={name}
								/>
								<p>and</p>
							</div>

							<div className={styles.letsTalk__item}>
								<p>I need help with</p>
								<div className={styles.letsTalk__select}>
									<input
										className={styles.letsTalk__input}
										type="text"
										placeholder="Landing, App, Logotype"
										value={activity}
										readOnly
										onClick={handleClickSelect}
									/>
									{isSelect && (
										<SelectActivity
											selected={selectedActivities}
											onChange={handleActivityChange}
											onClose={() => setIsSelect(false)}
										/>
									)}
								</div>
							</div>

							<div className={styles.letsTalk__item}>
								<p>You can contact me at</p>
								<input
									className={styles.letsTalk__input}
									type="email"
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
								<input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} />
								<p>
									I agree to the processing of my <span>personal data</span>.
								</p>
							</div>

							<div className={styles.letsTalk__submit}>
								<button type="button" className={styles.letsTalk__reset} onClick={handleClickReset}>
									RESET
								</button>
								<SubmitLetsTalkButton submit={isSubmit} agree={agree} />
							</div>
						</div>
					</form>
				</div>

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
