export function BannerBackground({ children }) {
	return (
		<div className="relative w-full h-screen overflow-hidden">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
			>
				<source src="../../../public/bannerBackgroundVideo.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="relative z-10 w-full h-full">
				{children}
			</div>
		</div>
	);
}