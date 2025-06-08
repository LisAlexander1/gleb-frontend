import MainLayout from '../layouts/main-layout/main-layout.tsx';
import FirstBlock from '../blocks/first-block/first-block.tsx';
import FormBlock from '../blocks/form/form-block.tsx';
import SpecialistCarousel from '../blocks/specialist-carousel/specialist-carousel.tsx';
import Services from '../blocks/services/services.tsx';

function MainPage() {
  return (
	<MainLayout>
	  <FirstBlock />
	  <SpecialistCarousel/>
	  <Services/>
	  <FormBlock/>
	</MainLayout>
  );
}

export default MainPage;