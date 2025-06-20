import MainLayout from '../../layouts/main-layout/main-layout.tsx';
import SelectSpecialistCarousel from '../../blocks/select-specialist-carousel/select-specialist-carousel.tsx';
import SelectService from '../../blocks/select-service/select-service.tsx';
import { Specialist } from '../../types/specialist.ts';
import { useEffect, useState } from 'react';
import SelectDate from '../../blocks/select-date/select-date.tsx';
import BlockLayout from '../../layouts/block-layout/block-layout.tsx';
import Button from '../../components/button/button.tsx';
import { Service } from '../../types/service.ts';
import AppointmentModal from '../../components/appointment-modal/appointment-modal.tsx';
import { specialists } from '../../data/specialists.ts';

function AppointmentPage() {
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist>();
  const [date, setDate] = useState<string>((new Date(Date.now())).toISOString().substring(0,10));
  const [service, setService] = useState<Service | undefined>();
  const [slot, setSlot] = useState<string>();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
	setService(undefined);
  }, [selectedSpecialist]);

  const onChangeSpecialist = (specialist: Specialist) => {
	setSelectedSpecialist(specialist);
  }

  console.log(date, slot, service);

  return (
	<MainLayout>
	  <SelectSpecialistCarousel onSelectChange={onChangeSpecialist} />
	  <SelectService onChange={(service) => setService(service)} service={service} id={selectedSpecialist?.id}/>
	  <SelectDate date={date} slot={slot} onChangeSlot={(slot) => setSlot(slot)} onChange={(date) => setDate(date)} hidden={!selectedSpecialist?.id}/>
	  <BlockLayout>
		<Button onClick={() => setModalOpen(true)} hidden={!(date && slot)} style={{margin: "30px"}}>Записаться</Button>
	  </BlockLayout>
	  {date && slot && service && selectedSpecialist && modalOpen && <AppointmentModal date={date} slot={slot} service={service} specialist={selectedSpecialist}/>}
	</MainLayout>
  );
}

export default AppointmentPage;