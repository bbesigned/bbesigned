// components/burger-menu/menu-items.tsx
import styles from "./items.module.scss";

interface IMenuItemsProps {
  closeMenu: () => void; // Пропс для закрытия меню
}

export const MenuItems = ({ closeMenu }: IMenuItemsProps) => {
  return (
    <div className={styles.burger__menu}>
     
     <div className={styles.header}>
        <div className={styles.button_close} role="button" onClick={closeMenu}>
          CLOSE
        </div>
      </div>
      <nav className={styles.burger__menu__nav}>
        <ul>
          <li className={styles.nav__menu__item}>
            <a href="#main" onClick={closeMenu}>HOME</a>
          </li>
          <li className={styles.nav__menu__item}>
            <a>ABOUT US</a>
          </li>
          <li className={styles.nav__menu__item}>
            <a>WHAT WE DO</a>
          </li>
          <li className={styles.nav__menu__item}>
            <a>WORKS <span>23</span></a>
          </li>
          <li className={styles.nav__menu__item}>
            <a>TEAM</a>
          </li>
        </ul>
      </nav>

      <div className={styles.burger__menu__footer}>
        <span className={styles.burger__menu__footer__copyright}>
        Copyright © 2009-2025 Besign. All rights reserved.
        </span>

        <div className={styles.burger__menu__footer__links}>
          <ul>
            <li>
              <a href="#" className={styles.footer__links__item}>BEHANCE</a>
            </li>

            <li>
              <a href="#" className={styles.footer__links__item}>LINKEDIN</a>
            </li>
            
            <li>
              <a href="#" className={styles.footer__links__item}>INSTAGRAM</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};