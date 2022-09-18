import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCv, setFormation, setProjets, setAboutMe } from "../../../../store/actions/pagesVisibility";
import "./style.scss";

const NavMenuTop = () => {
	const dispatch = useDispatch();

	const [projetsMenu, setProjetsMenu] = useState(false);
	const [formationMenu, setFormationMenu] = useState(false);
	const [cvMenu, setCvMenu] = useState(false);

	const handleFormation = () => {
		setFormationMenu(false);
		setProjetsMenu(true);
		setCvMenu(true);
		dispatch(setFormation(true));
		dispatch(setProjets(false));
		dispatch(setCv(false));
		dispatch(setAboutMe(false));
	};
	const handleProjets = () => {
		setFormationMenu(false);
		setProjetsMenu(false);
		setCvMenu(true);
		dispatch(setProjets(true));
		dispatch(setFormation(false));
		dispatch(setCv(false));
		dispatch(setAboutMe(false));
	};
	const handleCv = () => {
		setFormationMenu(false);
		setProjetsMenu(false);
		setCvMenu(false);
		dispatch(setCv(true));
		dispatch(setFormation(false));
		dispatch(setProjets(false));
		dispatch(setAboutMe(false));
	};
	const handleAboutMe = () => {
		setFormationMenu(true);
		setProjetsMenu(true);
		setCvMenu(true);
		dispatch(setAboutMe(true));
		dispatch(setFormation(false));
		dispatch(setProjets(false));
		dispatch(setCv(false));
	};

	return (
		<div className="navMenuTop">
			<p className="aboutMe" onClick={handleAboutMe}>
				<b>
					A propos de m<span>&#xa9;</span>i
				</b>
			</p>
			<p className={formationMenu === true ? "formation formation__up" : "formation"} onClick={handleFormation}>
				<b>
					F<span>&#x7b; &#x7d;</span>rmations
				</b>
			</p>
			<p className={projetsMenu === true ? "projets projets__up" : "projets"} onClick={handleProjets}>
				<b>
					Pr<span>()</span>jets
				</b>
			</p>
			<p className={cvMenu === true ? "cv cv__up" : "cv"} onClick={handleCv}>
				<b>Cv</b>
			</p>
		</div>
	);
};

export default NavMenuTop;
