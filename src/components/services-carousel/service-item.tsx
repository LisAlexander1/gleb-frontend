import styles from './service-item.module.scss'
import { Service } from '../../types/service.ts';
import Button from '../button/button.tsx';

type Props = {
  size: 'small' | 'large'
  service: Service;
  onClick?: () => void;
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
		<Button size='small' onClick={props.onClick}>Записаться</Button>
	  </div>
	</div>
  );
}

export default ServiceItem;