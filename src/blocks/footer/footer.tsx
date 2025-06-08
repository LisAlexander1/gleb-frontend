import BlockLayout from '../../layouts/block-layout/block-layout.tsx';
import styles from './footer.module.scss';
import Button from '../../components/button/button.tsx';
import { Link } from 'react-router';

function Footer() {
  return (
	<BlockLayout className={styles.block}>
		<footer className={styles.footer}>
		  <div className={styles.top}>
			<h2><a className={styles.email} href="tel:+79999999999">+7 (999) 999-99-99</a></h2>
			<div className={styles.divider}/>
			<h2><a className={styles.email} href="mailto:mydoctor39@mail.ru">mydoctor39@mail.ru</a></h2>
		  </div>
		  <div className={styles.middle}>
			<h3>Адрес: ул.&nbsp;Пушкина,<br/> д&nbsp;11, кв.&nbsp;43</h3>
			<h3 className={styles.work_time}>Режим работы:<br/> <span className={styles.no_wrap}>Пн-Пт</span> <span className={styles.no_wrap}>8:00-20:00</span></h3>
			<Button styleType='secondary' size='large'><h3>Записаться</h3></Button>
		  </div>
		  <div className={styles.bottom}>
			<div className={styles.links}>
			  <h3><Link to="/license">Лицензия на осуществление медицинской деятельности</Link></h3>
			  <h3><Link to="/politics">Политика конфиденциальности</Link></h3>
			</div>
			<div className={styles.buttons}>
			  <Button styleType='transparent-white'><h3>telegram</h3></Button>
			  <Button styleType='transparent-white'><h3>whatsapp</h3></Button>
			  <Button styleType='transparent-white'><h3>вконтакте</h3></Button>
			</div>
		  </div>
		  <p>
			2023-2025 © ООО «Я здоров» ИНН 1650360595 ОГРН 1181690013559 Лицензия № Л041-01181-16/00288139 от 24.12.2020
		  </p>
		</footer>
	</BlockLayout>
  );
}

export default Footer;