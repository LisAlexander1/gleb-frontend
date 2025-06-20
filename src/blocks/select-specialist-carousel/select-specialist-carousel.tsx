import React, { useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';
import { specialists } from '../../data/specialists.ts';
import SpecialistItem from '../specialist-carousel/specialist-item.tsx';
import MainLayout from '../../layouts/main-layout/main-layout.tsx';
import BlockLayout from '../../layouts/block-layout/block-layout.tsx';
import { Specialist } from '../../types/specialist.ts';
import styles from '../specialist-carousel/specialist-carouse.module.scss';
import cardStyle from './selectable-specialist-card.module.scss';

type Props = {
  onSelectChange?: (specialist: Specialist) => void;
}

function SelectSpecialistCarousel({onSelectChange}: Props) {
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);
  const {
	carouselFragment,
	slideToPrevItem,
	slideToNextItem
  } = useSpringCarousel({
	itemsPerSlide: 4,
	withLoop: true,
	items: specialists.map((specialist, index) => ({
	  id: index,
	  renderItem: (
		<label key={index} className={cardStyle.card}>
		  <input id={`${specialist.id}`} value={selectedSpecialist?.id} onChange={(event) => {
			setSelectedSpecialist(specialist);
			if (onSelectChange) {
			  onSelectChange(specialist);
			}
			console.log(`select ${specialist.id}`)
		  }} type="radio" name="specialist"/>
		  <SpecialistItem {...specialist} className={cardStyle.card_in}/>
		</label>

	  ),
	})),
  });


  return (
	<BlockLayout className={styles.block}>
	  <div>
		<header className={styles.header}>
		  <h1>Выберите специалиста</h1>
		</header>
		{carouselFragment}
	  </div>
	</BlockLayout>
  );
}

export default SelectSpecialistCarousel;