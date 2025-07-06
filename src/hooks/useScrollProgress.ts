import { useEffect, useRef, useState } from "react";

const useScrollProgress = () => {
	const scrollRef = useRef(null);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;

		const handleScroll = () => {
			const { scrollTop, scrollHeight, clientHeight } = el;
			const percent = (scrollTop / (scrollHeight - clientHeight)) * 100;
			setProgress(percent);
		};

		el.addEventListener("scroll", handleScroll);

		return () => el.removeEventListener("scroll", handleScroll);
	}, []);

	return { scrollRef, progress };
};

export default useScrollProgress;
