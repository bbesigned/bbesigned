import Image from "next/image";

import arrow from "../../../public/scroll.png";

import styles from "./scrollButton.module.scss";

const ScrollButton = () => {
	return (
		<div>
			<button className={styles.scrollButtonContainer}>
				<Image
					className={styles.scrollButtonContainer__iconElement}
					src={arrow}
					alt="arrow"
					priority
				/>
			</button>
		</div>
	);
};

export default ScrollButton;
