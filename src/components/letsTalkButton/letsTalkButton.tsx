import Link from "next/link";
import cn from "classnames";

import { ILetsTalkButton } from "types/common/ComponentsProps";

import styles from "./letsTalkButton.module.scss";

const LetsTalkButton = ({ isDark }: ILetsTalkButton) => {
	return (
		<>
			<div
				className={cn(styles.letsTalkWrapper, {
					[styles.darkWrapper]: isDark,
				})}>
				<Link
					href="/letsTalk"
					className={cn(styles.letsTalk__actionElement, {
						[styles.darkElement]: isDark,
					})}>
					Let&#39;s Talk
				</Link>
			</div>
		</>
	);
};

export default LetsTalkButton;
