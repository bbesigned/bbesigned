import BannerHeader from "components/bannerHeader/bannerHeader";

import { NavigationBlock } from "components/personalData/navigationBlock/navigationBlock";

import { Footer } from "components/footer/footer";

import style from "./personalData.module.scss";

export default function PersonalData() {
	return (
		<>
			<div className={style.personalDataWrap}>
				<div className={style.personalDataTopContainer}>
					<div className={style.bannerWrapper}>
						<BannerHeader />
					</div>
					<h1 className={style.personalDataTopContainer__title}>Personal Data</h1>
					<NavigationBlock />
				</div>
				<div className={style.personalDataTopicsWrapper}>
					<div className={style.personalDataTopicsContainer}>
						<ol className={style.topicsList}>
							<li className={style.topicsList__item}>
								<h3>1. How to contact with you?</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur. Nullam aliquam nunc dictum ut risus.
									Mauris molestie id ultrices at volutpat arcu eget et. Enim elit libero sit
									tristique maecenas diam consectetur sapien. Ante id adipiscing consequat odio.
									Varius vitae enim volutpat bibendum a amet eu mollis elementum. Lectus luctus
									donec tempus penatibus bibendum augue neque felis posuere.
								</p>
								<p>
									Non velit morbi sed faucibus ultricies. Non erat consectetur ante egestas sapien.
									At sed enim egestas hac fermentum lorem mi fermentum porttitor. In mattis enim
									massa pretium tristique vitae. Nec sed tempus eget augue ornare dolor. Velit morbi
									arcu ullamcorper morbi sed adipiscing.
								</p>
								<p>
									Id tellus vulputate commodo volutpat. Adipiscing eu gravida accumsan vulputate.
									Pharetra vitae aliquet pharetra felis sed sit imperdiet. Cursus tempus lorem
									dictum fringilla. Porta ultricies amet semper urna facilisis etiam integer
									eleifend aenean. Diam dui turpis sed sapien arcu sapien lorem neque sed. Lectus
									enim ultrices habitant cursus malesuada. Rhoncus tincidunt suscipit gravida
									elementum molestie. Pulvinar lorem sed vestibulum mauris.
								</p>
							</li>
							<li className={style.topicsList__item}>
								<h3>2. How to contact with you?</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur. Vulputate tincidunt tincidunt posuere eu.
									Enim cras pulvinar fermentum sollicitudin dictumst lacinia ridiculus. Eu viverra
									sed libero egestas maecenas gravida sem ac. Dui in tellus sit felis mauris. Nullam
									magna vitae libero morbi dis egestas. Porttitor urna elementum sed sapien.
									Vestibulum morbi nullam consectetur dui molestie lectus et fringilla. Arcu egestas
									congue morbi mauris non scelerisque suspendisse facilisis. At nibh tortor sit mi.
									Rhoncus nam nec nisl arcu mauris non sit eu porttitor. Turpis semper sit diam ante
									egestas quis senectus nec.
								</p>
								<p>
									Id auctor vitae tincidunt sed facilisis vel dui lorem lectus. Pellentesque neque
									consectetur eu nam dolor quam urna posuere morbi. Diam feugiat purus tempor
									euismod enim. Ultricies elementum sed dictum gravida amet ultrices. Libero
									imperdiet rhoncus feugiat quam in mi varius eget. Ipsum ultrices est at nisi at ut
									augue mauris. Nunc nibh neque pharetra vestibulum. Vitae nisl consequat fusce
									fames suspendisse quam blandit diam eget. Convallis scelerisque netus et quam
									vitae mattis sem dolor velit. Nibh consectetur ut et amet. Viverra sit etiam nisl
									mi arcu. Porta neque ultrices suspendisse posuere amet. Tortor etiam augue cursus
									tellus scelerisque viverra vulputate viverra. Arcu elementum sit ultrices sagittis
									sed. Elit lorem elit ac in dolor.
								</p>
							</li>
							<li className={style.topicsList__item}>
								<h3>3. How to contact with you?</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur. A enim est pellentesque imperdiet tempus
									commodo sit. Id malesuada aliquam at nullam amet. Convallis massa vehicula
									ultrices et cras leo mauris. Sit platea vel odio et placerat sollicitudin
									facilisis. Placerat tempus maecenas ligula pharetra laoreet sed sed. Et sed
									phasellus aliquam sed sed. Pulvinar cursus condimentum sit est aliquet ac sodales.
									Posuere mattis mauris id risus eget non at eget gravida. Turpis odio est et congue
									leo elit vivamus. Lectus risus maecenas nascetur est purus consectetur egestas
									quis arcu.
								</p>
							</li>
						</ol>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
