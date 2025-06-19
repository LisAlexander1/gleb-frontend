import styles from './service-item.module.scss'
import { Service } from '../../types/service.ts';
import LinkButton from '../link-button/link-button.tsx';

type Props = {
  size: 'small' | 'large'
  service: Service;
}

function ServiceItem(props: Props) {
  return (
	<div className={`${styles.card} ${styles[props.size]}`}>
	  <header className={styles.header}>
		<p>{props.service.name}</p>
		<p className={styles.duration}>{props.service.duration}</p>
	  </header>
	  {(props.service.photo && props.size === 'large') && <img draggable="false" className={styles.photo} src={props.service.photo} alt={props.service.name} />}
	  <div className={styles.bottom}>
		<p className={styles.cost}>{props.service.cost}</p>
		<LinkButton to="/appointment" size='small'>Записаться</LinkButton>
	  </div>
	</div>
  );
}

export default ServiceItem;