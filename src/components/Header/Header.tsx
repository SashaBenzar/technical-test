import Link from 'next/link';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.header__menu}>
        <ul className={styles.header__list}>
          <li>
            <Link href="#about">ABOUT</Link>
          </li>
          <li>
            <Link href="#team">TEAM</Link>
          </li>
          <li>
            <Link href="#projects">PROJECTS</Link>
          </li>
          <li>
            <Link href="#contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
