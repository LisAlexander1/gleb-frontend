import BlockLayout from '../../layouts/block-layout/block-layout.tsx';
import styles from './form.module.scss';
import { Form, Link } from 'react-router';
import Checkbox from '../../components/checkbox/checkbox.tsx';
import Button from '../../components/button/button.tsx';

function FormBlock() {
  return (
	<BlockLayout>
	  <Form className={styles.form}>
	  	<h1>Закажи обратный звонок</h1>
		<div className={styles.inputs}>
		  <input placeholder="Фамилия" type="text"/>
		  <input placeholder="Имя" type="text"/>
		  <input placeholder="Отчество" type="text"/>
		  <input placeholder="+7" type="tel"/>
		  <div className={styles.politics}>
			<Checkbox/>
		  	<label> Я согласен на обработку персональных данных в соответствии с <Link to="/politics">политикой конфиденциальности</Link></label>
		  </div>
		</div>
		  <Button size="large">Оставить заявку</Button>
	  </Form>
	</BlockLayout>
  );
}

export default FormBlock;