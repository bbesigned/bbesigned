import Image from "next/image";

import BannerHeader from "components/bannerHeader/bannerHeader";

import arrow from "../../../public/backArrow.png";

import styles from "./faq.module.scss";

const Faq = () => {
	return (
		<>
			<div className={styles.faq}>
				<div className={styles.faq__header}>
					<BannerHeader smallLogo={true} />
				</div>
				<div className={styles.faq__info}>
					<p>FAQs</p>
					<p>Frequently Asked Questions</p>
				</div>
				<div className={styles.faq__container}>
					<button className={styles.faq__button}>
						<Image width={33} height={33} priority src={arrow} alt="arrow" />
						<p>Back</p>
					</button>
					<div className={styles.faq__nav}>
						<div>FAQ</div>
						<div>Personal Data</div>
						<div>Privacy Policy</div>
					</div>
				</div>
			</div>
			<div className={styles.faq__questions}></div>
		</>
	);
};

export default Faq;
