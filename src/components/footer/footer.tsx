import Link from "next/link";
import cn from "classnames";

import { Facebook } from "assets/script/facebook/facebook";
import { Instagram } from "assets/script/instagram/instagram";
import { Linkedin } from "assets/script/linkedin/linkedin";

import { BottomAllRightsText } from "components/bottomAllRightsText/bottomAllRightsText";

import style from "./footer.module.scss";

export const Footer = () => {
	return (
		<div className={style.footerWrapper}>
			<div className={style.footerContainer}>
				<div className={style.subscribeWrapper}>
					<h2 className={style.subscribeWrapper__head}>Subscribe to our newsletter</h2>
					<form className={style.formWrapper}>
						<input className={style.formWrapper__input} type="email" placeholder="E-mail" />
						<button className={style.formWrapper__submitButton} type="submit">
							Send
						</button>
					</form>
					<div className={style.socialIconsWrapper}>
						<Facebook classNames={style.socialIconsWrapper__icon} />
						<Linkedin classNames={style.socialIconsWrapper__icon} />
						<Instagram classNames={style.socialIconsWrapper__icon} />
					</div>
				</div>
				<div className={style.footerNavigationWrapper}>
					<div className={style.footerNavigationContainer}>
						<h3>Sitemap</h3>
						<ul>
							<li>Home</li>
							<li>About us</li>
							<li>Works</li>
							<li>
								<Link href={"/projectExamples"}>Reviews</Link>
							</li>
							<li>Contact us</li>
						</ul>
					</div>
					<div className={style.footerNavigationContainer}>
						<h3>More</h3>
						<ul>
							<li>FAQ</li>
							<li>
								<Link href={"/personalData"}>Personal Data</Link>
							</li>
							<li>Privacy policy</li>
							<li>Terms of use</li>
							<li>Cookie policy</li>
						</ul>
					</div>
					<div
						className={cn(
							style.footerNavigationContainer,
							style.footerNavigationContainer_socialMediaWrap,
						)}>
						<h3>Social media</h3>
						<ul>
							<li>Instagram</li>
							<li>Linkedin</li>
							<li>Facebook</li>
						</ul>
					</div>
					<div className={style.footerNavigationContainer}>
						<h3>Contact info</h3>
						<ul>
							<li>companyemailEx@gmail.com</li>
							<li>(239) 349-5974</li>
						</ul>
					</div>
				</div>
			</div>
			<BottomAllRightsText />
		</div>
	);
};
