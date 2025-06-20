import { Service } from '../../types/service.ts';
import BlockLayout from '../../layouts/block-layout/block-layout.tsx';
import { specialists } from '../../data/specialists.ts';
import styles from './select-service.module.scss';

type Props = {
  onChange?: (service: Service) => void,
  id?: number;
  service?: Service;
}
function SelectService({onChange, id, service}: Props) {
  return (
	<BlockLayout className={styles.block}>
	  <div hidden={!id} >
		<header className={styles.header}>
		  <h1>Выберите услугу</h1>
		</header>

		  <div className={styles.list}>
			{specialists.find((s) => s.id === id)?.services.map((s: Service) => (
			  <label className={styles.service_row}>
				<input onChange={() => onChange && onChange(s)} id={s.name} value={service?.name} type="radio" name="service"/>
				<h3>{s.name}</h3>
				<h2 className={styles.cost}>{s.cost}</h2>
			  </label>
			))}
		  </div>
	  </div>
	</BlockLayout>
  );
}

export default SelectService;