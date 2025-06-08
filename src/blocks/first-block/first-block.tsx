import styles from './first-block.module.scss';
import BlockLayout from '../../layouts/block-layout/block-layout.tsx';

function FirstBlock() {
  return (
	<BlockLayout>
	  <div className={styles.container}>
		<img src="/logo-full-tp.png" className={styles.logo} />
		<h1 className={styles.header}>Мы позаботимся о вашем здоровье</h1>
	  </div>
	</BlockLayout>
  );
}

export default FirstBlock;