"use client";

import Link from "next/link";

import { Instagram } from "assets/script/instagram/instagram";
import { Linkedin } from "assets/script/linkedin/linkedin";
import { Facebook } from "assets/script/facebook/facebook";
import { IModalLetsTalkProps } from "types/common/ComponentsProps";

import styles from "./modalBurger.module.scss";

const ModalBurger = ({ visible, onClose }: IModalLetsTalkProps) => {
	if (!visible) return null;

	return (
		<div className={styles.modal}>
			<div className={styles.modalBurger}>
				<button className={styles.modalBurger__close} onClick={onClose}>
					<span className={styles.modalBurger__span}>close</span> &#10005;
				</button>

				<div className={styles.modalBurger__container}>
					<Link href="/ ">HOME</Link>
					<Link href="#">ABOUT US</Link>
					<Link href="#">WHAT WE DO</Link>
					<Link href="#">WORKS</Link>
					<Link href="#">TEAM</Link>
				</div>

				<div className={styles.modalBurger__footer}>
					<div className={styles.modalBurger__copyright}>
						<span>© 2025 BeSigned</span>. All rights reserved.
					</div>
					<div className={styles.modalBurger__links}>
						<div>
							<a href="#FACEBOOK">FACEBOOK</a>
							<Facebook classNames={styles.modalBurger__social} />
						</div>
						<div>
							<a href="#LINKEDIN">LINKEDIN</a>
							<Linkedin classNames={styles.modalBurger__social} />
						</div>
						<div>
							<a href="#INSTAGRAM">INSTAGRAM</a>
							<Instagram classNames={styles.modalBurger__social} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalBurger;
