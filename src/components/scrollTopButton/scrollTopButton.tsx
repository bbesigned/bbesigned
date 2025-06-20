import cn from "classnames";

import { IIconsProps } from "types/common/PageProps";
import { colorPalette } from "helpers/colorPalette";

import ScrollTopArrow from "assets/script/scrollTopArrow/scrollTopArrow";

import styles from "./scrollTopButton.module.scss";

const ScrollTopButton = ({ classNames, color = colorPalette.floralWhite }: IIconsProps) => {
	return (
		<div className={cn(styles.scrollTopButton__container, classNames)}>
			<button className={styles.scrollTopButton}>
				<ScrollTopArrow color={color} />
			</button>
		</div>
	);
};

export default ScrollTopButton;
