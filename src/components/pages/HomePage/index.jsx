import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavMenuLeft from "../../menu/NavMenuLeft";
import NavMenuTop from "../../menu/NavMenuTop";

import "./style.scss";

const HomePage = () => {
	const formation = useSelector((state) => state.pagesVisibility.formation);
	const projets = useSelector((state) => state.pagesVisibility.projets);
	const cv = useSelector((state) => state.pagesVisibility.cv);
	const aboutMe = useSelector((state) => state.pagesVisibility.aboutMe);

	const [hideProjet1, setHideProjet1] = useState(false);
	const [hideProjet2, setHideProjet2] = useState(false);

	return (
		<main>
			<div className="homePage">
				<NavMenuTop />
				<NavMenuLeft />
				<div className="homePage__bg">
					<img className="layer_0" src="/layer_0.png" alt="background-img" />
					<img className="layer_1" src="/layer_1_modif.png" alt="background-img" />
					<img className="layer_2" src="/layer_2_modif.png" alt="background-img" />
					<img className="layer_3" src="/layer_3_modif.png" alt="background-img" />
					<img className="layer_4" src="/layer_4_modif.png" alt="background-img" />
					<img className="profil-pic" src="/profil-pic.png" alt="profil-img" />
				</div>
				<hr className="homePage__top-line" />
				<h1>Olivier DAVID</h1>
				<hr className="homePage__bottom-line" />
				<p className="homePage__p1">
					Developpeur <span>Full Stack</span>
				</p>
				<p className="homePage__p2">
					Spécialisation <span>REACT</span>
				</p>
				<div className="homePage__pages">
					<div className={aboutMe === true ? "aboutMe aboutMe__open" : "aboutMe"}>
						{aboutMe === true ? (
							<>
								<p>
									<i>Après un</i> BTS <i>, j'ai exercé le métier de </i>
									<strong>dessinateur / projeteur</strong> <i>chez des</i> Architectes & Maîtres-d'Oeuvre.
									<i> Pendant quelques années et pour mon plus grand plaisir, j'ai pu concevoir des plans d'exécution de maisons individuelles et d'immeubles.</i>
								</p>
								<p>
									<i>Mon</i> besoin d'évoluer <i>m'a poussé vers de nouveaux horizon pour devenir </i>
									<strong>commercial</strong> <i>puis </i>
									<strong>responsable d'agence</strong> <i>d'une société de location de matériel de chantier.</i>
								</p>
								<p>
									<i>18 ans plus tard, toujours avec cette</i> envie d'apprendre<i>, je me suis lancé un nouveau</i> challenge{" "}
									<i>en changeant de cap vers un métier qui m'a toujours attiré et qui est en perpétuelle évolution...</i>
								</p>{" "}
								<p>
									<i>Je me suis donné une année afin de pouvoir me consacrer pleinement à ma </i>
									reconversion professionnelle <i>et suivre une</i>
									<strong> formation intensive</strong> <i>pour devenir</i> <strong>développeur web</strong>.
								</p>
							</>
						) : (
							""
						)}
					</div>
					<div className={formation === true ? "formation formation__open" : "formation"}>
						<span>ECOLE O'CLOCK (6 mois / 798h)</span>
						<p>
							2022 : Formation <strong>Développeur Fullstack</strong> JavaScript - Spécialisation <strong>REACT</strong>
						</p>
						<span>LYCEE TECHNIQUE PIERRE MENDES FRANCE</span>
						<p>
							2001 : <strong>B</strong>revet de <strong>T</strong>echnicien <strong>S</strong>upérieur "<strong>Dessin Assisté par Ordinateur</strong>"
						</p>
						<p>
							1998 : <strong>B</strong>revet de <strong>T</strong>echnicien "<strong>Etude et Economie de la Construction</strong>"
						</p>
						<p>
							1996 : <strong>B</strong>revet d' <strong>E</strong>tudes <strong>P</strong>rofessionnelles "<strong>Construction et Topographie</strong>"
						</p>
					</div>
					<div className={projets === true ? "projets projets__open" : "projets"}>
						<div className={hideProjet1 === true ? "projets__1 projets__1-hide" : "projets__1"} onMouseEnter={() => setHideProjet2(true)} onMouseLeave={() => setHideProjet2(false)}>
							<article className="projets__1-description">
								<p>
									<strong>COLLECTOR CHAIN (projet de fin de formation)</strong>
								</p>
								<p>Plateforme de NFT dédiée aux collectionneurs désireux d'étendre leurs collections physiques vers le digital.</p>
								<div className="projets__1-logo">
									<strong>FRONT :</strong>
									<span>React</span>
									<img src="/reactIco.png" alt="react-ico" />
									<span>JS</span>
									<img src="/jsIco.png" alt="js-ico" />
									<span>Html</span>
									<img src="/htmlIco.png" alt="html-ico" />
									<span>Sass</span>
									<img src="/sassIco.png" alt="sass-ico" />
									<span>Redux</span>
									<img src="/reduxIco.png" alt="js-ico" />
									<span>Axios</span>
									<img src="/axiosIco.png" alt="js-ico" />
								</div>
							</article>
							<div className="projets__1-link">
								<a href="https://collector-chain.herokuapp.com/" target="_blank">
									<ion-icon name="globe-outline"></ion-icon> Collector Chain Website
								</a>
								<a href="https://github.com/O-clock-Daguerre/projet-05-collector-chain" target="_blank">
									<ion-icon name="logo-github"></ion-icon> Repository Github
								</a>
							</div>
							<div className="projets__1-img">
								<img src="/collector_chain.jpg" alt="collector-chain_image" />
							</div>
						</div>
						<div className={hideProjet2 === true ? "projets__2 projets__2-hide" : "projets__2"} onMouseEnter={() => setHideProjet1(true)} onMouseLeave={() => setHideProjet1(false)}>
							<article className="projets__2-description">
								<p>
									<strong>DEV DRY TOOL (projet personnel)</strong>
								</p>
								<p>Générateur de serveur Express sécurisé avec prise en charge de la data.</p>
								<div className="projets__2-logo">
									<strong>BACK :</strong>
									<span>JS</span>
									<img src="/jsIco.png" alt="js-ico" />
									<span>Html</span>
									<img src="/htmlIco.png" alt="react-ico" />
									<span>Css</span>
									<img src="/cssIco.png" alt="react-ico" />
									<span>Express</span>
									<img src="/expressIco.png" alt="html-ico" />
									<span>Node</span>
									<img src="/nodeIco.png" alt="sass-ico" />
									<span>Postgresql</span>
									<img src="/postgresqlIco.png" alt="sass-ico" />
								</div>
							</article>
							<div className="projets__2-link">
								<a href="https://github.com/OlivierDAVID35/DEV_DRY_TOOL" target="_blank">
									<ion-icon name="logo-github"></ion-icon> Repository Github
								</a>
							</div>
							<div className="projets__2-img">
								<img src="/dev_dry_tool.png" alt="dev-dry-tool_image" />
							</div>
						</div>
					</div>
					<div className={cv === true ? "cv cv__open" : "cv"}>
						<p>cv</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
