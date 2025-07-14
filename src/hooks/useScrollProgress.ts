import { useEffect, useRef, useState } from "react";

const useScrollProgress = () => {
	const scrollRef = useRef<HTMLDivElement | null>(null);
	const [progress, setProgress] = useState(0);
	const numberPercent = 100;

	useEffect(() => {
		const element = scrollRef.current;
		if (!element) return;

		const handleScroll = () => {
			const { scrollTop, scrollHeight, clientHeight } = element;
			const percent = (scrollTop / (scrollHeight - clientHeight)) * numberPercent;
			setProgress(percent);
		};

		element.addEventListener("scroll", handleScroll);

		return () => element.removeEventListener("scroll", handleScroll);
	}, []);

	return { scrollRef, progress };
};

export default useScrollProgress;
