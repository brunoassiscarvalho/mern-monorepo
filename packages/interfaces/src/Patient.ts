export interface IPatientBase {
  _id?: any;
  name: string;
  email: string;
  birthDate: Date;
  gender: string;
  image?: string;
  phone?: string;
  zipCode?: string;
  role: string;
  status?: number;
  createdAt: Date;
}

export interface IPatientComplement {
  cancerType?: string;
  cancerStage?: string;
  religion?: string;
  maritalStatus?: string;
  occupation?: string;
  treatmentSite?: string;
  allergy?: string;
  ocologistName?: string;
}

export interface IPatient extends IPatientBase, IPatientComplement {}

export type IPatientBasic = Pick<IPatient, 'name' | 'email' | 'image' | 'role'>;

// IPatientLoggedAndToken;

export interface IPatientSession extends IPatientBasic {
  token: string;
}

export interface IPatientLogged extends IPatientBasic {
  userId: string;
}

export interface IPatientSecurity {
  email: string;
  password: string;
}

export interface IPatientRegister extends IPatientBasic, IPatientSecurity {
  cep: number;
  phone: number;
}

export type IPatientBasicData = Pick<IPatient, '_id' | 'name'>;

export interface IUserMailConfirmationService
  extends IUserMailConfirmationForm {
  token: string;
}

export interface IUserMailConfirmationForm {
  newEmail: IPatientBase['email'];
  email: IPatientBase['email'];
  password: string;
}

export interface IUserResetPass {
  userEmail: string;
}
