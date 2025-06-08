import BlockLayout from '../../layouts/block-layout/block-layout.tsx';
import { specialists } from '../../data/specialists.ts';
import SpecialistCard from '../../components/specialist-card/specialist-card.tsx';
import styles from './specialist-grid.module.scss';

function SpecialistsGrid() {
  return (
	  <BlockLayout>
		<div className={styles.grid}>
		  {specialists.map((specialist, index) => <SpecialistCard key={index} specialist={specialist}/>)}
		</div>
	  </BlockLayout>
  );
}

export default SpecialistsGrid;