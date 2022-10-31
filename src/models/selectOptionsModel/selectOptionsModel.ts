import { Seniority } from './../BaseModels/Seniority';
import { Category } from '../BaseModels/Category';
export interface SelectOptionsModel {
  category?: Category[];
  seniority?: Seniority[];
}