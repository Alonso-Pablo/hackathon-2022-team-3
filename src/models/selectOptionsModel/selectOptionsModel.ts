import { Seniority } from '../FilterBaseModels/Seniority';
import { Category } from '../FilterBaseModels/Category';
export interface SelectOptionsModel {
  category?: Category[];
  seniority?: Seniority[];
}