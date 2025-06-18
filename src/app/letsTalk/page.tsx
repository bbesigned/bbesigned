"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState, useTransition } from "react";

import SubmitLetsTalkButton from "components/submitLetsTalkButton/submitLetsTalkButton";
import ModalLetsTalk from "components/modalLetsTalk/modalLetsTalk";
import SelectActivity from "components/selectActivity/selectActivity";

import { Instagram } from "assets/script/instagram/instagram";
import { Linkedin } from "assets/script/linkedin/linkedin";
import { Facebook } from "assets/script/facebook/facebook";

import styles from "./letsTalk.module.scss";

const LetsTalk = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [activity, setActivity] = useState("");
	const [agree, setAgree] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);
	const [isSelect, setIsSelect] = useState(false);
	const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
	const [, startTransition] = useTransition();

	const delay = 2000;
	const isFormDirty = name || email || activity || agree;
	const data = name && email && activity && agree;

	useEffect(() => {
		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			if (isFormDirty && !isSubmit) {
				e.preventDefault();
				return "";
			}
		};

		window.addEventListener("beforeunload", handleBeforeUnload);

		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, [name, email, activity, agree, isSubmit, isFormDirty]);

	const handleActivityChange = (selected: string[]) => {
		setIsSelect(false);

		startTransition(() => {
			setSelectedActivities(selected);
			setActivity(selected.join(", "));
		});
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

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (agree && data) {
			setIsSubmit(true);
			setAgree(true);

			try {
				setTimeout(() => {
					setIsModalOpen(true);
				}, delay);
			} catch (err) {
				alert(err);
			}
		}
	};

	return (
		<>
			<div className={styles.letsTalk}>
				<Link href="/" className={styles.letsTalk__close}>
					<span className={styles.letsTalk__span}>close</span> &#10005;
				</Link>

				<div className={styles.letsTalk__container}>
					<div className={styles.letsTalk__title}>
						<div className={styles.letsTalk__info}>
							YOU
							<br className={styles.hideOnMobile} /> CLICK —<br /> WE BUILD IT QUICK
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
									placeholder="your@mail.com"
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
						<div>
							<a href="#FACEBOOK">FACEBOOK</a>
							<Facebook classNames={styles.letsTalk__social} />
						</div>
						<div>
							<a href="#LINKEDIN">LINKEDIN</a>
							<Linkedin classNames={styles.letsTalk__social} />
						</div>
						<div>
							<a href="#INSTAGRAM">INSTAGRAM</a>
							<Instagram classNames={styles.letsTalk__social} />
						</div>
					</div>
				</div>
			</div>

			<ModalLetsTalk visible={isModalOpen} onClose={closeModal} />
		</>
	);
};

export default LetsTalk;
