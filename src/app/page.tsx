"use client";



import BackgroundComponent from "components/background-component/background";
import { MenuItems } from "components/burger-menu/menu-items";
// import { MenuItems } from "components/burger-menu/menu-items";
import { LetsTalkButton } from "components/letstalk-button/lets_talk";

import { MenuButton } from "components/menu-button/menu_button";

import { useBurgerMenu } from "hooks/useBurgerMenu"

import styles from "./page.module.scss"



export default function Home() {
	const {isOpen, toggleMenu, closeMenu} = useBurgerMenu();

	return (
		<>
         <section id="main">		
			<BackgroundComponent />
			<div id= "buttons" className="buttons__container">
		    	<LetsTalkButton onClick={toggleMenu}/>
			    <MenuButton onClick={toggleMenu}/>
		
			
			</div>
		</section>	
		<section id="burger" className={`${styles.burgerMenu} ${isOpen ? styles.open : "hidden"}`}>
          <MenuItems closeMenu={closeMenu}/>
		</section>


		</>
	);
}												
