import Link from "next/link";

import Image from "next/image";

import { IModalLetsTalkProps } from "types/common/ComponentsProps";

import message from "../../../public/message.png";

import styles from "./modalLetsTalk.module.scss";

const ModalLetsTalk = ({ visible, onClose }: IModalLetsTalkProps) => {
	return (
		<>
			{visible && (
				<div className={styles.modal}>
					<div className={styles.overlay}>
						<div className={styles.modalLetsTalk}>
							<button className={styles.modalLetsTalk__close} onClick={onClose}>
								<span className={styles.modalLetsTalk__span}>close</span> &#10005;
							</button>
							<div className={styles.modalLetsTalk__image}>
								<Image
									src={message}
									alt="Photo"
									width={235}
									height={235}
									style={{ width: "100%", height: "auto" }}
								/>
							</div>

							<div className={styles.modalLetsTalk__title}>
								Your message
								<br /> successfully sent
							</div>
							<div className={styles.modalLetsTalk__text}>
								Your request has been received and we will get back to you shortly.
							</div>
							<div className={styles.modalLetsTalk__buttons}>
								<Link
									href="/"
									className={`${styles.modalLetsTalk__button} ${styles["modalLetsTalk__button--black"]}`}
									onClick={onClose}>
									Go to homepage
								</Link>
								<button type="button" className={styles.modalLetsTalk__button} onClick={onClose}>
									Send again
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ModalLetsTalk;
