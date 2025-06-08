import {Service} from './service.ts';

export type Education = {
  year: number;
  name: string;
}

export type Specialist = {
  id: number;
  slug: string;
  firstName: string;
  lastName: string;
  surname?: string;
  post?: string;
  speciality: string;
  photo: string;
  experience: number;
  education: Education[];
  practicalArea: string[];
  services: Service[];
}