import { useState, useEffect } from "react";

export const useWindowWidth = () => {
	const [width, setWidth] = useState(0);
	useEffect(() => {
		const handleResize = () => {
			const widthText = getComputedStyle(document.body).width;
			const dotIndex = widthText.indexOf("px");
			const widthBody = Math.floor(+widthText.slice(0, dotIndex));
			setWidth(widthBody);
		};
		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [width]);
	return [width];
};
