import Link from "next/link";

import styles from "./letsTalkButton.module.scss";

const LetsTalkButton = () => {
	return (
		<>
			<div className={styles.letsTalkWrapper}>
				<Link href="/letsTalk" className={styles.letsTalk__actionElement}>
					Let&#39;s Talk
				</Link>
			</div>
		</>
	);
};

export default LetsTalkButton;
