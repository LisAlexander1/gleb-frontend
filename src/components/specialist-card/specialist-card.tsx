import { Specialist } from '../../types/specialist.ts';
import styles from './specialist-card.module.scss'
import { Link } from 'react-router';
import Button from '../button/button.tsx';
type Props = {
  specialist: Specialist;
}

function SpecialistCard({specialist}: Props) {
  return (
	<div className={styles.card}>
		<img className={styles.photo} src={specialist.photo}/>
	  	<div className={styles.text_block}>
		  <div className={styles.info}>
			<h3>{specialist.lastName} {specialist.firstName} {specialist.surname}</h3>
			<strong>{specialist.speciality}</strong>
			<span className="light-text">{specialist.post}</span>
		  </div>
		  <div className={styles.bottom}>
			<Link className={styles.about_link} to={`/specialist/${specialist.slug}`}>
			  Подробнее о враче
			  <img src="/src/assets/arrow.svg"/>
			</Link>
			<Button styleType="secondary" size="small">Записаться</Button>
		  </div>
		</div>
	</div>
  );
}

export default SpecialistCard;