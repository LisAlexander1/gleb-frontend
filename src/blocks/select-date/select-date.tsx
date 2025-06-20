import BlockLayout from '../../layouts/block-layout/block-layout.tsx';
import styles from "./select-date.module.scss"

type Props = {
	hidden?: boolean;
	onChange: (date: string) => void;
	onChangeSlot: (time: string) => void;
	date?: string;
	slot?: string;
}

function SelectDate(props: Props) {
  return (
	<BlockLayout className={styles.block}>
	  <div hidden={props.hidden}>
		<header>
		  <h1 className={styles.header}>
			Выберите дату
		  </h1>

		  <div className={styles.columns}>
			<input value={props.date} onChange={(e) => {props.onChange(e.target.value)}} type="date" className={styles.date}/>
			<div className={styles.slots_wrapper}>
			  {Array.from(Array(10).keys()).map((_, i) => (
				<label className={styles.slot} key={i}>
				  <input id={`${10+i}:00`} value={props.slot} onChange={() => props.onChangeSlot(`${10+i}:00`)} type="radio" name="slot"/>
				  <h2 key={i}>{10+i}:00</h2>
				</label>
			  ))}
			</div>
		  </div>
		</header>
	  </div>
	</BlockLayout>
  );
}

export default SelectDate;