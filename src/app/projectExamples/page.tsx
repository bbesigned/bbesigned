import Image from "next/image";

import { ControlButtons } from "components/controlButtons/controlButtons";

import { UpButton } from "../../components/upButton/upButton";

import style from "./projectExamples.module.scss";

export default function ProjectExamples() {
	return (
		<>
			<div className={style.projectExampleWrap}>
				<div className={style.projectExampleContainer}>
					<div className={style.infoHeadWrap}>
						<p className={style.infoHeadWrap__title}>2024</p>
						<h2 className={style.infoHeadWrap__subtitle}>Project name</h2>
					</div>
					<div className={style.processWrapper}>
						<div className={style.processContainer}>
							<p className={style.processWrapper__headTitle}>Process:</p>
							<div className={style.processContainerTitleList}>
								<p>UX/UI</p>
								<p>IA</p>
								<p>Design System</p>
								<p>Mobile</p>
							</div>
						</div>
						<p className={style.processWrapper__title}>Programming</p>
					</div>
					<div className={style.clientWrap}>
						<p className={style.processWrapper__headTitle}>Client:</p>
						<p className={style.clientWrap__title}>Company name</p>
					</div>
					<div className={style.summaryWrapper}>
						<p className={style.processWrapper__headTitle}>Summary:</p>
						<div className={style.summaryContainer}>
							<p className={style.summaryContainer__titleContent}>
								Beyond technical execution, the project aims to act as a strategic partner, helping
								brands expand their user base, boost revenue, and thrive in the digital realm. With
								a commitment to client satisfaction, the team is dedicated to delivering innovative
								solutions that align with business goals.
							</p>
						</div>
					</div>
				</div>
				<Image
					className={style.projectExampleWrap__image}
					width={1270}
					height={947}
					priority
					src="/project_preview.jpg"
					alt="project preview"
				/>
			</div>
			<ControlButtons classnames={style.controlButtons} />
			<UpButton classNames={style.upButton} />
		</>
	);
}
