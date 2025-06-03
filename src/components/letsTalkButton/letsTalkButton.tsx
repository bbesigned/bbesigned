import Link from "next/link";
import cn from "classnames";

import { ILetsTalkButtonProps } from "types/common/ComponentsProps";

import styles from "./letsTalkButton.module.scss";

const LetsTalkButton = ({dark}: ILetsTalkButtonProps) => {

	return (
		<>
			<div
				className={cn(styles.letsTalkWrapper, {
					[styles.darkWrapper]: dark,
				})}>
				<Link
					href="/letsTalk"
					className={cn(styles.letsTalk__actionElement, {
						[styles.darkElement]: dark,
					})}>
					Let&#39;s Talk
				</Link>
			</div>
		</>
	);
};

export default LetsTalkButton;
