"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

import cn from "classnames";

import { useMemo } from "react";

import BannerHeader from "components/bannerHeader/bannerHeader";

import BannerFooter from "components/bannerFooter/bannerFooter";

import useScrollProgress from "hooks/useScrollProgress";

import aboutUs from "../../../public/aboutUs.png";

import plug from "../../../public/plug.png";

import styles from "./aboutUs.module.scss";

const AboutUs = () => {
	const { scrollRef, progress } = useScrollProgress();
	const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eligendi ullam
							consectetur maiores delectus dolores molestiae, velit, nesciunt quasi ea doloremque ut
							nostrum amet soluta praesentium. Alias, minus! Ducimus, tempore! Voluptatum minus
							eveniet inventore repellendus in iusto, accusamus dicta quidem soluta nam perspiciatis
							quisquam ex tempore et aliquid, sint eligendi? Totam fugit ad illo aliquam, autem
							omnis vero odit dolor. Voluptatibus, ab dolore. At praesentium provident adipisci
							itaque, beatae modi temporibus. Nihil eius itaque ipsam maxime perspiciatis, officiis
							minima dolore ea recusandae facere saepe enim culpa excepturi sapiente placeat
							explicabo? Repellat repudiandae corporis nesciunt, eius dolorem placeat quisquam iusto
							assumenda sint saepe laboriosam architecto deserunt doloremque quis id rem eaque ea
							quo dolorum delectus sunt! Vitae et quaerat cum voluptate? Quae odit alias repellendus
							iusto ab illum error ea adipisci, laudantium maiores velit, magni quam vero. Facilis
							odit, animi omnis dicta similique doloremque est, expedita sint fugit neque
							repellendus quos. Animi, corrupti accusamus eligendi nobis numquam a odio quidem iure
							consequatur, nulla perferendis? Ea necessitatibus quas eveniet impedit aliquid nam
							esse optio quis. Iure pariatur dolorum, cupiditate ipsum saepe aut? Nihil neque
							aliquam itaque? Reprehenderit recusandae sapiente consequatur eveniet, dolorem animi
							voluptatem cum ad numquam? Non distinctio asperiores est rem, doloribus eos minus quos
							obcaecati debitis, blanditiis nisi, itaque expedita. Libero eius dignissimos ullam non
							corrupti neque inventore nesciunt molestiae officiis, cupiditate esse, harum expedita
							ipsam accusantium sapiente, doloremque unde ea eos accusamus porro? Repudiandae quos
							inventore at eligendi aspernatur. Quo maxime maiores, quasi similique est cum quisquam
							fugit non quod repudiandae labore illum ea, nisi voluptatum delectus assumenda
							praesentium harum minima. Repudiandae dolor repellendus vero amet, dolore voluptatum
							natus! Harum exercitationem aliquam, nulla dolores assumenda quia ad a animi
							voluptatibus ratione reiciendis odio eos incidunt illo excepturi dolore debitis!
							Magnam numquam repellat id iste blanditiis similique commodi itaque ipsam. Hic,
							laborum excepturi quidem, voluptas temporibus fugiat reiciendis illum ab rerum unde,
							accusantium dicta exercitationem sequi recusandae corrupti nihil officia? Illo rem
							aperiam fugit, harum consectetur rerum dolor libero asperiores. Laborum dolor odio
							laudantium quas beatae doloremque culpa, eaque praesentium architecto inventore, iusto
							consectetur reprehenderit rem eligendi sunt, autem debitis maxime cupiditate
							voluptatum reiciendis harum explicabo omnis repudiandae nemo! Doloribus. Facilis,
							laborum magni? Quam perferendis repellendus excepturi eligendi reiciendis dolorum,
							quibusdam molestiae libero architecto labore repudiandae, dolor consequatur aliquid
							voluptate eos maxime illo rerum fugiat, alias commodi. Iusto, tempore id! Voluptatem
							rerum qui voluptatum! Sit cupiditate laborum sapiente deserunt, autem vel quo et modi,
							animi, officiis eum! Est, fugiat! Ea nisi eligendi adipisci nam aut impedit modi at
							omnis iure. Architecto assumenda aspernatur cumque at magni ipsam similique eligendi
							tenetur quod obcaecati tempora repellendus, ad optio libero dignissimos, asperiores
							odio ipsa distinctio sit. Enim consequatur assumenda quos iste dolor fugit? Quo,
							recusandae? Nobis sequi, vel repudiandae sit sapiente recusandae alias cumque, omnis
							excepturi molestiae dolores, atque quaerat esse architecto? At cumque odio vel
							consectetur maxime? Quas laboriosam quibusdam ipsum maxime. Libero, saepe et?
							Doloribus doloremque, commodi mollitia atque ea, fugit assumenda numquam amet optio
							cumque laborum earum officiis natus cum! Laudantium quam distinctio dolore natus
							quibusdam corrupti reprehenderit quaerat alias! Ab totam nostrum sint assumenda
							quibusdam quaerat, dicta perspiciatis dolores similique nulla nihil dolorem,
							consectetur dolor esse reprehenderit adipisci fugiat corporis maiores. Doloribus
							accusantium error ea ipsum cupiditate rerum iusto. Quae perferendis omnis tenetur
							laboriosam animi consequatur dolor ipsam? Amet obcaecati aperiam beatae. Dolorem at
							magni labore! Est voluptas natus ab necessitatibus repellat, esse veritatis molestiae
							ullam dicta temporibus suscipit. Quae aliquam, culpa laboriosam architecto excepturi
							distinctio magnam mollitia vitae ipsum ratione sapiente molestias dicta! Quis,
							molestiae eligendi. Totam vero quo facilis impedit delectus deleniti praesentium quia.
							Dolorem, dicta et!`;
	const finalText = 99;
	const numberPercent = 100;

	function splitByPercent(str: string, percent: number): [string, string] {
		const index = Math.floor(str.length * (percent / numberPercent));
		return [str.slice(0, index), str.slice(index)];
	}

	const [a, b] = useMemo(() => {
		return splitByPercent(text, progress);
	}, [progress, text]);

	return (
		<div className={styles.aboutUs}>
			<div className={styles.aboutUs__rectangle}></div>
			<div className={styles.aboutUs__header}>
				<BannerHeader isDark={true} smallLogo={true}></BannerHeader>
			</div>
			<div className={styles.aboutUs__content}>
				<div className={styles.aboutUs__title}>about us</div>

				<div className={styles.aboutUs__scrollContainer}>
					<div className={styles.aboutUs__scrollbar}>
						<div
							className={styles.aboutUs__thumb}
							style={{ height: `${(progress || 0).toFixed(1)}%` }}></div>
					</div>

					<div ref={scrollRef} className={styles.aboutUs__info}>
						<span className={styles["aboutUs__info-active"]}>{a}</span>
						<span className={styles["aboutUs__info-not"]}>{b}</span>
					</div>
				</div>

				<div className={styles.aboutUs__wrapper}>
					<Image className={styles.aboutUs__image} src={aboutUs} alt="besigned" />
				</div>
			</div>

			<div
				className={cn(
					styles.aboutUs__swiper,
					progress >= finalText && styles.aboutUs__swiperVisible,
				)}>
				<p className={styles.aboutUs__proudly}>Proudly working with</p>
				<Swiper
					modules={[Autoplay]}
					loop={true}
					speed={4000}
					slidesPerView="auto"
					spaceBetween={130}
					breakpoints={{
						1920: {
							spaceBetween: 100,
						},
						1440: {
							spaceBetween: 75,
						},
						1170: {
							spaceBetween: 60,
						},
						1024: {
							spaceBetween: 52,
						},
						768: {
							spaceBetween: 60,
						},
					}}
					autoplay={{
						delay: 0,
					}}>
					{Array.from({ length: 12 }).map((_, index) => (
						<SwiperSlide key={index} className={styles.aboutUs__slide}>
							<div className={styles.aboutUs__imgWrapper}>
								<Image fill src={plug} alt="besigned" />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<BannerFooter />
		</div>
	);
};

export default AboutUs;
