import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './checkbox.module.scss'
import CheckIcon from '../icons/check-icon.tsx';

type CheckboxProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'>

function Checkbox(props?: CheckboxProps) {
  return (
	<label className={styles.container}>
	  <input {...props} type="checkbox" className={`${props?.className ?? ''} ${styles.checkbox}`}/>
	  <span className={styles.checkmark}><CheckIcon className={styles.icon}/></span>
	</label>
  );
}

export default Checkbox;