import BlockLayout from '../../layouts/block-layout/block-layout.tsx';
import styles from './specialist-carouse.module.scss'
import { useSpringCarousel } from 'react-spring-carousel';
import { specialists } from '../../data/specialists.ts';
import SpecialistItem from './specialist-item.tsx';
import Button from '../../components/button/button.tsx';
import { LeftArrow, RightArrow } from '../../components/icons/arrows.tsx';
import LinkButton from '../../components/link-button/link-button.tsx';

function SpecialistCarousel() {
  const {
	carouselFragment,
	slideToPrevItem,
	slideToNextItem
  } = useSpringCarousel ({
	itemsPerSlide: 4,
	withLoop: true,
	slideType: 'fluid',
	items: specialists.map((specialist, index) => ({
	  id: index,
	  renderItem: (
		<SpecialistItem {...specialist}/>

	  ),
	})),
  });
  return (
	<BlockLayout className={styles.block}>
	  <header className={styles.header}>
		<h1>Наши специалисты</h1>
		<div className={styles.control}>
		  <Button radius='round' size="small" styleType="secondary" onClick={slideToPrevItem}><LeftArrow/></Button>
		  <Button radius='round' styleType="secondary" onClick={slideToNextItem}><RightArrow/></Button>
		</div>
	  </header>
	  <div className={styles.carousel}>
		{carouselFragment}
	  </div>
	  <div className={styles.bottom}>
		<LinkButton to="/specialists" size='large' styleType='secondary'><h3>Посмотреть всех</h3></LinkButton>
	  </div>
	</BlockLayout>
  );
}

export default SpecialistCarousel;