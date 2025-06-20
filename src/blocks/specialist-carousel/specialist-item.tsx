import { Specialist } from '../../types/specialist.ts';
import styles from './specialist-item.module.scss'

interface Props extends Specialist {
  className?: string;
}

function SpecialistItem({firstName, lastName, surname, photo, speciality, className}: Props) {
  return (
	<div className={`${styles.card} ${className}`}>
	  <img  draggable="false" className={styles.photo} src={photo} alt={`${firstName} ${lastName}`} />
	  <div className={styles.text_block}>
		<span className={styles.name}>{`${lastName} ${firstName}`}<br/>{surname}</span>
		<span className={styles.desc}>{speciality}</span>
	  </div>
	</div>
  );
}

export default SpecialistItem;