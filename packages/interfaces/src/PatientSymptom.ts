import { IPatient } from './Patient';
import { SymptomLevel } from './Symptom';

export interface IPatientSymptom extends Document {
  patient: IPatient['_id'];
  level: SymptomLevel['level'];
  dateTime: Date;
  note: string;
  createdAt: Date;
}
