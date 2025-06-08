import ServicesCarousel from '../../components/services-carousel/services-carousel.tsx';
import { services } from '../../data/services.ts';
import BlockLayout from '../../layouts/block-layout/block-layout.tsx';
import styles from './services.module.scss'

function Services() {
  return (
	<BlockLayout className={styles.block}>
	  <header className={styles.header}>
		<h1>Наши услуги</h1>
	  </header>
	  <ServicesCarousel services={services} header={'Популярные анализы'} size='small'/>
	  <ServicesCarousel services={services} header={'Популярные анализы'} size='large'/>
	</BlockLayout>
  );
}

export default Services;