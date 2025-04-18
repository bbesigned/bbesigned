export default function BackgroundComponent() {
	return (
		<div className="relative h-screen">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0"
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
					zIndex: 0,
				}}>
				<source src="/videos/backgroundVideo.mp4" type="video/mp4" />
			</video>
		</div>
	);
}
