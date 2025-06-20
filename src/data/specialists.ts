import { Specialist } from '../types/specialist.ts';

export const specialists: Specialist[] = [
  {
	id: 2,
	firstName: 'Тамара',
	lastName: 'Гордина',
	surname: 'Александровна',
	slug: 'gordina-tamara-aleksandrovna',
	speciality: 'Врач функциональной диагностики',
	experience: 9,
	education: [
	  {
		name: 'Таджикский государственный медицинский институт имени Абуали ибн Сины',
		year: 2007
	  }
	],
	practicalArea: [
	  'Функциональная диагностика',
	  'Интерпретация ЭКГ и проведение обследований',
	  'Проведение ЭхоКГ и спирометрии',
	  'Мониторинг по Холтеру в разных конфигурациях'
	],
	post: 'Кандидат медицинских наук',
	photo: '/resized_image_2.jpg',
	services: [
	  { name: 'Регистрация ЭКГ', duration: '–', cost: 450 },
	  { name: 'Интерпретация ЭКГ', duration: '–', cost: 450 },
	  { name: 'ЭКГ (с интерпретацией)', duration: '–', cost: 850 },
	  { name: 'ЭКГ с физической нагрузкой', duration: '–', cost: 1500 },
	  { name: 'Эхокардиография', duration: '–', cost: 2100 },
	  { name: 'Холтер ЭКГ 3 отведения – 24 ч', duration: '24 ч', cost: 2500 },
	  { name: 'Холтер ЭКГ 12 отведений – 24 ч', duration: '24 ч', cost: 3000 },
	  { name: 'Холтер ЭКГ 12 отведений – 48 ч', duration: '48 ч', cost: 4000 },
	  { name: 'Холтер ЭКГ 12 отведений – 72 ч', duration: '72 ч', cost: 5000 },
	  { name: 'Холтер ЭКГ 3 отведения – 24 ч + ЭКГ', duration: '24 ч', cost: 2550 },
	  { name: 'Спирометрия', duration: '–', cost: 1000 }
	]
  },
  {
	id: 3,
	firstName: 'Диана',
	lastName: 'Анисимова',
	surname: 'Алексеевна',
	slug: 'anisimova-diana-alekseevna',
	speciality: 'Врач ультразвуковой диагностики',
	experience: 8,
	education: [
	  {
		name: 'Архангельский государственный медицинский институт',
		year: 2012
	  }
	],
	practicalArea: [
	  'Комплексное ультразвуковое обследование',
	  'Диагностика заболеваний внутренних органов',
	  'Работа с беременными и детьми',
	  'Триплексное сканирование сосудов'
	],
	post: '',
	photo: '/resized_image_4.jpg',
	services: [
	  { name: 'УЗИ мягких тканей (1 зона)', duration: '–', cost: 1000 },
	  { name: 'УЗИ суставов (1 сустав)', duration: '–', cost: 1000 },
	  { name: 'УЗИ кисти или стопы', duration: '–', cost: 1000 },
	  { name: 'УЗИ селезёнки', duration: '–', cost: 800 },
	  { name: 'УЗИ лимфоузлов (1 зона)', duration: '–', cost: 1000 },
	  { name: 'УЗИ печени', duration: '–', cost: 800 }
	]
  },
  {
	id: 5,
	firstName: 'Павел',
	lastName: 'Черныш',
	surname: 'Павлович',
	slug: 'chernysh-pavel-pavlovich',
	speciality: 'Терапевт, кардиолог',
	experience: 13,
	education: [
	  {
		name: 'Военно-медицинская академия имени С. М. Кирова',
		year: 2007
	  }
	],
	practicalArea: [
	  'Общая терапия',
	  'Кардиологическая диагностика и лечение',
	  'Диспансерное наблюдение',
	  'Профилактика сердечно-сосудистых заболеваний'
	],
	post: 'Доктор медицинских наук',
	photo: '/12323.png',
	services: [
	  { name: 'Консультация врача-специалиста первичная', duration: '–', cost: 1800 },
	  { name: 'Консультация врача-специалиста повторная', duration: '–', cost: 1500 }
	]
  },
  {
	id: 6,
	firstName: 'Александр',
	lastName: 'Рудой',
	surname: 'Анатольевич',
	slug: 'rudoy-aleksandr-anatolevich',
	speciality: 'Невролог',
	experience: 10,
	education: [
	  {
		name: 'Военно-медицинская академия имени С. М. Кирова',
		year: 2001
	  }
	],
	practicalArea: [
	  'Диагностика и лечение заболеваний центральной и периферической нервной системы',
	  'Комплексное неврологическое обследование',
	  'Консультации для пациентов с хронической болью, мигренями, невритами'
	],
	post: '',
	photo: '/image_2025-05-17_14-35-28.png',
	services: [
	  { name: 'Консультация терапевта доктора медицинских наук', duration: '–', cost: 2500 }
	]
  }
];
