import Image from "next/image";

import { ControlButtons } from "pageElements/projectExamples/controlButtons/controlButtons";

import { UpButton } from "../../components/upButton/upButton";

import style from "./projectExamples.module.scss";
export default function Page() {
	const projectExampleProcessBlockName = "projectExample__process__block-name";
	return (
		<>
			<div className={style.projectExample}>
				<div className={style.projectExample__info}>
					<div className={style.projectExample__info_head}>
						<p className={style.projectExample__info_year}>2024</p>
						<h2 className={style.projectExample__headName}>Project name</h2>
					</div>
					<div className={style.projectExample__process}>
						<div className={style.projectExample__process_wrapper}>
							<p className={style[projectExampleProcessBlockName]}>Process:</p>
							<div className={style.projectExample__process_list}>
								<p>UX/UI</p>
								<p>IA</p>
								<p>Design System</p>
								<p>Mobile</p>
							</div>
						</div>
						<p className={style.projectExample__process__programmingText}>Programming</p>
					</div>
					<div className={style.projectExample__client}>
						<p className={style[projectExampleProcessBlockName]}>Client:</p>
						<p className={style.projectExample__client__companyName}>Company name</p>
					</div>
					<div className={style.projectExample__summary}>
						<p className={style[projectExampleProcessBlockName]}>Summary:</p>
						<div>
							<p className={style.projectExample__summary__text}>
								Beyond technical execution, the project aims to act as a strategic partner, helping
								brands expand their user base, boost revenue, and thrive in the digital realm. With
								a commitment to client satisfaction, the team is dedicated to delivering innovative
								solutions that align with business goals.
							</p>
						</div>
					</div>
				</div>
				<Image
					style={{ flexShrink: "0", height: "720px" }}
					width={950}
					height={720}
					priority
					src="/project_preview.jpg"
					alt="project preview"
				/>
			</div>
			<ControlButtons />
			<UpButton width="107px" height="107px" top="671px" right="80px" />
		</>
	);
}
