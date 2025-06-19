import styles from './services-carousel.module.scss';
import { Service } from '../../types/service.ts';
import { useSpringCarousel } from 'react-spring-carousel';
import ServiceItem from './service-item.tsx';
import { services } from '../../data/services.ts';
import Button from '../button/button.tsx';
import { LeftArrow, RightArrow } from '../icons/arrows.tsx';
import LinkButton from '../link-button/link-button.tsx';

type Props = {
  services: Service[];
  header: string;
  size: 'small' | 'large';
  to?: string;
}

function ServicesCarousel(props: Props) {
  const {
	carouselFragment,
	slideToPrevItem,
	slideToNextItem
  } = useSpringCarousel({
	itemsPerSlide: 4,
	withLoop: true,
	items: services.map((service, index) => ({
	  id: index,
	  renderItem: (
		<ServiceItem service={service} size={props.size}/>

	  ),
	})),
  });
  return (
	<div className={styles.block}>
	  <header className={styles.header}>
		<h2>{props.header}</h2>
		<div className={styles.control}>
		  <Button size='small' styleType='secondary' onClick={slideToPrevItem}><LeftArrow/></Button>
		  <Button size='small' styleType='secondary' onClick={slideToNextItem}><RightArrow/></Button>
		</div>
	  </header>
	  <div className={styles.carousel}>
		{carouselFragment}
	  </div>
	  <div className={styles.bottom}>
		<LinkButton to="/services" size='large'>Посмотреть все</LinkButton>
	  </div>
	</div>
  );
}

export default ServicesCarousel;