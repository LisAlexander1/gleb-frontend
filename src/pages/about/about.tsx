import BlockLayout from '../../layouts/block-layout/block-layout.tsx';
import MainLayout from '../../layouts/main-layout/main-layout.tsx';
import styles from './about.module.scss'
import FormBlock from '../../blocks/form/form-block.tsx';

function About() {
  return (
	<MainLayout>
	  <BlockLayout>
		<div className={styles.text_block}>
		  <h1>О клинике</h1>
		  <h3>
			Медицинский центр «Мой Доктор» в Калининграде — это современное учреждение, где опытные специалисты
			оказывают качественную медицинскую помощь.
		  </h3>
		  <h3>
			Медицинский центр «Мой Доктор» в Калининграде — это современное учреждение, где опытные специалисты
			оказывают качественную медицинскую помощь.
		  </h3>
		  <h3>
			Мы предлагаем широкий спектр услуг, включая диагностику, лечение и профилактику, с использованием передового
			оборудования и современных методов.
		  </h3>
		  <h3>
			Наша главная цель — здоровье и комфорт каждого пациента, поэтому мы уделяем внимание индивидуальным
			потребностям.
		  </h3>
		  <h3>
			«Мой Доктор» — это профессионализм, забота и надежность, которым вы можете доверять. Ваше здоровье — наша
			главная ценность!
		  </h3>
		</div>
	  </BlockLayout>
	  <BlockLayout>
		<div className={styles.contact_block}>
		  <h1>Наши контакты</h1>
		  <div className={styles.contact_grid}>
			<div className={styles.contact_row}>
			  <span className="text-big-regular">Адрес</span>
			  <h3>Адрес: ул. Пушкина, д 11, кв. 43</h3>
			</div>
			<div className={styles.contact_row}>
			  <span className="text-big-regular">Телефоны</span>
			  <h3>+7 (999) 999-99-99</h3>
			</div>
			<div className={styles.contact_row}>
			  <span className="text-big-regular">Режим работы</span>
			  <h3>Пн-Пт 8:00-20:00</h3>
			</div>
			<div className={styles.contact_row}>
			  <span className="text-big-regular">Эл. почта</span>
			  <h3>mydoctor39@mail.ru</h3>
			</div>
		  </div>
		</div>
	  </BlockLayout>
	  <BlockLayout>
		<iframe
		  className={styles.map}
		  src="https://yandex.ru/map-widget/v1/?um=constructor%3Afa57793c725c1ec756042937ba41c56d33263c62e1ae8c2008deae8643296c23&amp;source=constructor"
		  width="100%" height="580" frameBorder="0"></iframe>
	  </BlockLayout>
	  <FormBlock/>
	</MainLayout>
  );
}

export default About;