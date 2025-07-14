import { Positions } from '../utils/TypeEnums';

export interface IProfessional {
  _id?: string;
  name: string;
  position: Positions;
}
