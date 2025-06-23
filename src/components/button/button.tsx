import cn from "classnames";

import { IButton } from "types/common/ComponentsProps";

import style from "./button.module.scss";

export const Button = ({ children, className, variant, ...props }: IButton) => {
	const myComponentClasses = cn({
		[style.buttonTransparent]: variant === "transparent",
		[style.buttonDark]: variant === "dark",
		[style.buttonLight]: variant === "light",
	});
	return (
		<button className={cn(className, myComponentClasses)} {...props}>
			{children}
		</button>
	);
};
