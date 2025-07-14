import { IProfessional } from './Professional';
import { IPatientBasicData } from './Patient';

export interface IAppointmentEvent {
  id?: string;
  title?: string;
  start: Date;
  end: Date;
  extendedProps: IAppointment;
}

export interface IAppointment {
  _id?: string;
  title: string;
  start: Date;
  end: Date;
  professional: IProfessional;
  patient: IPatientBasicData;
  status: string;
}
