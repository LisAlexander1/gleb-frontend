import styles from "./header.module.scss";
import Button from '../../components/button/button.tsx';
import BlockLayout from '../../layouts/block-layout/block-layout.tsx';
import { Link, useLocation } from 'react-router';

const links = [
  {
	to: '/',
	children: <h3>Главная</h3>
  },
  {
	to: '/services',
	children: <h3>Услуги</h3>
  },
  {
	to: '/specialists',
	children: <h3>Специалисты</h3>
  },
  {
	to: '/about',
	children: <h3>О нас</h3>
  }
]

function Header() {
  const {pathname} = useLocation();
  return (
	<BlockLayout className={styles.block}>
	  <header className={styles.header}>
		<div className={styles.top}>
		  <img className={styles.logo} src="/logo-transparent.png"/>
		  <div className={styles.address}>
			<p>ул. Пушкина, д&nbsp;11,
			  кв.&nbsp;43
			</p>
			<p>Пн-Пт 8:00-20:00</p>
		  </div>
		  <h3 className={styles.phone}>+7 (999) 999-99-99</h3>
		  <Button className={styles.contact_button}>
			Записаться на&nbsp;прием
		  </Button>
		</div>
		<div className={styles.bottom}>
		  {links.map((link, index) =>
			(<Link {...link} key={index} className={`${styles.link} ${link.to === pathname ? styles.current_page : ''}`}/>))}
		</div>
	  </header>
	</BlockLayout>
  );
}

export default Header;