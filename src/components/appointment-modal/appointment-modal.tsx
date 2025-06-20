import { Service } from '../../types/service.ts';
import { Specialist } from '../../types/specialist.ts';
import Button from '../button/button.tsx';
import styles from './appointment-modal.module.scss';
import LinkButton from '../link-button/link-button.tsx';

type Props = {
  date: string;
  slot: string;
  service: Service;
  specialist: Specialist;
}

function AppointmentModal({date, slot, service, specialist}: Props) {
  return (
	<div className={styles.wrapper}>
	  <div className={styles.modal}>
		<header>
		  <h2>Успешная запись</h2>
		</header>

		<p>
		  <label>Cпециалист</label>
		  <span>{specialist.lastName} {specialist.firstName} {specialist.surname}</span>
		</p>

		<p>
		  <label>Услуга</label>
		  <span>{service.name}</span>
		</p>

		<p>
		  <label>Стоимость</label>
		  <span className={styles.cost}>{service.cost}</span>
		</p>

		<p>
		  <label>Время записи</label>
		  <span>{date} {slot}</span>
		</p>

		<LinkButton to="/">
		  Вернуться
		</LinkButton>
	  </div>
	</div>
  );
}

export default AppointmentModal;