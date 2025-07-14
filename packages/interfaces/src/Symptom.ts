export interface Symptom {
  _id: string;
  title: string;
  description: string;
  icon: string;
  levels?: Array<SymptomLevel>;
  endedAt?: Date;
  createdAt?: Date;
}

export interface SymptomLevel {
  level: number;
  resume: string;
  advisement: string;
  endedAt?: Date;
  createdAt?: Date;
}
