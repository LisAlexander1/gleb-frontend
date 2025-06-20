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
import styles from "./appointment.page.module.scss";
import Header from '../../blocks/header/header.tsx';

function AppointmentPage() {
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist>();
  const [date, setDate] = useState<string>((new Date(Date.now())).toISOString().substring(0,10));
  const [service, setService] = useState<Service | undefined>();
  const [slot, setSlot] = useState<string>();
  const [name, setName] = useState<string>();
  const [tel, setTel] = useState<string>();
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
	  <BlockLayout className={styles.form_block}>
		<div>
		  <header>
			<h1>Укажите контактные данные</h1>
		  </header>
		  <div className={styles.form}>
			<input placeholder="+79095553322" value={tel} type="tel" onChange={(e) => setTel(e.target.value)} />
			<input placeholder="Иванов Иван Иванович" value={name} type="text" onChange={(e) => setName(e.target.value)}/>
		  </div>

		</div>
	  </BlockLayout>
	  <SelectSpecialistCarousel onSelectChange={onChangeSpecialist} />
	  <SelectService onChange={(service) => setService(service)} service={service} id={selectedSpecialist?.id}/>
	  <SelectDate date={date} slot={slot} onChangeSlot={(slot) => setSlot(slot)} onChange={(date) => setDate(date)} hidden={!selectedSpecialist?.id}/>
	  <BlockLayout>
		<Button onClick={() => setModalOpen(true)} hidden={!(date && slot)} style={{margin: "30px"}}>Записаться</Button>
	  </BlockLayout>
	  {date && slot && service && selectedSpecialist && tel && name && modalOpen && <AppointmentModal phone={tel} name={name} date={date} slot={slot} service={service} specialist={selectedSpecialist}/>}
	</MainLayout>
  );
}

export default AppointmentPage;